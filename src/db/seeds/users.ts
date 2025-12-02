import { db } from '@/db';
import { users } from '@/db/schema';

async function main() {
    const sampleUsers = [
        {
            name: 'Rahul Kumar',
            email: 'rahul.kumar@example.com',
            phone: '9876543210',
            role: 'user',
            city: 'Patna',
            address: '123 Gandhi Maidan, Patna',
            profileImage: null,
            createdAt: new Date('2024-01-05').toISOString(),
        },
        {
            name: 'Priya Singh',
            email: 'priya.singh@example.com',
            phone: '9876543211',
            role: 'user',
            city: 'Bengaluru',
            address: '45 MG Road, Bengaluru',
            profileImage: null,
            createdAt: new Date('2024-01-10').toISOString(),
        },
        {
            name: 'Amit Sharma',
            email: 'amit.sharma@zippgo.com',
            phone: '9876543212',
            role: 'partner',
            city: 'Delhi',
            address: '78 Connaught Place, Delhi',
            profileImage: null,
            createdAt: new Date('2024-01-12').toISOString(),
        },
        {
            name: 'Neha Verma',
            email: 'neha.verma@zippgo.com',
            phone: '9876543213',
            role: 'partner',
            city: 'Patna',
            address: '56 Boring Road, Patna',
            profileImage: null,
            createdAt: new Date('2024-01-18').toISOString(),
        },
        {
            name: 'Admin User',
            email: 'admin@zippgo.com',
            phone: '9876543214',
            role: 'admin',
            city: 'Bengaluru',
            address: '100 Whitefield, Bengaluru',
            profileImage: null,
            createdAt: new Date('2024-01-01').toISOString(),
        },
    ];

    await db.insert(users).values(sampleUsers);
    
    console.log('✅ Users seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});