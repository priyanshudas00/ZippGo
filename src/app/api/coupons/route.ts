import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { coupons } from '@/db/schema';
import { eq, like, and, or, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const code = searchParams.get('code');
    const status = searchParams.get('status');
    const discountType = searchParams.get('discountType');
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');

    // Get single coupon by ID
    if (id) {
      if (isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const coupon = await db
        .select()
        .from(coupons)
        .where(eq(coupons.id, parseInt(id)))
        .limit(1);

      if (coupon.length === 0) {
        return NextResponse.json(
          { error: 'Coupon not found', code: 'COUPON_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(coupon[0], { status: 200 });
    }

    // Get coupon by code
    if (code) {
      const coupon = await db
        .select()
        .from(coupons)
        .where(eq(coupons.code, code))
        .limit(1);

      if (coupon.length === 0) {
        return NextResponse.json(
          { error: 'Coupon not found', code: 'COUPON_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(coupon[0], { status: 200 });
    }

    // List coupons with filters
    let query = db.select().from(coupons);

    const conditions = [];

    if (status) {
      conditions.push(eq(coupons.status, status));
    }

    if (discountType) {
      conditions.push(eq(coupons.discountType, discountType));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(desc(coupons.createdAt))
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
    const {
      code,
      description,
      discountType,
      discountValue,
      minBookingAmount,
      maxDiscount,
      validFrom,
      validUntil,
      usageLimit,
    } = body;

    // Validate required fields
    if (!code) {
      return NextResponse.json(
        { error: 'Code is required', code: 'MISSING_CODE' },
        { status: 400 }
      );
    }

    if (!description) {
      return NextResponse.json(
        { error: 'Description is required', code: 'MISSING_DESCRIPTION' },
        { status: 400 }
      );
    }

    if (!discountType) {
      return NextResponse.json(
        { error: 'Discount type is required', code: 'MISSING_DISCOUNT_TYPE' },
        { status: 400 }
      );
    }

    if (!['percentage', 'fixed'].includes(discountType)) {
      return NextResponse.json(
        {
          error: 'Discount type must be either "percentage" or "fixed"',
          code: 'INVALID_DISCOUNT_TYPE',
        },
        { status: 400 }
      );
    }

    if (discountValue === undefined || discountValue === null) {
      return NextResponse.json(
        { error: 'Discount value is required', code: 'MISSING_DISCOUNT_VALUE' },
        { status: 400 }
      );
    }

    if (typeof discountValue !== 'number' || discountValue <= 0) {
      return NextResponse.json(
        {
          error: 'Discount value must be a positive number',
          code: 'INVALID_DISCOUNT_VALUE',
        },
        { status: 400 }
      );
    }

    if (!validFrom) {
      return NextResponse.json(
        { error: 'Valid from date is required', code: 'MISSING_VALID_FROM' },
        { status: 400 }
      );
    }

    if (!validUntil) {
      return NextResponse.json(
        { error: 'Valid until date is required', code: 'MISSING_VALID_UNTIL' },
        { status: 400 }
      );
    }

    // Validate date formats
    try {
      new Date(validFrom).toISOString();
      new Date(validUntil).toISOString();
    } catch {
      return NextResponse.json(
        { error: 'Invalid date format for validity dates', code: 'INVALID_DATE_FORMAT' },
        { status: 400 }
      );
    }

    // Check if dates are logical
    if (new Date(validFrom) >= new Date(validUntil)) {
      return NextResponse.json(
        {
          error: 'Valid from date must be before valid until date',
          code: 'INVALID_DATE_RANGE',
        },
        { status: 400 }
      );
    }

    // Check for duplicate code
    const existingCoupon = await db
      .select()
      .from(coupons)
      .where(eq(coupons.code, code.trim().toUpperCase()))
      .limit(1);

    if (existingCoupon.length > 0) {
      return NextResponse.json(
        { error: 'Coupon code already exists', code: 'DUPLICATE_CODE' },
        { status: 400 }
      );
    }

    const newCoupon = await db
      .insert(coupons)
      .values({
        code: code.trim().toUpperCase(),
        description: description.trim(),
        discountType,
        discountValue,
        minBookingAmount: minBookingAmount ?? null,
        maxDiscount: maxDiscount ?? null,
        validFrom: new Date(validFrom).toISOString(),
        validUntil: new Date(validUntil).toISOString(),
        usageLimit: usageLimit ?? null,
        usedCount: 0,
        status: 'active',
        createdAt: new Date().toISOString(),
      })
      .returning();

    return NextResponse.json(newCoupon[0], { status: 201 });
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

    // Check if coupon exists
    const existingCoupon = await db
      .select()
      .from(coupons)
      .where(eq(coupons.id, parseInt(id)))
      .limit(1);

    if (existingCoupon.length === 0) {
      return NextResponse.json(
        { error: 'Coupon not found', code: 'COUPON_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: Record<string, any> = {};

    // Only allow updating specific fields
    if (body.status !== undefined) {
      if (!['active', 'inactive', 'expired'].includes(body.status)) {
        return NextResponse.json(
          {
            error: 'Status must be one of: active, inactive, expired',
            code: 'INVALID_STATUS',
          },
          { status: 400 }
        );
      }
      updates.status = body.status;
    }

    if (body.usedCount !== undefined) {
      if (typeof body.usedCount !== 'number' || body.usedCount < 0) {
        return NextResponse.json(
          { error: 'Used count must be a non-negative number', code: 'INVALID_USED_COUNT' },
          { status: 400 }
        );
      }
      updates.usedCount = body.usedCount;
    }

    if (body.usageLimit !== undefined) {
      if (body.usageLimit !== null && (typeof body.usageLimit !== 'number' || body.usageLimit < 0)) {
        return NextResponse.json(
          { error: 'Usage limit must be a non-negative number or null', code: 'INVALID_USAGE_LIMIT' },
          { status: 400 }
        );
      }
      updates.usageLimit = body.usageLimit;
    }

    if (body.description !== undefined) {
      if (!body.description || typeof body.description !== 'string') {
        return NextResponse.json(
          { error: 'Description must be a non-empty string', code: 'INVALID_DESCRIPTION' },
          { status: 400 }
        );
      }
      updates.description = body.description.trim();
    }

    if (body.minBookingAmount !== undefined) {
      updates.minBookingAmount = body.minBookingAmount;
    }

    if (body.maxDiscount !== undefined) {
      updates.maxDiscount = body.maxDiscount;
    }

    if (body.validFrom !== undefined) {
      try {
        updates.validFrom = new Date(body.validFrom).toISOString();
      } catch {
        return NextResponse.json(
          { error: 'Invalid valid from date format', code: 'INVALID_VALID_FROM' },
          { status: 400 }
        );
      }
    }

    if (body.validUntil !== undefined) {
      try {
        updates.validUntil = new Date(body.validUntil).toISOString();
      } catch {
        return NextResponse.json(
          { error: 'Invalid valid until date format', code: 'INVALID_VALID_UNTIL' },
          { status: 400 }
        );
      }
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No valid fields to update', code: 'NO_UPDATES' },
        { status: 400 }
      );
    }

    const updated = await db
      .update(coupons)
      .set(updates)
      .where(eq(coupons.id, parseInt(id)))
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

    // Check if coupon exists
    const existingCoupon = await db
      .select()
      .from(coupons)
      .where(eq(coupons.id, parseInt(id)))
      .limit(1);

    if (existingCoupon.length === 0) {
      return NextResponse.json(
        { error: 'Coupon not found', code: 'COUPON_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(coupons)
      .where(eq(coupons.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Coupon deleted successfully',
        coupon: deleted[0],
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