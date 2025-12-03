import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { bookings } from '@/db/schema';
import { eq, and, desc } from 'drizzle-orm';

export const runtime = 'edge';

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

      const booking = await db
        .select()
        .from(bookings)
        .where(eq(bookings.id, parseInt(id)))
        .limit(1);

      if (booking.length === 0) {
        return NextResponse.json(
          { error: 'Booking not found', code: 'BOOKING_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(booking[0], { status: 200 });
    }

    // List with pagination and filters
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const userId = searchParams.get('userId');
    const vehicleId = searchParams.get('vehicleId');
    const status = searchParams.get('status');
    const paymentStatus = searchParams.get('paymentStatus');

    let query = db.select().from(bookings);

    // Build filter conditions
    const conditions = [];
    if (userId && !isNaN(parseInt(userId))) {
      conditions.push(eq(bookings.userId, parseInt(userId)));
    } else if (userId && isNaN(parseInt(userId))) {
      return NextResponse.json(
        { error: 'Invalid userId provided', code: 'INVALID_USER_ID' },
        { status: 400 }
      );
    }
    if (vehicleId) {
      conditions.push(eq(bookings.vehicleId, parseInt(vehicleId)));
    }
    if (status) {
      conditions.push(eq(bookings.status, status));
    }
    if (paymentStatus) {
      conditions.push(eq(bookings.paymentStatus, paymentStatus));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(desc(bookings.createdAt))
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
      userId,
      vehicleId,
      startDate,
      endDate,
      durationType,
      totalAmount,
      status,
      paymentStatus,
      pickupLocation,
      dropLocation,
      kycData,
      paymentData,
    } = body;

    // Validate required fields
    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required', code: 'MISSING_USER_ID' },
        { status: 400 }
      );
    }

    if (!vehicleId) {
      return NextResponse.json(
        { error: 'vehicleId is required', code: 'MISSING_VEHICLE_ID' },
        { status: 400 }
      );
    }

    if (!startDate) {
      return NextResponse.json(
        { error: 'startDate is required', code: 'MISSING_START_DATE' },
        { status: 400 }
      );
    }

    if (!durationType) {
      return NextResponse.json(
        { error: 'durationType is required', code: 'MISSING_DURATION_TYPE' },
        { status: 400 }
      );
    }

    // Validate durationType
    const validDurationTypes = ['hourly', 'daily', 'monthly'];
    if (!validDurationTypes.includes(durationType)) {
      return NextResponse.json(
        {
          error: 'durationType must be one of: hourly, daily, monthly',
          code: 'INVALID_DURATION_TYPE',
        },
        { status: 400 }
      );
    }

    if (totalAmount === undefined || totalAmount === null) {
      return NextResponse.json(
        { error: 'totalAmount is required', code: 'MISSING_TOTAL_AMOUNT' },
        { status: 400 }
      );
    }

    if (!pickupLocation) {
      return NextResponse.json(
        { error: 'pickupLocation is required', code: 'MISSING_PICKUP_LOCATION' },
        { status: 400 }
      );
    }

    // Prepare insert data with defaults
    const insertData = {
      userId: parseInt(userId),
      vehicleId: parseInt(vehicleId),
      startDate: startDate.trim(),
      endDate: endDate ? endDate.trim() : null,
      durationType: durationType.trim(),
      totalAmount: parseInt(totalAmount),
      status: status?.trim() || 'pending', // Default to pending for admin approval
      paymentStatus: paymentStatus?.trim() || 'pending',
      pickupLocation: pickupLocation.trim(),
      dropLocation: dropLocation ? dropLocation.trim() : null,
      kycData: kycData ? JSON.stringify(kycData) : null,
      paymentData: paymentData ? JSON.stringify(paymentData) : null,
      adminApproved: false, // Requires admin approval
      kycVerified: false, // Requires KYC verification
      createdAt: new Date().toISOString(),
    };

    const newBooking = await db.insert(bookings).values(insertData).returning();

    return NextResponse.json(newBooking[0], { status: 201 });
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
    const { status, endDate, dropLocation, paymentStatus } = body;

    // Check if booking exists
    const existingBooking = await db
      .select()
      .from(bookings)
      .where(eq(bookings.id, parseInt(id)))
      .limit(1);

    if (existingBooking.length === 0) {
      return NextResponse.json(
        { error: 'Booking not found', code: 'BOOKING_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: any = {
      updatedAt: new Date().toISOString(),
    };

    if (status !== undefined) {
      const validStatuses = ['active', 'completed', 'cancelled'];
      if (!validStatuses.includes(status)) {
        return NextResponse.json(
          {
            error: 'status must be one of: active, completed, cancelled',
            code: 'INVALID_STATUS',
          },
          { status: 400 }
        );
      }
      updateData.status = status.trim();
    }

    if (endDate !== undefined) {
      updateData.endDate = endDate ? endDate.trim() : null;
    }

    if (dropLocation !== undefined) {
      updateData.dropLocation = dropLocation ? dropLocation.trim() : null;
    }

    if (paymentStatus !== undefined) {
      const validPaymentStatuses = ['pending', 'paid', 'refunded'];
      if (!validPaymentStatuses.includes(paymentStatus)) {
        return NextResponse.json(
          {
            error: 'paymentStatus must be one of: pending, paid, refunded',
            code: 'INVALID_PAYMENT_STATUS',
          },
          { status: 400 }
        );
      }
      updateData.paymentStatus = paymentStatus.trim();
    }

    const updated = await db
      .update(bookings)
      .set(updateData)
      .where(eq(bookings.id, parseInt(id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json(
        { error: 'Failed to update booking', code: 'UPDATE_FAILED' },
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

    // Check if booking exists
    const existingBooking = await db
      .select()
      .from(bookings)
      .where(eq(bookings.id, parseInt(id)))
      .limit(1);

    if (existingBooking.length === 0) {
      return NextResponse.json(
        { error: 'Booking not found', code: 'BOOKING_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(bookings)
      .where(eq(bookings.id, parseInt(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json(
        { error: 'Failed to delete booking', code: 'DELETE_FAILED' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Booking deleted successfully',
        booking: deleted[0],
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