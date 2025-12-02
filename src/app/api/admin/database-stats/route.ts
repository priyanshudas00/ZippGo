import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users, vehicles, bookings, coupons, payments, partnerEarnings } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    // Get count of records in each table
    const [usersCount] = await db.select({ count: sql`count(*)` }).from(users);
    const [vehiclesCount] = await db.select({ count: sql`count(*)` }).from(vehicles);
    const [bookingsCount] = await db.select({ count: sql`count(*)` }).from(bookings);
    const [couponsCount] = await db.select({ count: sql`count(*)` }).from(coupons);
    const [paymentsCount] = await db.select({ count: sql`count(*)` }).from(payments);
    const [partnerEarningsCount] = await db.select({ count: sql`count(*)` }).from(partnerEarnings);

    const stats = {
      users: Number(usersCount.count) || 0,
      vehicles: Number(vehiclesCount.count) || 0,
      bookings: Number(bookingsCount.count) || 0,
      coupons: Number(couponsCount.count) || 0,
      payments: Number(paymentsCount.count) || 0,
      partnerEarnings: Number(partnerEarningsCount.count) || 0,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Database stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch database statistics' },
      { status: 500 }
    );
  }
}