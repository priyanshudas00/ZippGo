import { db } from '@/db';
import { bookings } from '@/db/schema';

async function main() {
    // Helper function to calculate dates
    const getDate = (daysAgo: number): string => {
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return date.toISOString();
    };

    const sampleBookings = [
        {
            userId: 1,
            vehicleId: 1,
            durationType: 'daily',
            totalAmount: 400,
            status: 'completed',
            paymentStatus: 'paid',
            pickupLocation: 'Patna Railway Station',
            dropLocation: 'Gandhi Maidan, Patna',
            startDate: getDate(3),
            endDate: getDate(2),
            createdAt: getDate(3),
        },
        {
            userId: 2,
            vehicleId: 2,
            durationType: 'hourly',
            totalAmount: 300,
            status: 'completed',
            paymentStatus: 'paid',
            pickupLocation: 'Bengaluru Airport',
            dropLocation: 'MG Road, Bengaluru',
            startDate: getDate(5),
            endDate: getDate(5),
            createdAt: getDate(5),
        },
        {
            userId: 1,
            vehicleId: 7,
            durationType: 'daily',
            totalAmount: 1800,
            status: 'completed',
            paymentStatus: 'paid',
            pickupLocation: 'Patna Junction',
            dropLocation: 'Boring Road, Patna',
            startDate: getDate(7),
            endDate: getDate(5),
            createdAt: getDate(7),
        },
        {
            userId: 2,
            vehicleId: 5,
            durationType: 'monthly',
            totalAmount: 9000,
            status: 'completed',
            paymentStatus: 'paid',
            pickupLocation: 'Whitefield, Bengaluru',
            dropLocation: 'Electronic City, Bengaluru',
            startDate: getDate(60),
            endDate: getDate(30),
            createdAt: getDate(60),
        },
        {
            userId: 1,
            vehicleId: 10,
            durationType: 'daily',
            totalAmount: 2000,
            status: 'completed',
            paymentStatus: 'paid',
            pickupLocation: 'Patna Airport',
            dropLocation: 'Patna Railway Station',
            startDate: getDate(10),
            endDate: getDate(6),
            createdAt: getDate(10),
        },
        {
            userId: 2,
            vehicleId: 4,
            durationType: 'daily',
            totalAmount: 600,
            status: 'active',
            paymentStatus: 'paid',
            pickupLocation: 'Gandhi Maidan, Patna',
            dropLocation: null,
            startDate: getDate(0),
            endDate: null,
            createdAt: getDate(0),
        },
        {
            userId: 1,
            vehicleId: 9,
            durationType: 'hourly',
            totalAmount: 340,
            status: 'active',
            paymentStatus: 'pending',
            pickupLocation: 'Delhi Airport',
            dropLocation: null,
            startDate: getDate(1),
            endDate: null,
            createdAt: getDate(1),
        },
        {
            userId: 2,
            vehicleId: 8,
            durationType: 'daily',
            totalAmount: 550,
            status: 'cancelled',
            paymentStatus: 'refunded',
            pickupLocation: 'MG Road, Bengaluru',
            dropLocation: null,
            startDate: getDate(2),
            endDate: getDate(2),
            createdAt: getDate(2),
        },
    ];

    console.log('📊 Inserting bookings data:', JSON.stringify(sampleBookings, null, 2));

    await db.insert(bookings).values(sampleBookings);

    console.log('✅ Bookings seeder completed successfully');
    console.log(`📝 Inserted ${sampleBookings.length} bookings`);
    console.log('   - 5 completed bookings');
    console.log('   - 2 active bookings');
    console.log('   - 1 cancelled booking');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    process.exit(1);
});