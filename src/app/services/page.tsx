'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Bike, MapPin, Clock, DollarSign, Star, Users, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

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

interface ServiceStats {
  totalVehicles: number;
  availableVehicles: number;
  locations: string[];
  vehicleTypes: { type: string; count: number }[];
  averageHourlyRate: number;
  averageDailyRate: number;
}

export default function ServicesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [stats, setStats] = useState<ServiceStats>({
    totalVehicles: 0,
    availableVehicles: 0,
    locations: [],
    vehicleTypes: [],
    averageHourlyRate: 0,
    averageDailyRate: 0,
  });
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    fetchVehiclesAndStats();
  }, []);

  const fetchVehiclesAndStats = async () => {
    try {
      setLoading(true);
      
      // Fetch all vehicles
      const response = await fetch('/api/vehicles?status=available&limit=100');
      if (!response.ok) throw new Error('Failed to fetch vehicles');
      
      const vehiclesData = await response.json();
      setVehicles(vehiclesData);
      
      // Calculate statistics
      const availableVehicles = vehiclesData.filter((v: Vehicle) => v.status === 'available');
      const locations = [...new Set(vehiclesData.map((v: Vehicle) => v.location))];
      
      const typeCount: { [key: string]: number } = {};
      vehiclesData.forEach((v: Vehicle) => {
        typeCount[v.vehicleType] = (typeCount[v.vehicleType] || 0) + 1;
      });
      
      const vehicleTypes = Object.entries(typeCount).map(([type, count]) => ({ type, count }));
      
      const totalHourlyRate = vehiclesData.reduce((sum: number, v: Vehicle) => sum + v.hourlyRate, 0);
      const totalDailyRate = vehiclesData.reduce((sum: number, v: Vehicle) => sum + v.dailyRate, 0);
      
      setStats({
        totalVehicles: vehiclesData.length,
        availableVehicles: availableVehicles.length,
        locations,
        vehicleTypes,
        averageHourlyRate: vehiclesData.length > 0 ? Math.round(totalHourlyRate / vehiclesData.length) : 0,
        averageDailyRate: vehiclesData.length > 0 ? Math.round(totalDailyRate / vehiclesData.length) : 0,
      });
      
    } catch (error) {
      console.error('Failed to fetch services data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'electric':
        return <Zap className="w-6 h-6 text-green-500" />;
      case 'scooter':
        return <Bike className="w-6 h-6 text-blue-500" />;
      default:
        return <Bike className="w-6 h-6 text-gray-500" />;
    }
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesLocation = selectedLocation === 'all' || vehicle.location === selectedLocation;
    const matchesType = selectedType === 'all' || vehicle.vehicleType === selectedType;
    return matchesLocation && matchesType && vehicle.status === 'available';
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600">Loading our services...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {stats.totalVehicles > 0 
              ? `${stats.totalVehicles} vehicles across ${stats.locations.length} locations. From ₹${Math.min(...vehicles.map(v => v.hourlyRate))}/hour.`
              : 'Mobility solutions tailored for riders, vehicle owners, and businesses. Whatever your needs, we\'ve got you covered.'
            }
          </p>

          {/* Dynamic Stats */}
          {stats.totalVehicles > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.availableVehicles}</div>
                <div className="text-gray-600">Available Now</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-green-600 mb-2">{stats.locations.length}</div>
                <div className="text-gray-600">Locations</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-purple-600 mb-2">₹{stats.averageHourlyRate}</div>
                <div className="text-gray-600">Avg. Per Hour</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹{stats.averageDailyRate}</div>
                <div className="text-gray-600">Avg. Per Day</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Filter by location"
            >
              <option value="all">All Locations</option>
              {stats.locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Filter by vehicle type"
            >
              <option value="all">All Types</option>
              {stats.vehicleTypes.map(({ type }) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Available Vehicles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Vehicles</h2>
            <p className="text-xl text-gray-600">
              {filteredVehicles.length > 0 
                ? `${filteredVehicles.length} vehicles available for booking`
                : 'No vehicles match your current filters'
              }
            </p>
          </div>

          {filteredVehicles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map(vehicle => (
                <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getVehicleIcon(vehicle.vehicleType)}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{vehicle.make} {vehicle.model}</h3>
                          <p className="text-sm text-gray-600">{vehicle.vehicleType} • {vehicle.location}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        vehicle.status === 'available' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {vehicle.status}
                      </div>
                    </div>
                    
                    {vehicle.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={vehicle.image} 
                          alt={`${vehicle.make} ${vehicle.model}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Per Hour:</span>
                        <span className="font-bold text-blue-600">₹{vehicle.hourlyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Per Day:</span>
                        <span className="font-bold text-green-600">₹{vehicle.dailyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">License Required:</span>
                        <span className="text-sm">{vehicle.licenseRequired ? 'Yes' : 'No'}</span>
                      </div>
                    </div>
                    
                    <Link href={`/user/book?vehicleId=${vehicle.id}`}>
                      <Button className="w-full" disabled={vehicle.status !== 'available'}>
                        {vehicle.status === 'available' ? 'Book Now' : 'Not Available'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Bike className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Vehicles Available</h3>
              <p className="text-gray-600 mb-8">
                {vehicles.length === 0 
                  ? 'We don\'t have any vehicles in our fleet yet. Please check back soon!'
                  : 'Try adjusting your filters to see more vehicles.'
                }
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => setSelectedLocation('all')}>
                  Clear Location Filter
                </Button>
                <Button variant="outline" onClick={() => setSelectedType('all')}>
                  Clear Type Filter
                </Button>
              </div>
            </div>
          )}

          {/* Vehicle Type Summary */}
          {stats.vehicleTypes.length > 0 && (
            <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Fleet Overview</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.vehicleTypes.map(({ type, count }) => (
                  <div key={type} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    {getVehicleIcon(type)}
                    <h4 className="font-bold text-lg mt-2 capitalize">{type}</h4>
                    <p className="text-gray-600">{count} available</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Location Summary */}
      {stats.locations.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Locations</h2>
              <p className="text-xl text-gray-600">We're available in {stats.locations.length} locations</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {stats.locations.map(location => {
                const locationVehicles = vehicles.filter(v => v.location === location && v.status === 'available');
                return (
                  <Card key={location} className="hover:shadow-xl transition text-center">
                    <CardContent className="p-6">
                      <MapPin className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                      <h3 className="text-xl font-bold mb-2">{location}</h3>
                      <p className="text-gray-600 mb-4">{locationVehicles.length} vehicles available</p>
                      {locationVehicles.length > 0 && (
                        <p className="text-sm text-gray-500">
                          From ₹{Math.min(...locationVehicles.map(v => v.hourlyRate))}/hour
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {stats.locations.length > 8 && (
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">And expanding to more locations every month!</p>
                <Link href="/contact">
                  <Button variant="outline">Request New Location</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
              <p className="text-gray-600">Download app or visit website. Sign up in 30 seconds with your mobile number.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-green-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Choose & Book</h3>
              <p className="text-gray-600">Browse vehicles near you. Select model, duration, and pickup location. Pay securely.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-orange-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Start Riding</h3>
              <p className="text-gray-600">Unlock with app. Hit the road. Return anytime. Simple!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Choose the service that's right for you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/user">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Book a Ride
              </Button>
            </Link>
            <Link href="/partner">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}