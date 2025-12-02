'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin, Bike, Car, Zap, ArrowLeft, Loader2, Search, Filter } from 'lucide-react';
import { useSession } from '@/lib/auth-client';
import { toast } from 'sonner';

interface Vehicle {
  id: number;
  partnerId: number;
  vehicleType: string;
  brand: string;
  model: string;
  registrationNumber: string;
  year: number;
  color: string;
  imageUrl: string | null;
  hourlyRate: number;
  dailyRate: number;
  monthlyRate: number;
  status: string;
  location: string;
  gpsEnabled: boolean;
  lastServiceDate: string | null;
  createdAt: string;
}

interface BookingFormData {
  vehicleId: number | null;
  startDate: string;
  endDate: string;
  durationType: 'hourly' | 'daily' | 'monthly';
  pickupLocation: string;
  dropLocation: string;
}

export default function BookVehiclePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  // Filters
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Booking form data
  const [bookingData, setBookingData] = useState<BookingFormData>({
    vehicleId: null,
    startDate: '',
    endDate: '',
    durationType: 'hourly',
    pickupLocation: '',
    dropLocation: '',
  });

  useEffect(() => {
    if (isPending) return;
    
    if (!session?.user) {
      router.push('/login');
      return;
    }
    
    fetchVehicles();
  }, [session, isPending, router]);

  useEffect(() => {
    filterVehicles();
  }, [vehicles, vehicleTypeFilter, locationFilter, searchQuery]);

  const fetchVehicles = async () => {
    try {
      const response = await fetch('/api/vehicles?status=available&limit=50');
      if (!response.ok) {
        throw new Error('Failed to fetch vehicles');
      }
      const data = await response.json();
      setVehicles(data);
    } catch (error) {
      toast.error('Failed to load available vehicles');
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterVehicles = () => {
    let filtered = vehicles;

    if (vehicleTypeFilter !== 'all') {
      filtered = filtered.filter(v => v.vehicleType === vehicleTypeFilter);
    }

    if (locationFilter) {
      filtered = filtered.filter(v => 
        v.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(v =>
        v.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredVehicles(filtered);
  };

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'bike':
        return <Bike className="w-5 h-5" />;
      case 'scooter':
        return <Bike className="w-5 h-5" />;
      case 'electric':
        return <Zap className="w-5 h-5" />;
      default:
        return <Car className="w-5 h-5" />;
    }
  };

  const calculateTotal = () => {
    if (!selectedVehicle || !bookingData.startDate) return 0;

    const start = new Date(bookingData.startDate);
    const end = bookingData.endDate ? new Date(bookingData.endDate) : new Date(start.getTime() + 60 * 60 * 1000); // Default 1 hour

    let duration = 0;
    let rate = 0;

    switch (bookingData.durationType) {
      case 'hourly':
        duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60));
        rate = selectedVehicle.hourlyRate;
        break;
      case 'daily':
        duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        rate = selectedVehicle.dailyRate;
        break;
      case 'monthly':
        duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30));
        rate = selectedVehicle.monthlyRate;
        break;
    }

    return Math.max(duration * rate, rate); // Minimum charge for the base rate
  };

  const handleBookVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setBookingData(prev => ({ ...prev, vehicleId: vehicle.id }));
    setShowBookingForm(true);
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedVehicle || !session?.user) return;

    setBookingLoading(true);
    
    try {
      const totalAmount = calculateTotal();
      
      const bookingPayload = {
        userId: session.user.id,
        vehicleId: bookingData.vehicleId,
        startDate: bookingData.startDate,
        endDate: bookingData.endDate || null,
        durationType: bookingData.durationType,
        totalAmount,
        pickupLocation: bookingData.pickupLocation,
        dropLocation: bookingData.dropLocation || null,
      };

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingPayload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create booking');
      }

      const booking = await response.json();
      toast.success('Booking created successfully!');
      router.push('/user'); // Redirect back to dashboard
    } catch (error: any) {
      toast.error(error.message || 'Failed to create booking');
      console.error('Booking error:', error);
    } finally {
      setBookingLoading(false);
    }
  };

  if (isPending || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600">Loading available vehicles...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => showBookingForm ? setShowBookingForm(false) : router.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {showBookingForm ? 'Complete Your Booking' : 'Book a Vehicle'}
              </h1>
              <p className="text-lg text-gray-600">
                {showBookingForm ? 'Fill in the details below' : 'Choose from our available vehicles'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showBookingForm ? (
          /* Booking Form */
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getVehicleIcon(selectedVehicle?.vehicleType || '')}
                  {selectedVehicle?.brand} {selectedVehicle?.model}
                </CardTitle>
                <p className="text-gray-600">{selectedVehicle?.registrationNumber}</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitBooking} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="durationType">Duration Type</Label>
                      <Select 
                        value={bookingData.durationType} 
                        onValueChange={(value: 'hourly' | 'daily' | 'monthly') => 
                          setBookingData(prev => ({ ...prev, durationType: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly (₹{selectedVehicle?.hourlyRate}/hr)</SelectItem>
                          <SelectItem value="daily">Daily (₹{selectedVehicle?.dailyRate}/day)</SelectItem>
                          <SelectItem value="monthly">Monthly (₹{selectedVehicle?.monthlyRate}/month)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="startDate">Start Date & Time</Label>
                      <Input
                        id="startDate"
                        type="datetime-local"
                        value={bookingData.startDate}
                        onChange={(e) => setBookingData(prev => ({ ...prev, startDate: e.target.value }))}
                        required
                        min={new Date().toISOString().slice(0, 16)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="endDate">End Date & Time (Optional)</Label>
                      <Input
                        id="endDate"
                        type="datetime-local"
                        value={bookingData.endDate}
                        onChange={(e) => setBookingData(prev => ({ ...prev, endDate: e.target.value }))}
                        min={bookingData.startDate}
                      />
                    </div>

                    <div>
                      <Label htmlFor="pickupLocation">Pickup Location</Label>
                      <Input
                        id="pickupLocation"
                        placeholder="Enter pickup address"
                        value={bookingData.pickupLocation}
                        onChange={(e) => setBookingData(prev => ({ ...prev, pickupLocation: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="dropLocation">Drop Location (Optional)</Label>
                    <Input
                      id="dropLocation"
                      placeholder="Enter drop address"
                      value={bookingData.dropLocation}
                      onChange={(e) => setBookingData(prev => ({ ...prev, dropLocation: e.target.value }))}
                    />
                  </div>

                  {/* Total Calculation */}
                  {bookingData.startDate && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Total Amount:</span>
                          <span className="text-2xl font-bold text-blue-600">
                            ₹{calculateTotal().toLocaleString()}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowBookingForm(false)}
                      className="flex-1"
                    >
                      Back to Vehicles
                    </Button>
                    <Button
                      type="submit"
                      disabled={bookingLoading || !bookingData.pickupLocation || !bookingData.startDate}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500"
                    >
                      {bookingLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Creating Booking...
                        </>
                      ) : (
                        'Confirm Booking'
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Vehicle Selection */
          <>
            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="search">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="search"
                        placeholder="Brand, model, or reg no."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Vehicle Type</Label>
                    <Select value={vehicleTypeFilter} onValueChange={setVehicleTypeFilter}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="bike">Bike</SelectItem>
                        <SelectItem value="scooter">Scooter</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="Filter by location"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    />
                  </div>

                  <div className="flex items-end">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setVehicleTypeFilter('all');
                        setLocationFilter('');
                        setSearchQuery('');
                      }}
                      className="w-full"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicles Grid */}
            {filteredVehicles.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Bike className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Vehicles Found</h3>
                  <p className="text-gray-600">
                    {vehicles.length === 0 
                      ? 'No vehicles are currently available for booking.'
                      : 'Try adjusting your filters to see more vehicles.'
                    }
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                          {getVehicleIcon(vehicle.vehicleType)}
                          <div>
                            <h3 className="font-semibold text-lg">{vehicle.brand} {vehicle.model}</h3>
                            <p className="text-sm text-gray-600">{vehicle.registrationNumber}</p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          Available
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          {vehicle.year} • {vehicle.color}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {vehicle.location}
                        </div>
                        {vehicle.gpsEnabled && (
                          <div className="flex items-center gap-2 text-sm text-green-600">
                            <Zap className="w-4 h-4" />
                            GPS Enabled
                          </div>
                        )}
                      </div>

                      <div className="border-t pt-4 mb-4">
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div className="text-center">
                            <div className="font-semibold">₹{vehicle.hourlyRate}</div>
                            <div className="text-gray-600">per hour</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">₹{vehicle.dailyRate}</div>
                            <div className="text-gray-600">per day</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">₹{vehicle.monthlyRate}</div>
                            <div className="text-gray-600">per month</div>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleBookVehicle(vehicle)}
                        className="w-full bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500"
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}