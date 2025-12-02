import { db } from '@/db';
import { coupons } from '@/db/schema';

async function main() {
    const now = new Date();
    
    const sampleCoupons = [
        {
            code: 'WELCOME10',
            description: 'Welcome bonus - 10% off on first booking',
            discountType: 'percentage',
            discountValue: 10,
            minBookingAmount: 200,
            maxDiscount: 100,
            validFrom: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString(),
            validUntil: new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000).toISOString(),
            usageLimit: 1000,
            usedCount: 45,
            status: 'active',
            createdAt: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            code: 'FIRST20',
            description: 'First time user - 20% discount',
            discountType: 'percentage',
            discountValue: 20,
            minBookingAmount: 500,
            maxDiscount: 200,
            validFrom: new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000).toISOString(),
            validUntil: new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000).toISOString(),
            usageLimit: 500,
            usedCount: 123,
            status: 'active',
            createdAt: new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            code: 'MONTHLY50',
            description: 'Monthly subscription - ₹50 off',
            discountType: 'fixed',
            discountValue: 50,
            minBookingAmount: 1000,
            maxDiscount: null,
            validFrom: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000).toISOString(),
            validUntil: new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000).toISOString(),
            usageLimit: null,
            usedCount: 234,
            status: 'active',
            createdAt: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            code: 'STUDENT15',
            description: 'Student discount - 15% off',
            discountType: 'percentage',
            discountValue: 15,
            minBookingAmount: 300,
            maxDiscount: 150,
            validFrom: new Date(now.getTime() - 45 * 24 * 60 * 60 * 1000).toISOString(),
            validUntil: new Date(now.getTime() + 120 * 24 * 60 * 60 * 1000).toISOString(),
            usageLimit: 2000,
            usedCount: 567,
            status: 'active',
            createdAt: new Date(now.getTime() - 45 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            code: 'PARTNER25',
            description: 'Partner referral - ₹25 cashback',
            discountType: 'fixed',
            discountValue: 25,
            minBookingAmount: 250,
            maxDiscount: null,
            validFrom: new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000).toISOString(),
            validUntil: new Date(now.getTime() + 100 * 24 * 60 * 60 * 1000).toISOString(),
            usageLimit: 1500,
            usedCount: 89,
            status: 'active',
            createdAt: new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000).toISOString(),
        }
    ];

    await db.insert(coupons).values(sampleCoupons);
    
    console.log('✅ Coupons seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});