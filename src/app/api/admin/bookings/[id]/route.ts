import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { bookings } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bookingId = parseInt(params.id);
    if (!bookingId || isNaN(bookingId)) {
      return NextResponse.json(
        { error: 'Valid booking ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { adminApproved, kycVerified, status } = body;

    // Find the booking
    const existingBooking = await db
      .select()
      .from(bookings)
      .where(eq(bookings.id, bookingId))
      .limit(1);

    if (existingBooking.length === 0) {
      return NextResponse.json(
        { error: 'Booking not found', code: 'BOOKING_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: any = {};
    
    if (typeof adminApproved === 'boolean') {
      updateData.adminApproved = adminApproved;
    }
    
    if (typeof kycVerified === 'boolean') {
      updateData.kycVerified = kycVerified;
    }
    
    if (status) {
      updateData.status = status;
    }

    // If both admin approved and KYC verified, change status to active
    if (adminApproved && kycVerified) {
      updateData.status = 'active';
    }

    // Update the booking
    const updatedBooking = await db
      .update(bookings)
      .set(updateData)
      .where(eq(bookings.id, bookingId))
      .returning();

    return NextResponse.json(updatedBooking[0], { status: 200 });
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}