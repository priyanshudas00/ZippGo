'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, User, CreditCard, Bike, TrendingUp, History, Loader2 } from 'lucide-react';
import { useSession } from '@/lib/auth-client';

interface Booking {
  id: number;
  userId: number;
  vehicleId: number;
  startDate: string;
  endDate: string | null;
  durationType: string;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  pickupLocation: string;
  dropLocation: string | null;
  createdAt: string;
}

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  registrationNumber: string;
  vehicleType: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string | null;
}

interface Coupon {
  id: number;
  code: string;
  description: string;
  discountType: string;
  discountValue: number;
  validUntil: string;
  status: string;
}

export default function UserDashboard() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [vehicles, setVehicles] = useState<{ [key: number]: Vehicle }>({});
  const [user, setUser] = useState<UserData | null>(null);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Protect route - redirect to login if not authenticated
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push('/login?redirect=/user');
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

      // Try to fetch user data from database, fallback to session data
      let userData = {
        id: parseInt(session.user.id) || 0,
        name: session.user.name || 'User',
        email: session.user.email || '',
        phone: '',
        city: null,
      };

      try {
        const userRes = await fetch(`/api/users?email=${encodeURIComponent(session.user.email)}`);
        if (userRes.ok) {
          const dbUser = await userRes.json();
          userData = {
            id: dbUser.id,
            name: dbUser.name || session.user.name || 'User',
            email: dbUser.email,
            phone: dbUser.phone || '',
            city: dbUser.city || null,
          };
        }
      } catch (error) {
        console.log('User not found in database, using session data');
      }

      setUser(userData);

      // Fetch user bookings
      const bookingsRes = await fetch(`/api/bookings?userId=${userData.id}&limit=20`);
      if (!bookingsRes.ok) throw new Error('Failed to fetch bookings');
      const bookingsData = await bookingsRes.json();
      setBookings(bookingsData);

      // Fetch vehicles for bookings
      const vehicleIds = [...new Set(bookingsData.map((b: Booking) => b.vehicleId))];
      const vehiclePromises = vehicleIds.map(id => 
        fetch(`/api/vehicles?id=${id}`).then(res => res.json())
      );
      const vehiclesData = await Promise.all(vehiclePromises);
      const vehiclesMap = vehiclesData.reduce((acc, vehicle) => {
        acc[vehicle.id] = vehicle;
        return acc;
      }, {} as { [key: number]: Vehicle });
      setVehicles(vehiclesMap);

      // Fetch active coupons
      const couponsRes = await fetch('/api/coupons?status=active&limit=3');
      if (!couponsRes.ok) throw new Error('Failed to fetch coupons');
      const couponsData = await couponsRes.json();
      setCoupons(couponsData);

    } catch (err) {
      console.error('Dashboard error:', err);
      setError(err instanceof Error ? err.message : 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const activeBookings = bookings.filter(b => b.status === 'active');
  const completedBookings = bookings.filter(b => b.status === 'completed');
  const totalSpent = completedBookings.reduce((sum, b) => sum + b.totalAmount, 0);
  const estimatedSavings = Math.floor(totalSpent * 0.38); // 38% savings vs cabs

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-6 text-center">
            <div className="bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">⚠️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Dashboard</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={fetchDashboardData}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome Back, {user?.name?.split(' ')[0] || 'Rider'}!
              </h1>
              <p className="text-lg text-gray-600">Manage your bookings and profile</p>
            </div>
            <Link href="/user/book">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500">
                <Bike className="mr-2 w-5 h-5" />
                Book a Ride
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Active Bookings</p>
                    <p className="text-3xl font-bold text-blue-600">{activeBookings.length}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Rides</p>
                    <p className="text-3xl font-bold text-green-600">{bookings.length}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Spent</p>
                    <p className="text-3xl font-bold text-orange-600">₹{totalSpent.toLocaleString()}</p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <CreditCard className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Savings</p>
                    <p className="text-3xl font-bold text-purple-600">₹{estimatedSavings.toLocaleString()}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <History className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Bookings */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Active Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  {activeBookings.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bike className="w-10 h-10 text-gray-400" />
                      </div>
                      <p className="text-gray-600 mb-4">No active bookings</p>
                      <Link href="/user/book">
                        <Button className="bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500">
                          Book Your First Ride
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {activeBookings.map((booking) => {
                        const vehicle = vehicles[booking.vehicleId];
                        if (!vehicle) return null;

                        return (
                          <div key={booking.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg ${
                                  vehicle.vehicleType === 'electric' ? 'bg-green-100' : 
                                  vehicle.vehicleType === 'scooter' ? 'bg-blue-100' : 'bg-orange-100'
                                }`}>
                                  <Bike className={`w-8 h-8 ${
                                    vehicle.vehicleType === 'electric' ? 'text-green-600' : 
                                    vehicle.vehicleType === 'scooter' ? 'text-blue-600' : 'text-orange-600'
                                  }`} />
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-gray-900">
                                    {vehicle.brand} {vehicle.model}
                                  </h3>
                                  <p className="text-sm text-gray-600">{vehicle.registrationNumber}</p>
                                </div>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                booking.paymentStatus === 'paid' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {booking.paymentStatus === 'paid' ? 'Active' : 'Payment Pending'}
                              </span>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center gap-2 text-gray-700">
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">{booking.pickupLocation}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">
                                  {formatDate(booking.startDate)}, {formatTime(booking.startDate)}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span className="text-sm capitalize">{booking.durationType} Rental</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <CreditCard className="w-4 h-4 text-gray-500" />
                                <span className="text-sm font-semibold">₹{booking.totalAmount}</span>
                              </div>
                            </div>

                            <div className="flex gap-3">
                              {booking.paymentStatus !== 'paid' ? (
                                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                                  Pay Now
                                </Button>
                              ) : (
                                <Button variant="outline" className="flex-1">
                                  View Details
                                </Button>
                              )}
                              <Button className="flex-1 bg-red-600 hover:bg-red-700">
                                End Ride
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {activeBookings.length > 0 && (
                    <div className="mt-6 text-center">
                      <Link href="/user/bookings">
                        <Button variant="outline">View All Bookings</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Ride History */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Recent Ride History</CardTitle>
                </CardHeader>
                <CardContent>
                  {completedBookings.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-600">No completed rides yet</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {completedBookings.slice(0, 4).map((booking) => {
                        const vehicle = vehicles[booking.vehicleId];
                        if (!vehicle) return null;

                        return (
                          <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                            <div className="flex items-center gap-3">
                              <div className="bg-gray-100 p-2 rounded-lg">
                                <Bike className="w-5 h-5 text-gray-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {vehicle.brand} {vehicle.model}
                                </p>
                                <p className="text-sm text-gray-600">{formatDate(booking.startDate)}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-900">₹{booking.totalAmount}</p>
                              <p className="text-sm text-green-600 capitalize">{booking.status}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {completedBookings.length > 0 && (
                    <div className="mt-6 text-center">
                      <Link href="/user/history">
                        <Button variant="outline">View Full History</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                    <p className="text-sm text-gray-600">{user?.phone}</p>
                    {user?.city && (
                      <p className="text-sm text-gray-600 mt-1">📍 {user.city}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link href="/user/profile">
                      <Button variant="outline" className="w-full">
                        <User className="mr-2 w-4 h-4" />
                        Edit Profile
                      </Button>
                    </Link>
                    <Link href="/user/payment-methods">
                      <Button variant="outline" className="w-full">
                        <CreditCard className="mr-2 w-4 h-4" />
                        Payment Methods
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/user/book">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500">
                      <Bike className="mr-2 w-4 h-4" />
                      Book New Ride
                    </Button>
                  </Link>
                  <Link href="/user/coupons">
                    <Button variant="outline" className="w-full">
                      View Available Coupons
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Available Coupons */}
              {coupons.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Active Coupons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {coupons.slice(0, 2).map((coupon) => (
                        <div 
                          key={coupon.id}
                          className="border-2 border-dashed border-blue-300 rounded-lg p-4 bg-blue-50"
                        >
                          <p className="font-bold text-blue-700 text-lg">{coupon.code}</p>
                          <p className="text-sm text-gray-700">{coupon.description}</p>
                          <p className="text-xs text-gray-600 mt-2">
                            {coupon.discountType === 'percentage' 
                              ? `${coupon.discountValue}% off` 
                              : `₹${coupon.discountValue} off`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}