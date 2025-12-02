import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users, vehicles, bookings, coupons, payments, partnerEarnings } from '@/db/schema';

export async function POST() {
  try {
    // Sample users data
    const sampleUsers = [
      {
        name: 'Admin User',
        email: 'admin@zippgo.com',
        phone: '+91-9876543210',
        role: 'admin',
        profileImage: null,
        address: 'Admin Office, Tech Park',
        city: 'Bengaluru',
        createdAt: new Date().toISOString(),
      },
      {
        name: 'John Partner',
        email: 'partner@zippgo.com',
        phone: '+91-9876543211',
        role: 'partner',
        profileImage: null,
        address: 'Partner Location',
        city: 'Mumbai',
        createdAt: new Date().toISOString(),
      },
      {
        name: 'Jane Customer',
        email: 'customer@zippgo.com',
        phone: '+91-9876543212',
        role: 'user',
        profileImage: null,
        address: 'Customer Address',
        city: 'Delhi',
        createdAt: new Date().toISOString(),
      },
    ];

    // Insert users and get IDs
    const insertedUsers = await db.insert(users).values(sampleUsers).returning();
    const adminUser = insertedUsers[0];
    const partnerUser = insertedUsers[1];
    const customerUser = insertedUsers[2];

    // Sample vehicles data
    const sampleVehicles = [
      {
        partnerId: partnerUser.id,
        vehicleType: 'bike',
        brand: 'Hero',
        model: 'Splendor Plus',
        registrationNumber: 'MH01AB1234',
        year: 2023,
        color: 'Black',
        imageUrl: null,
        hourlyRate: 50,
        dailyRate: 400,
        monthlyRate: 8000,
        status: 'available',
        location: 'Mumbai Central',
        gpsEnabled: true,
        lastServiceDate: new Date('2024-11-01').toISOString(),
        createdAt: new Date().toISOString(),
      },
      {
        partnerId: partnerUser.id,
        vehicleType: 'scooter',
        brand: 'Honda',
        model: 'Activa 6G',
        registrationNumber: 'DL02CD5678',
        year: 2023,
        color: 'White',
        imageUrl: null,
        hourlyRate: 60,
        dailyRate: 500,
        monthlyRate: 10000,
        status: 'available',
        location: 'Delhi Karol Bagh',
        gpsEnabled: true,
        lastServiceDate: new Date('2024-10-15').toISOString(),
        createdAt: new Date().toISOString(),
      },
    ];

    // Insert vehicles and get IDs
    const insertedVehicles = await db.insert(vehicles).values(sampleVehicles).returning();

    // Sample coupons data
    const sampleCoupons = [
      {
        code: 'WELCOME50',
        description: 'Welcome bonus for new users',
        discountType: 'percentage',
        discountValue: 50,
        maxDiscount: 200,
        minOrderAmount: 100,
        usageLimit: 100,
        usedCount: 0,
        validFrom: new Date().toISOString(),
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
        status: 'active',
        createdAt: new Date().toISOString(),
      },
      {
        code: 'SAVE100',
        description: 'Flat 100 rupees off',
        discountType: 'fixed',
        discountValue: 100,
        maxDiscount: 100,
        minOrderAmount: 300,
        usageLimit: 50,
        usedCount: 0,
        validFrom: new Date().toISOString(),
        validUntil: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days from now
        status: 'active',
        createdAt: new Date().toISOString(),
      },
    ];

    // Insert coupons
    await db.insert(coupons).values(sampleCoupons);

    // Sample booking data
    const sampleBookings = [
      {
        userId: customerUser.id,
        vehicleId: insertedVehicles[0].id,
        startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
        endDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
        durationType: 'daily',
        totalAmount: 400,
        status: 'completed',
        paymentStatus: 'paid',
        pickupLocation: 'Mumbai Central Station',
        dropLocation: 'Mumbai Airport',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ];

    // Insert bookings and get IDs
    const insertedBookings = await db.insert(bookings).values(sampleBookings).returning();

    // Sample payment data
    const samplePayments = [
      {
        bookingId: insertedBookings[0].id,
        userId: customerUser.id,
        amount: 400,
        paymentMethod: 'upi',
        transactionId: 'TXN' + Date.now(),
        status: 'completed',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ];

    // Insert payments and get IDs
    const insertedPayments = await db.insert(payments).values(samplePayments).returning();

    // Sample partner earnings data
    const samplePartnerEarnings = [
      {
        partnerId: partnerUser.id,
        bookingId: insertedBookings[0].id,
        paymentId: insertedPayments[0].id,
        vehicleId: insertedVehicles[0].id,
        totalAmount: 400,
        platformFee: 40, // 10%
        partnerEarnings: 360, // 90%
        commissionRate: 10,
        status: 'paid',
        payoutDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      },
    ];

    // Insert partner earnings
    await db.insert(partnerEarnings).values(samplePartnerEarnings);

    return NextResponse.json({ 
      success: true, 
      message: 'Database seeded successfully with sample data',
      summary: {
        users: insertedUsers.length,
        vehicles: insertedVehicles.length,
        bookings: insertedBookings.length,
        payments: insertedPayments.length,
        coupons: sampleCoupons.length,
        partnerEarnings: samplePartnerEarnings.length,
      }
    });
  } catch (error) {
    console.error('Database seed error:', error);
    return NextResponse.json(
      { error: 'Failed to seed database', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}