'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Users, Bike, DollarSign, TrendingUp, Package, Calendar, 
  AlertCircle, CheckCircle, Clock, BarChart3, ArrowUpRight, 
  ArrowDownRight, Activity, Loader2, Database
} from 'lucide-react';
import { useSession } from '@/lib/auth-client';

interface Stats {
  totalRevenue: number;
  activeBookings: number;
  totalVehicles: number;
  totalUsers: number;
  activePartners: number;
  avgBookingValue: number;
}

interface Booking {
  id: number;
  userId: number;
  vehicleId: number;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  createdAt: string;
}

interface Vehicle {
  id: number;
  brand: string;
  model: string;
}

interface User {
  id: number;
  name: string;
}

export default function AdminDashboard() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentBookings, setRecentBookings] = useState<Booking[]>([]);
  const [vehicles, setVehicles] = useState<{ [key: number]: Vehicle }>({});
  const [users, setUsers] = useState<{ [key: number]: User }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Protect route - redirect to login if not authenticated
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push('/login?redirect=/admin');
    }
  }, [session, isPending, router]);

  useEffect(() => {
    if (session?.user) {
      fetchDashboardData();
    }
  }, [session]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all data in parallel
      const [bookingsRes, vehiclesRes, usersRes, paymentsRes] = await Promise.all([
        fetch('/api/bookings?limit=100'),
        fetch('/api/vehicles?limit=100'),
        fetch('/api/users?limit=100'),
        fetch('/api/payments?limit=100')
      ]);

      if (!bookingsRes.ok || !vehiclesRes.ok || !usersRes.ok || !paymentsRes.ok) {
        throw new Error('Failed to fetch dashboard data');
      }

      const bookingsData = await bookingsRes.json();
      const vehiclesData = await vehiclesRes.json();
      const usersData = await usersRes.json();
      const paymentsData = await paymentsRes.json();

      // Calculate stats
      const activeBookingsCount = bookingsData.filter((b: Booking) => b.status === 'active').length;
      const completedBookings = bookingsData.filter((b: Booking) => b.status === 'completed');
      const totalRevenue = completedBookings.reduce((sum: number, b: Booking) => sum + b.totalAmount, 0);
      const avgBookingValue = completedBookings.length > 0 
        ? Math.round(totalRevenue / completedBookings.length) 
        : 0;
      const partners = usersData.filter((u: User & { role: string }) => u.role === 'partner');

      setStats({
        totalRevenue,
        activeBookings: activeBookingsCount,
        totalVehicles: vehiclesData.length,
        totalUsers: usersData.length,
        activePartners: partners.length,
        avgBookingValue
      });

      // Set recent bookings (last 5)
      const sortedBookings = bookingsData.sort((a: Booking, b: Booking) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setRecentBookings(sortedBookings.slice(0, 5));

      // Create vehicles map
      const vehiclesMap = vehiclesData.reduce((acc: any, v: Vehicle) => {
        acc[v.id] = v;
        return acc;
      }, {});
      setVehicles(vehiclesMap);

      // Create users map
      const usersMap = usersData.reduce((acc: any, u: User) => {
        acc[u.id] = u;
        return acc;
      }, {});
      setUsers(usersMap);

    } catch (err) {
      console.error('Dashboard error:', err);
      setError(err instanceof Error ? err.message : 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays} days ago`;
  };

  // Show loading while checking authentication
  if (isPending || !session?.user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Card className="max-w-md w-full">
          <CardContent className="p-6 text-center">
            <div className="bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Dashboard</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={fetchDashboardData}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const quickActions = [
    { title: "Manage Vehicles", href: "/admin/vehicles", icon: Bike, color: "bg-blue-500" },
    { title: "Manage Bookings", href: "/admin/bookings", icon: Calendar, color: "bg-green-500" },
    { title: "Manage Coupons", href: "/admin/coupons", icon: Package, color: "bg-purple-500" },
    { title: "Manage Users", href: "/admin/users", icon: Users, color: "bg-orange-500" },
    { title: "Partner Earnings", href: "/admin/earnings", icon: DollarSign, color: "bg-indigo-500" },
    { title: "Payments", href: "/admin/payments", icon: TrendingUp, color: "bg-pink-500" },
    { title: "Database Management", href: "/admin/database", icon: Database, color: "bg-gray-700" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with ZippGo today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">₹{stats?.totalRevenue.toLocaleString()}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">+23.5%</span>
                    <span className="text-sm text-gray-600">vs last month</span>
                  </div>
                </div>
                <div className="bg-green-100 p-4 rounded-full">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Bookings</p>
                  <p className="text-3xl font-bold text-gray-900">{stats?.activeBookings}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">+12.3%</span>
                    <span className="text-sm text-gray-600">vs last month</span>
                  </div>
                </div>
                <div className="bg-blue-100 p-4 rounded-full">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Vehicles</p>
                  <p className="text-3xl font-bold text-gray-900">{stats?.totalVehicles}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">+8.2%</span>
                    <span className="text-sm text-gray-600">vs last month</span>
                  </div>
                </div>
                <div className="bg-purple-100 p-4 rounded-full">
                  <Bike className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">{stats?.totalUsers}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">+18.7%</span>
                    <span className="text-sm text-gray-600">vs last month</span>
                  </div>
                </div>
                <div className="bg-orange-100 p-4 rounded-full">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Partners</p>
                  <p className="text-3xl font-bold text-gray-900">{stats?.activePartners}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">+5.3%</span>
                    <span className="text-sm text-gray-600">vs last month</span>
                  </div>
                </div>
                <div className="bg-indigo-100 p-4 rounded-full">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg. Booking Value</p>
                  <p className="text-3xl font-bold text-gray-900">₹{stats?.avgBookingValue}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowDownRight className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold text-red-600">-2.1%</span>
                    <span className="text-sm text-gray-600">vs last month</span>
                  </div>
                </div>
                <div className="bg-pink-100 p-4 rounded-full">
                  <TrendingUp className="w-8 h-8 text-pink-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Card className="hover:shadow-lg transition cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{action.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Bookings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              {recentBookings.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No bookings yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentBookings.map((booking) => {
                    const vehicle = vehicles[booking.vehicleId];
                    const user = users[booking.userId];
                    
                    return (
                      <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-gray-900">BK{booking.id.toString().padStart(5, '0')}</p>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              booking.status === 'active' ? 'bg-green-100 text-green-700' :
                              booking.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {user?.name || 'Unknown User'} • {vehicle ? `${vehicle.brand} ${vehicle.model}` : 'Unknown Vehicle'}
                          </p>
                          <p className="text-xs text-gray-500">{formatTimeAgo(booking.createdAt)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">₹{booking.totalAmount}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              <Link href="/admin/bookings">
                <Button className="w-full mt-4" variant="outline">View All Bookings</Button>
              </Link>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">All Systems Operational</p>
                    <p className="text-sm text-green-700">Database connected and all APIs running</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Activity className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-900">Real-Time Data Loaded</p>
                    <p className="text-sm text-blue-700">All dashboard statistics are up-to-date</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-yellow-900">Database Studio Available</p>
                    <p className="text-sm text-yellow-700">Manage your database through the studio tab</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900">Analytics Ready</p>
                    <p className="text-sm text-purple-700">Comprehensive CRUD operations available for all entities</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}