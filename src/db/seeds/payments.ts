import { db } from '@/db';
import { payments } from '@/db/schema';

// Helper function to calculate date relative to now
function getRelativeDate(daysAgo: number): string {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString();
}

async function main() {
    const samplePayments = [
        {
            bookingId: 1,
            userId: 1,
            amount: 400,
            paymentMethod: 'upi',
            transactionId: 'TXN001234567890',
            status: 'success',
            createdAt: getRelativeDate(3),
        },
        {
            bookingId: 2,
            userId: 2,
            amount: 300,
            paymentMethod: 'card',
            transactionId: 'TXN002345678901',
            status: 'success',
            createdAt: getRelativeDate(5),
        },
        {
            bookingId: 3,
            userId: 1,
            amount: 1800,
            paymentMethod: 'upi',
            transactionId: 'TXN003456789012',
            status: 'success',
            createdAt: getRelativeDate(7),
        },
        {
            bookingId: 4,
            userId: 2,
            amount: 9000,
            paymentMethod: 'wallet',
            transactionId: 'TXN004567890123',
            status: 'success',
            createdAt: getRelativeDate(60),
        },
        {
            bookingId: 6,
            userId: 2,
            amount: 600,
            paymentMethod: 'card',
            transactionId: 'TXN005678901234',
            status: 'success',
            createdAt: getRelativeDate(0),
        },
        {
            bookingId: 7,
            userId: 1,
            amount: 340,
            paymentMethod: 'cash',
            transactionId: 'TXN006789012345',
            status: 'pending',
            createdAt: getRelativeDate(1),
        },
    ];

    await db.insert(payments).values(samplePayments);
    
    console.log('✅ Payments seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Payments seeder failed:', error);
});