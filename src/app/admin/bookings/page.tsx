'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Clock, 
  User, 
  Bike, 
  Calendar, 
  MapPin,
  Phone,
  FileText,
  IdCard,
  Camera,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

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
  kycData: string | null;
  paymentData: string | null;
  adminApproved: boolean;
  kycVerified: boolean;
  createdAt: string;
}

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  registrationNumber: string;
  vehicleType: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [vehicles, setVehicles] = useState<{ [key: number]: Vehicle }>({});
  const [users, setUsers] = useState<{ [key: number]: User }>({});
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<number | null>(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      
      // Fetch pending bookings
      const bookingsRes = await fetch('/api/bookings?status=pending');
      if (!bookingsRes.ok) throw new Error('Failed to fetch bookings');
      const bookingsData = await bookingsRes.json();
      setBookings(bookingsData);

      // Fetch vehicle and user details
      const vehicleIds = [...new Set(bookingsData.map((b: Booking) => b.vehicleId))];
      const userIds = [...new Set(bookingsData.map((b: Booking) => b.userId))];

      const vehiclePromises = vehicleIds.map(id => 
        fetch(`/api/vehicles?id=${id}`).then(res => res.json())
      );
      const userPromises = userIds.map(id => 
        fetch(`/api/users?id=${id}`).then(res => res.json())
      );

      const vehiclesData = await Promise.all(vehiclePromises);
      const usersData = await Promise.all(userPromises);

      const vehiclesMap = vehiclesData.reduce((acc, vehicle) => {
        acc[vehicle.id] = vehicle;
        return acc;
      }, {} as { [key: number]: Vehicle });

      const usersMap = usersData.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {} as { [key: number]: User });

      setVehicles(vehiclesMap);
      setUsers(usersMap);
    } catch (error: any) {
      toast.error(error.message || 'Failed to fetch bookings');
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (bookingId: number, approve: boolean, verifyKyc: boolean = false) => {
    setUpdating(bookingId);
    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adminApproved: approve,
          kycVerified: verifyKyc,
          status: approve && verifyKyc ? 'active' : 'pending'
        })
      });

      if (!response.ok) throw new Error('Failed to update booking');

      toast.success(`Booking ${approve ? 'approved' : 'rejected'} successfully!`);
      fetchBookings(); // Refresh the list
    } catch (error: any) {
      toast.error(error.message || 'Failed to update booking');
    } finally {
      setUpdating(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading pending bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/admin" 
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Pending Bookings</h1>
            <p className="text-gray-600">Review and approve booking requests with KYC verification</p>
          </div>
        </div>

        {/* Bookings List */}
        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">All Caught Up!</h3>
            <p className="text-gray-600">No pending bookings to review at the moment.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => {
              const vehicle = vehicles[booking.vehicleId];
              const user = users[booking.userId];
              const kycData = booking.kycData ? JSON.parse(booking.kycData) : null;
              const paymentData = booking.paymentData ? JSON.parse(booking.paymentData) : null;

              return (
                <Card key={booking.id} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">#{booking.id}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Booking Request</h3>
                          <p className="text-gray-600">
                            Created on {new Date(booking.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </CardTitle>
                      <div className="flex gap-2">
                        <Badge variant={booking.adminApproved ? 'default' : 'secondary'}>
                          {booking.adminApproved ? 'Approved' : 'Pending Approval'}
                        </Badge>
                        <Badge variant={booking.kycVerified ? 'default' : 'secondary'}>
                          {booking.kycVerified ? 'KYC Verified' : 'KYC Pending'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Customer & Booking Details */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 border-b pb-2">Customer & Booking</h4>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <User className="w-4 h-4 text-gray-500" />
                            <div>
                              <p className="font-medium">{user?.name || 'Unknown User'}</p>
                              <p className="text-sm text-gray-600">{user?.email}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Bike className="w-4 h-4 text-gray-500" />
                            <div>
                              <p className="font-medium">
                                {vehicle?.brand} {vehicle?.model}
                              </p>
                              <p className="text-sm text-gray-600">{vehicle?.registrationNumber}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <div>
                              <p className="font-medium">
                                {new Date(booking.startDate).toLocaleDateString()}
                              </p>
                              <p className="text-sm text-gray-600 capitalize">
                                {booking.durationType} rental
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <div>
                              <p className="font-medium">Pickup</p>
                              <p className="text-sm text-gray-600">{booking.pickupLocation}</p>
                            </div>
                          </div>

                          <div className="bg-green-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-600">Total Amount</p>
                            <p className="text-2xl font-bold text-green-600">₹{booking.totalAmount}</p>
                          </div>
                        </div>
                      </div>

                      {/* KYC Documents */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 border-b pb-2">KYC Documents</h4>
                        
                        {kycData ? (
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-gray-500" />
                              <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-sm text-gray-600">{kycData.phone}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <IdCard className="w-4 h-4 text-gray-500" />
                              <div>
                                <p className="font-medium">Aadhar Number</p>
                                <p className="text-sm text-gray-600">{kycData.aadharNumber}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <FileText className="w-4 h-4 text-gray-500" />
                              <div>
                                <p className="font-medium">Driving License</p>
                                <p className="text-sm text-gray-600">{kycData.drivingLicenseNumber}</p>
                              </div>
                            </div>

                            {/* Document Images */}
                            <div className="grid grid-cols-2 gap-2">
                              {kycData.aadharFrontImage && (
                                <div>
                                  <p className="text-xs text-gray-600 mb-1">Aadhar Front</p>
                                  <img 
                                    src={kycData.aadharFrontImage} 
                                    alt="Aadhar Front" 
                                    className="w-full h-24 object-cover rounded border"
                                  />
                                </div>
                              )}
                              {kycData.aadharBackImage && (
                                <div>
                                  <p className="text-xs text-gray-600 mb-1">Aadhar Back</p>
                                  <img 
                                    src={kycData.aadharBackImage} 
                                    alt="Aadhar Back" 
                                    className="w-full h-24 object-cover rounded border"
                                  />
                                </div>
                              )}
                              {kycData.drivingLicenseImage && (
                                <div>
                                  <p className="text-xs text-gray-600 mb-1">Driving License</p>
                                  <img 
                                    src={kycData.drivingLicenseImage} 
                                    alt="Driving License" 
                                    className="w-full h-24 object-cover rounded border"
                                  />
                                </div>
                              )}
                              {kycData.livePhotoImage && (
                                <div>
                                  <p className="text-xs text-gray-600 mb-1">Live Photo</p>
                                  <img 
                                    src={kycData.livePhotoImage} 
                                    alt="Live Photo" 
                                    className="w-full h-24 object-cover rounded border"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-500">No KYC data available</p>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 border-b pb-2">Actions</h4>
                        
                        <div className="space-y-3">
                          <Button
                            onClick={() => handleApproval(booking.id, true, true)}
                            disabled={updating === booking.id}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                          >
                            {updating === booking.id ? (
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : (
                              <CheckCircle className="w-4 h-4 mr-2" />
                            )}
                            Approve & Verify KYC
                          </Button>

                          <Button
                            onClick={() => handleApproval(booking.id, false)}
                            disabled={updating === booking.id}
                            variant="destructive"
                            className="w-full"
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject Booking
                          </Button>

                          {paymentData && (
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm font-medium text-blue-900">Payment Method</p>
                              <p className="text-sm text-blue-700 capitalize">
                                {paymentData.method}
                              </p>
                              {paymentData.upiId && (
                                <p className="text-xs text-blue-600">{paymentData.upiId}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}