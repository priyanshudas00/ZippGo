'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  Users, 
  Bike, 
  Calendar, 
  Package, 
  CreditCard,
  TrendingUp,
  Loader2,
  AlertCircle,
  CheckCircle,
  RefreshCw,
  Trash2
} from 'lucide-react';
import { toast } from 'sonner';

interface DatabaseStats {
  users: number;
  vehicles: number;
  bookings: number;
  coupons: number;
  payments: number;
  partnerEarnings: number;
}

export default function DataManagement() {
  const [stats, setStats] = useState<DatabaseStats>({
    users: 0,
    vehicles: 0,
    bookings: 0,
    coupons: 0,
    payments: 0,
    partnerEarnings: 0
  });
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/database-stats');
      if (!response.ok) throw new Error('Failed to fetch stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      toast.error('Failed to load database statistics');
    } finally {
      setLoading(false);
    }
  };

  const clearDatabase = async () => {
    if (!confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      return;
    }

    try {
      setClearing(true);
      const response = await fetch('/api/admin/clear-database', {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Failed to clear database');

      toast.success('Database cleared successfully');
      await fetchStats();
    } catch (error) {
      toast.error('Failed to clear database');
    } finally {
      setClearing(false);
    }
  };

  const seedDatabase = async () => {
    if (!confirm('This will add sample data to the database. Continue?')) {
      return;
    }

    try {
      setSeeding(true);
      const response = await fetch('/api/admin/seed-database', {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Failed to seed database');

      toast.success('Database seeded successfully');
      await fetchStats();
    } catch (error) {
      toast.error('Failed to seed database');
    } finally {
      setSeeding(false);
    }
  };

  const dataItems = [
    { 
      label: 'Users', 
      count: stats.users, 
      icon: Users, 
      color: 'bg-blue-500',
      description: 'Total registered users including admins, partners, and customers'
    },
    { 
      label: 'Vehicles', 
      count: stats.vehicles, 
      icon: Bike, 
      color: 'bg-green-500',
      description: 'All vehicles in the system (bikes, scooters, electric vehicles)'
    },
    { 
      label: 'Bookings', 
      count: stats.bookings, 
      icon: Calendar, 
      color: 'bg-purple-500',
      description: 'All booking records (active, completed, cancelled)'
    },
    { 
      label: 'Coupons', 
      count: stats.coupons, 
      icon: Package, 
      color: 'bg-orange-500',
      description: 'Discount coupons and promotional codes'
    },
    { 
      label: 'Payments', 
      count: stats.payments, 
      icon: CreditCard, 
      color: 'bg-red-500',
      description: 'Payment transactions and records'
    },
    { 
      label: 'Partner Earnings', 
      count: stats.partnerEarnings, 
      icon: TrendingUp, 
      color: 'bg-indigo-500',
      description: 'Partner commission and earning records'
    },
  ];

  const totalRecords = Object.values(stats).reduce((sum, count) => sum + count, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading database statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Database Management</h1>
          <p className="text-gray-600">
            Manage application data, view statistics, and perform database operations
          </p>
        </div>

        {/* Summary Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Database Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalRecords.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Records</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={fetchStats}
                  variant="outline"
                  size="sm"
                  disabled={loading}
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Refresh
                </Button>
                <Button
                  onClick={seedDatabase}
                  variant="outline"
                  size="sm"
                  disabled={seeding || totalRecords > 0}
                >
                  {seeding ? (
                    <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                  ) : (
                    <CheckCircle className="h-4 w-4 mr-1" />
                  )}
                  Seed Database
                </Button>
                <Button
                  onClick={clearDatabase}
                  variant="destructive"
                  size="sm"
                  disabled={clearing || totalRecords === 0}
                >
                  {clearing ? (
                    <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4 mr-1" />
                  )}
                  Clear Database
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dataItems.map((item) => (
            <Card key={item.label} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${item.color} text-white`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <Badge variant={item.count > 0 ? "default" : "secondary"}>
                    {item.count > 0 ? "Active" : "Empty"}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">{item.count.toLocaleString()}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                Data Management Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p className="font-medium mb-2">Best Practices:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Use the admin interface to add real data instead of seed data</li>
                  <li>• Regularly backup your database before major operations</li>
                  <li>• Monitor data quality and remove test/dummy records</li>
                  <li>• Use the clear function only in development environments</li>
                  <li>• Ensure all data is entered through proper validation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <AlertCircle className="h-5 w-5" />
                Data Operations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p className="font-medium mb-2">Available Operations:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Seed Database:</strong> Add sample data for testing (only when empty)</li>
                  <li>• <strong>Clear Database:</strong> Remove all records (irreversible)</li>
                  <li>• <strong>Refresh Stats:</strong> Update current record counts</li>
                  <li>• Individual record management through respective admin pages</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}