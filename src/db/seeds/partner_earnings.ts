import { db } from '@/db';
import { partnerEarnings } from '@/db/schema';

// Helper function to calculate date relative to now
function getDateDaysAgo(daysAgo: number): string {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString();
}

async function main() {
    const samplePartnerEarnings = [
        {
            partnerId: 4,
            vehicleId: 1,
            bookingId: 1,
            totalAmount: 400,
            commissionPercentage: 20,
            commissionAmount: 80,
            netEarning: 320,
            payoutStatus: 'paid',
            payoutDate: getDateDaysAgo(1),
            createdAt: getDateDaysAgo(3),
        },
        {
            partnerId: 3,
            vehicleId: 2,
            bookingId: 2,
            totalAmount: 300,
            commissionPercentage: 20,
            commissionAmount: 60,
            netEarning: 240,
            payoutStatus: 'paid',
            payoutDate: getDateDaysAgo(2),
            createdAt: getDateDaysAgo(5),
        },
        {
            partnerId: 4,
            vehicleId: 7,
            bookingId: 3,
            totalAmount: 1800,
            commissionPercentage: 20,
            commissionAmount: 360,
            netEarning: 1440,
            payoutStatus: 'processed',
            payoutDate: null,
            createdAt: getDateDaysAgo(7),
        },
        {
            partnerId: 3,
            vehicleId: 5,
            bookingId: 4,
            totalAmount: 9000,
            commissionPercentage: 20,
            commissionAmount: 1800,
            netEarning: 7200,
            payoutStatus: 'paid',
            payoutDate: getDateDaysAgo(25),
            createdAt: getDateDaysAgo(60),
        },
        {
            partnerId: 4,
            vehicleId: 10,
            bookingId: 5,
            totalAmount: 2000,
            commissionPercentage: 20,
            commissionAmount: 400,
            netEarning: 1600,
            payoutStatus: 'pending',
            payoutDate: null,
            createdAt: getDateDaysAgo(10),
        }
    ];

    await db.insert(partnerEarnings).values(samplePartnerEarnings);
    
    console.log('✅ Partner earnings seeder completed successfully');
    console.log(`   Inserted ${samplePartnerEarnings.length} partner earning records`);
}

main().catch((error) => {
    console.error('❌ Partner earnings seeder failed:', error);
    process.exit(1);
});