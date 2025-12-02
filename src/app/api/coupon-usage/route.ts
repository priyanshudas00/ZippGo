import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { couponUsage } from '@/db/schema';
import { eq, and, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const record = await db
        .select()
        .from(couponUsage)
        .where(eq(couponUsage.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json(
          { error: 'Coupon usage record not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(record[0], { status: 200 });
    }

    // List with pagination and filters
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const couponId = searchParams.get('couponId');
    const userId = searchParams.get('userId');
    const bookingId = searchParams.get('bookingId');

    let query = db.select().from(couponUsage);

    // Build filter conditions
    const conditions = [];
    if (couponId && !isNaN(parseInt(couponId))) {
      conditions.push(eq(couponUsage.couponId, parseInt(couponId)));
    }
    if (userId && !isNaN(parseInt(userId))) {
      conditions.push(eq(couponUsage.userId, parseInt(userId)));
    }
    if (bookingId && !isNaN(parseInt(bookingId))) {
      conditions.push(eq(couponUsage.bookingId, parseInt(bookingId)));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(desc(couponUsage.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { couponId, userId, bookingId, discountAmount } = body;

    // Validate required fields
    if (!couponId) {
      return NextResponse.json(
        { error: 'Coupon ID is required', code: 'MISSING_COUPON_ID' },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required', code: 'MISSING_USER_ID' },
        { status: 400 }
      );
    }

    if (!bookingId) {
      return NextResponse.json(
        { error: 'Booking ID is required', code: 'MISSING_BOOKING_ID' },
        { status: 400 }
      );
    }

    if (discountAmount === undefined || discountAmount === null) {
      return NextResponse.json(
        { error: 'Discount amount is required', code: 'MISSING_DISCOUNT_AMOUNT' },
        { status: 400 }
      );
    }

    // Validate field types
    if (isNaN(parseInt(couponId))) {
      return NextResponse.json(
        { error: 'Coupon ID must be a valid integer', code: 'INVALID_COUPON_ID' },
        { status: 400 }
      );
    }

    if (isNaN(parseInt(userId))) {
      return NextResponse.json(
        { error: 'User ID must be a valid integer', code: 'INVALID_USER_ID' },
        { status: 400 }
      );
    }

    if (isNaN(parseInt(bookingId))) {
      return NextResponse.json(
        { error: 'Booking ID must be a valid integer', code: 'INVALID_BOOKING_ID' },
        { status: 400 }
      );
    }

    if (isNaN(parseInt(discountAmount))) {
      return NextResponse.json(
        { error: 'Discount amount must be a valid integer', code: 'INVALID_DISCOUNT_AMOUNT' },
        { status: 400 }
      );
    }

    // Create new coupon usage record
    const newRecord = await db
      .insert(couponUsage)
      .values({
        couponId: parseInt(couponId),
        userId: parseInt(userId),
        bookingId: parseInt(bookingId),
        discountAmount: parseInt(discountAmount),
        createdAt: new Date().toISOString(),
      })
      .returning();

    return NextResponse.json(newRecord[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
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

    // Check if record exists
    const existing = await db
      .select()
      .from(couponUsage)
      .where(eq(couponUsage.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Coupon usage record not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: any = {};

    // Build update object with validated fields
    if (body.couponId !== undefined) {
      if (isNaN(parseInt(body.couponId))) {
        return NextResponse.json(
          { error: 'Coupon ID must be a valid integer', code: 'INVALID_COUPON_ID' },
          { status: 400 }
        );
      }
      updates.couponId = parseInt(body.couponId);
    }

    if (body.userId !== undefined) {
      if (isNaN(parseInt(body.userId))) {
        return NextResponse.json(
          { error: 'User ID must be a valid integer', code: 'INVALID_USER_ID' },
          { status: 400 }
        );
      }
      updates.userId = parseInt(body.userId);
    }

    if (body.bookingId !== undefined) {
      if (isNaN(parseInt(body.bookingId))) {
        return NextResponse.json(
          { error: 'Booking ID must be a valid integer', code: 'INVALID_BOOKING_ID' },
          { status: 400 }
        );
      }
      updates.bookingId = parseInt(body.bookingId);
    }

    if (body.discountAmount !== undefined) {
      if (isNaN(parseInt(body.discountAmount))) {
        return NextResponse.json(
          { error: 'Discount amount must be a valid integer', code: 'INVALID_DISCOUNT_AMOUNT' },
          { status: 400 }
        );
      }
      updates.discountAmount = parseInt(body.discountAmount);
    }

    // Check if there are any updates
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No valid fields to update', code: 'NO_UPDATES' },
        { status: 400 }
      );
    }

    // Perform update
    const updated = await db
      .update(couponUsage)
      .set(updates)
      .where(eq(couponUsage.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
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

    // Check if record exists
    const existing = await db
      .select()
      .from(couponUsage)
      .where(eq(couponUsage.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Coupon usage record not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Delete the record
    const deleted = await db
      .delete(couponUsage)
      .where(eq(couponUsage.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Coupon usage record deleted successfully',
        record: deleted[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}