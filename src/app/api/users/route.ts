import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';

export const runtime = 'edge';
import { eq, like, or, and, desc } from 'drizzle-orm';

const VALID_ROLES = ['user', 'partner', 'admin', 'staff'];

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const user = await db
        .select()
        .from(users)
        .where(eq(users.id, parseInt(id)))
        .limit(1);

      if (user.length === 0) {
        return NextResponse.json(
          { error: 'User not found', code: 'USER_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(user[0], { status: 200 });
    }

    // Check for specific email lookup
    const email = searchParams.get('email');
    if (email) {
      const user = await db
        .select()
        .from(users)
        .where(eq(users.email, email.toLowerCase()))
        .limit(1);

      if (user.length === 0) {
        return NextResponse.json(
          { error: 'User not found', code: 'USER_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(user[0], { status: 200 });
    }

    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const role = searchParams.get('role');
    const city = searchParams.get('city');

    let query = db.select().from(users).orderBy(desc(users.createdAt));

    const conditions = [];

    if (search) {
      conditions.push(
        or(
          like(users.name, `%${search}%`),
          like(users.email, `%${search}%`)
        )
      );
    }

    if (role) {
      if (!VALID_ROLES.includes(role)) {
        return NextResponse.json(
          { error: 'Invalid role filter', code: 'INVALID_ROLE' },
          { status: 400 }
        );
      }
      conditions.push(eq(users.role, role));
    }

    if (city) {
      conditions.push(like(users.city, `%${city}%`));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, role, profileImage, address, city } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required', code: 'MISSING_EMAIL' },
        { status: 400 }
      );
    }

    if (!validateEmail(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email format', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    // Phone is optional for OAuth users, required for manual registration
    let cleanedPhone = null;
    if (phone && phone.trim()) {
      cleanedPhone = phone.trim().replace(/[\s-]/g, '');
      if (!validatePhone(cleanedPhone)) {
        return NextResponse.json(
          { error: 'Invalid phone format. Phone must be 10 digits', code: 'INVALID_PHONE' },
          { status: 400 }
        );
      }
    }

    if (!role || !role.trim()) {
      return NextResponse.json(
        { error: 'Role is required', code: 'MISSING_ROLE' },
        { status: 400 }
      );
    }

    if (!VALID_ROLES.includes(role.trim())) {
      return NextResponse.json(
        {
          error: `Role must be one of: ${VALID_ROLES.join(', ')}`,
          code: 'INVALID_ROLE',
        },
        { status: 400 }
      );
    }

    const existingEmail = await db
      .select()
      .from(users)
      .where(eq(users.email, email.trim().toLowerCase()))
      .limit(1);

    if (existingEmail.length > 0) {
      return NextResponse.json(
        { error: 'Email already exists', code: 'EMAIL_EXISTS' },
        { status: 400 }
      );
    }

    // Only check for existing phone if phone is provided
    if (cleanedPhone) {
      const existingPhone = await db
        .select()
        .from(users)
        .where(eq(users.phone, cleanedPhone))
        .limit(1);

      if (existingPhone.length > 0) {
        return NextResponse.json(
          { error: 'Phone number already exists', code: 'PHONE_EXISTS' },
          { status: 400 }
        );
      }
    }

    const newUser = await db
      .insert(users)
      .values({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: cleanedPhone,
        role: role.trim(),
        profileImage: profileImage?.trim() || null,
        address: address?.trim() || null,
        city: city?.trim() || null,
        createdAt: new Date().toISOString(),
      })
      .returning();

    return NextResponse.json(newUser[0], { status: 201 });
  } catch (error: any) {
    console.error('POST error:', error);
    
    // Handle specific database errors
    if (error.message?.includes('UNIQUE constraint failed')) {
      if (error.message.includes('email')) {
        return NextResponse.json(
          { error: 'Email already exists', code: 'EMAIL_EXISTS' },
          { status: 400 }
        );
      }
      if (error.message.includes('phone')) {
        return NextResponse.json(
          { error: 'Phone number already exists', code: 'PHONE_EXISTS' },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.id, parseInt(id)))
      .limit(1);

    if (existingUser.length === 0) {
      return NextResponse.json(
        { error: 'User not found', code: 'USER_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { name, email, phone, role, profileImage, address, city } = body;

    const updates: any = {};

    if (name !== undefined) {
      if (!name.trim()) {
        return NextResponse.json(
          { error: 'Name cannot be empty', code: 'INVALID_NAME' },
          { status: 400 }
        );
      }
      updates.name = name.trim();
    }

    if (email !== undefined) {
      if (!email.trim()) {
        return NextResponse.json(
          { error: 'Email cannot be empty', code: 'INVALID_EMAIL' },
          { status: 400 }
        );
      }
      if (!validateEmail(email.trim())) {
        return NextResponse.json(
          { error: 'Invalid email format', code: 'INVALID_EMAIL' },
          { status: 400 }
        );
      }

      const emailCheck = await db
        .select()
        .from(users)
        .where(eq(users.email, email.trim().toLowerCase()))
        .limit(1);

      if (emailCheck.length > 0 && emailCheck[0].id !== parseInt(id)) {
        return NextResponse.json(
          { error: 'Email already exists', code: 'EMAIL_EXISTS' },
          { status: 400 }
        );
      }

      updates.email = email.trim().toLowerCase();
    }

    if (phone !== undefined) {
      if (!phone.trim()) {
        return NextResponse.json(
          { error: 'Phone cannot be empty', code: 'INVALID_PHONE' },
          { status: 400 }
        );
      }

      const cleanedPhone = phone.trim().replace(/[\s-]/g, '');
      if (!validatePhone(cleanedPhone)) {
        return NextResponse.json(
          { error: 'Invalid phone format. Phone must be 10 digits', code: 'INVALID_PHONE' },
          { status: 400 }
        );
      }

      const phoneCheck = await db
        .select()
        .from(users)
        .where(eq(users.phone, cleanedPhone))
        .limit(1);

      if (phoneCheck.length > 0 && phoneCheck[0].id !== parseInt(id)) {
        return NextResponse.json(
          { error: 'Phone number already exists', code: 'PHONE_EXISTS' },
          { status: 400 }
        );
      }

      updates.phone = cleanedPhone;
    }

    if (role !== undefined) {
      if (!role.trim()) {
        return NextResponse.json(
          { error: 'Role cannot be empty', code: 'INVALID_ROLE' },
          { status: 400 }
        );
      }
      if (!VALID_ROLES.includes(role.trim())) {
        return NextResponse.json(
          {
            error: `Role must be one of: ${VALID_ROLES.join(', ')}`,
            code: 'INVALID_ROLE',
          },
          { status: 400 }
        );
      }
      updates.role = role.trim();
    }

    if (profileImage !== undefined) {
      updates.profileImage = profileImage?.trim() || null;
    }

    if (address !== undefined) {
      updates.address = address?.trim() || null;
    }

    if (city !== undefined) {
      updates.city = city?.trim() || null;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No valid fields to update', code: 'NO_UPDATES' },
        { status: 400 }
      );
    }

    const updatedUser = await db
      .update(users)
      .set(updates)
      .where(eq(users.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedUser[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.id, parseInt(id)))
      .limit(1);

    if (existingUser.length === 0) {
      return NextResponse.json(
        { error: 'User not found', code: 'USER_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(users)
      .where(eq(users.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'User deleted successfully',
        user: deleted[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}