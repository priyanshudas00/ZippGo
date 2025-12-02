import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users, vehicles, bookings, coupons, payments, partnerEarnings, couponUsage } from '@/db/schema';

export async function POST() {
  try {
    // Clear all tables in the correct order (considering foreign key constraints)
    await db.delete(couponUsage);
    await db.delete(partnerEarnings);
    await db.delete(payments);
    await db.delete(bookings);
    await db.delete(coupons);
    await db.delete(vehicles);
    await db.delete(users);

    return NextResponse.json({ 
      success: true, 
      message: 'Database cleared successfully' 
    });
  } catch (error) {
    console.error('Database clear error:', error);
    return NextResponse.json(
      { error: 'Failed to clear database' },
      { status: 500 }
    );
  }
}