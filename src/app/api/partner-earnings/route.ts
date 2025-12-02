import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { partnerEarnings } from '@/db/schema';
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
        .from(partnerEarnings)
        .where(eq(partnerEarnings.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json(
          { error: 'Partner earning record not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(record[0], { status: 200 });
    }

    // List with pagination and filters
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const partnerId = searchParams.get('partnerId');
    const vehicleId = searchParams.get('vehicleId');
    const bookingId = searchParams.get('bookingId');
    const payoutStatus = searchParams.get('payoutStatus');

    let query = db.select().from(partnerEarnings);

    // Build filter conditions
    const conditions = [];
    if (partnerId && !isNaN(parseInt(partnerId))) {
      conditions.push(eq(partnerEarnings.partnerId, parseInt(partnerId)));
    }
    if (vehicleId && !isNaN(parseInt(vehicleId))) {
      conditions.push(eq(partnerEarnings.vehicleId, parseInt(vehicleId)));
    }
    if (bookingId && !isNaN(parseInt(bookingId))) {
      conditions.push(eq(partnerEarnings.bookingId, parseInt(bookingId)));
    }
    if (payoutStatus) {
      conditions.push(eq(partnerEarnings.payoutStatus, payoutStatus));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(desc(partnerEarnings.createdAt))
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

    // Validate required fields
    const requiredFields = [
      'partnerId',
      'vehicleId',
      'bookingId',
      'totalAmount',
      'commissionPercentage',
      'commissionAmount',
      'netEarning',
    ];

    for (const field of requiredFields) {
      if (body[field] === undefined || body[field] === null) {
        return NextResponse.json(
          {
            error: `${field} is required`,
            code: 'MISSING_REQUIRED_FIELD',
          },
          { status: 400 }
        );
      }
    }

    // Validate numeric fields
    const numericFields = [
      'partnerId',
      'vehicleId',
      'bookingId',
      'totalAmount',
      'commissionPercentage',
      'commissionAmount',
      'netEarning',
    ];

    for (const field of numericFields) {
      if (typeof body[field] !== 'number' || isNaN(body[field])) {
        return NextResponse.json(
          {
            error: `${field} must be a valid number`,
            code: 'INVALID_FIELD_TYPE',
          },
          { status: 400 }
        );
      }
    }

    // Validate payout status if provided
    const validPayoutStatuses = ['pending', 'processed', 'paid'];
    if (
      body.payoutStatus &&
      !validPayoutStatuses.includes(body.payoutStatus)
    ) {
      return NextResponse.json(
        {
          error: 'Invalid payoutStatus. Must be one of: pending, processed, paid',
          code: 'INVALID_PAYOUT_STATUS',
        },
        { status: 400 }
      );
    }

    // Validate payoutDate format if provided
    if (body.payoutDate) {
      const date = new Date(body.payoutDate);
      if (isNaN(date.getTime())) {
        return NextResponse.json(
          {
            error: 'Invalid payoutDate format. Must be a valid ISO timestamp',
            code: 'INVALID_DATE_FORMAT',
          },
          { status: 400 }
        );
      }
    }

    // Prepare insert data
    const insertData = {
      partnerId: body.partnerId,
      vehicleId: body.vehicleId,
      bookingId: body.bookingId,
      totalAmount: body.totalAmount,
      commissionPercentage: body.commissionPercentage,
      commissionAmount: body.commissionAmount,
      netEarning: body.netEarning,
      payoutStatus: body.payoutStatus || 'pending',
      payoutDate: body.payoutDate || null,
      createdAt: new Date().toISOString(),
    };

    const newRecord = await db
      .insert(partnerEarnings)
      .values(insertData)
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

    const body = await request.json();

    // Check if record exists
    const existing = await db
      .select()
      .from(partnerEarnings)
      .where(eq(partnerEarnings.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Partner earning record not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Validate payout status if provided
    const validPayoutStatuses = ['pending', 'processed', 'paid'];
    if (
      body.payoutStatus &&
      !validPayoutStatuses.includes(body.payoutStatus)
    ) {
      return NextResponse.json(
        {
          error: 'Invalid payoutStatus. Must be one of: pending, processed, paid',
          code: 'INVALID_PAYOUT_STATUS',
        },
        { status: 400 }
      );
    }

    // Validate payoutDate format if provided
    if (body.payoutDate) {
      const date = new Date(body.payoutDate);
      if (isNaN(date.getTime())) {
        return NextResponse.json(
          {
            error: 'Invalid payoutDate format. Must be a valid ISO timestamp',
            code: 'INVALID_DATE_FORMAT',
          },
          { status: 400 }
        );
      }
    }

    // Validate numeric fields if provided
    const numericFields = [
      'partnerId',
      'vehicleId',
      'bookingId',
      'totalAmount',
      'commissionPercentage',
      'commissionAmount',
      'netEarning',
    ];

    for (const field of numericFields) {
      if (
        body[field] !== undefined &&
        (typeof body[field] !== 'number' || isNaN(body[field]))
      ) {
        return NextResponse.json(
          {
            error: `${field} must be a valid number`,
            code: 'INVALID_FIELD_TYPE',
          },
          { status: 400 }
        );
      }
    }

    // Prepare update data
    const updateData: any = {};

    if (body.partnerId !== undefined) updateData.partnerId = body.partnerId;
    if (body.vehicleId !== undefined) updateData.vehicleId = body.vehicleId;
    if (body.bookingId !== undefined) updateData.bookingId = body.bookingId;
    if (body.totalAmount !== undefined)
      updateData.totalAmount = body.totalAmount;
    if (body.commissionPercentage !== undefined)
      updateData.commissionPercentage = body.commissionPercentage;
    if (body.commissionAmount !== undefined)
      updateData.commissionAmount = body.commissionAmount;
    if (body.netEarning !== undefined)
      updateData.netEarning = body.netEarning;
    if (body.payoutStatus !== undefined)
      updateData.payoutStatus = body.payoutStatus;
    if (body.payoutDate !== undefined)
      updateData.payoutDate = body.payoutDate;

    const updated = await db
      .update(partnerEarnings)
      .set(updateData)
      .where(eq(partnerEarnings.id, parseInt(id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json(
        { error: 'Failed to update partner earning record', code: 'UPDATE_FAILED' },
        { status: 500 }
      );
    }

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
      .from(partnerEarnings)
      .where(eq(partnerEarnings.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Partner earning record not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(partnerEarnings)
      .where(eq(partnerEarnings.id, parseInt(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json(
        { error: 'Failed to delete partner earning record', code: 'DELETE_FAILED' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Partner earning record deleted successfully',
        deletedRecord: deleted[0],
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