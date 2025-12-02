'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { 
  Bike, Plus, Search, Edit, Trash2, Eye, CheckCircle, 
  XCircle, Clock, ArrowLeft, Filter, Loader2, AlertCircle 
} from 'lucide-react';
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

interface Partner {
  id: number;
  name: string;
}

export default function VehicleManagement() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');
  const [submitting, setSubmitting] = useState(false);

  const [newVehicle, setNewVehicle] = useState({
    partnerId: '',
    vehicleType: '',
    brand: '',
    model: '',
    registrationNumber: '',
    year: '',
    color: '',
    imageUrl: '',
    hourlyRate: '',
    dailyRate: '',
    monthlyRate: '',
    location: '',
    gpsEnabled: false
  });

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/vehicles');
      if (!response.ok) throw new Error('Failed to fetch vehicles');
      const data = await response.json();
      setVehicles(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPartners = async () => {
    try {
      const response = await fetch('/api/users?role=partner');
      if (!response.ok) throw new Error('Failed to fetch partners');
      const data = await response.json();
      setPartners(data);
    } catch (err: any) {
      console.error('Error fetching partners:', err);
    }
  };

  useEffect(() => {
    fetchVehicles();
    fetchPartners();
  }, []);

  const handleAddVehicle = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const vehicleData = {
        ...newVehicle,
        partnerId: parseInt(newVehicle.partnerId),
        year: parseInt(newVehicle.year),
        hourlyRate: parseFloat(newVehicle.hourlyRate),
        dailyRate: parseFloat(newVehicle.dailyRate),
        monthlyRate: parseFloat(newVehicle.monthlyRate)
      };

      const response = await fetch('/api/vehicles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehicleData)
      });

      if (!response.ok) throw new Error('Failed to add vehicle');

      toast.success('Vehicle added successfully!');
      setIsAddModalOpen(false);
      setNewVehicle({
        partnerId: '',
        vehicleType: '',
        brand: '',
        model: '',
        registrationNumber: '',
        year: '',
        color: '',
        imageUrl: '',
        hourlyRate: '',
        dailyRate: '',
        monthlyRate: '',
        location: '',
        gpsEnabled: false
      });
      fetchVehicles();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteVehicle = async (id: number) => {
    if (!confirm('Are you sure you want to delete this vehicle?')) return;

    try {
      const response = await fetch(`/api/vehicles/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete vehicle');

      toast.success('Vehicle deleted successfully!');
      fetchVehicles();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/vehicles/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (!response.ok) throw new Error('Failed to update vehicle status');

      toast.success('Vehicle status updated!');
      fetchVehicles();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = 
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || vehicle.status === filterStatus;
    const matchesLocation = filterLocation === 'all' || vehicle.location === filterLocation;

    return matchesSearch && matchesStatus && matchesLocation;
  });

  const statusCounts = {
    all: vehicles.length,
    available: vehicles.filter(v => v.status === 'available').length,
    rented: vehicles.filter(v => v.status === 'rented').length,
    maintenance: vehicles.filter(v => v.status === 'maintenance').length
  };

  const uniqueLocations = [...new Set(vehicles.map(v => v.location))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Loading Vehicles</h3>
          <p className="text-gray-600">Please wait while we fetch the vehicle data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Card className="max-w-md w-full">
          <CardContent className="p-6 text-center">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Vehicles</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={fetchVehicles}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Link 
                href="/admin" 
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Admin
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Vehicle Management</h1>
            <p className="text-gray-600">Manage all vehicles, add new vehicles, and update vehicle information</p>
          </div>

          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Vehicle
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Vehicles</p>
                  <p className="text-3xl font-bold text-gray-900">{statusCounts.all}</p>
                </div>
                <Bike className="w-10 h-10 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Available</p>
                  <p className="text-3xl font-bold text-green-600">{statusCounts.available}</p>
                </div>
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rented</p>
                  <p className="text-3xl font-bold text-yellow-600">{statusCounts.rented}</p>
                </div>
                <Clock className="w-10 h-10 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Maintenance</p>
                  <p className="text-3xl font-bold text-red-600">{statusCounts.maintenance}</p>
                </div>
                <XCircle className="w-10 h-10 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter Vehicles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="rented">Rented</option>
                <option value="maintenance">Maintenance</option>
              </select>

              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Locations</option>
                {uniqueLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden">
              {vehicle.imageUrl && (
                <div className="h-48 bg-gray-200">
                  <img
                    src={vehicle.imageUrl}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <p className="text-gray-600">{vehicle.registrationNumber}</p>
                    <p className="text-sm text-gray-500">{vehicle.year} • {vehicle.color}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    vehicle.status === 'available' ? 'bg-green-100 text-green-800' :
                    vehicle.status === 'rented' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {vehicle.status}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Hourly Rate:</span>
                    <span className="font-semibold">₹{vehicle.hourlyRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Daily Rate:</span>
                    <span className="font-semibold">₹{vehicle.dailyRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly Rate:</span>
                    <span className="font-semibold">₹{vehicle.monthlyRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{vehicle.location}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <select
                    value={vehicle.status}
                    onChange={(e) => handleUpdateStatus(vehicle.id, e.target.value)}
                    className="flex-1 text-sm rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="available">Available</option>
                    <option value="rented">Rented</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteVehicle(vehicle.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <Bike className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Vehicles Found</h3>
            <p className="text-gray-600 mb-6">
              {vehicles.length === 0 
                ? "No vehicles have been added yet. Start by adding your first vehicle."
                : "No vehicles match your current filters. Try adjusting your search criteria."
              }
            </p>
            {vehicles.length === 0 && (
              <Button
                onClick={() => setIsAddModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add First Vehicle
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Add Vehicle Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Add New Vehicle</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddVehicle} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="partnerId">Partner</Label>
                    <select
                      id="partnerId"
                      value={newVehicle.partnerId}
                      onChange={(e) => setNewVehicle({...newVehicle, partnerId: e.target.value})}
                      required
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Partner</option>
                      {partners.map(partner => (
                        <option key={partner.id} value={partner.id}>{partner.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="vehicleType">Vehicle Type</Label>
                    <select
                      id="vehicleType"
                      value={newVehicle.vehicleType}
                      onChange={(e) => setNewVehicle({...newVehicle, vehicleType: e.target.value})}
                      required
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Type</option>
                      <option value="bike">Bike</option>
                      <option value="scooter">Scooter</option>
                      <option value="bicycle">Bicycle</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="brand">Brand</Label>
                    <Input
                      id="brand"
                      value={newVehicle.brand}
                      onChange={(e) => setNewVehicle({...newVehicle, brand: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      value={newVehicle.model}
                      onChange={(e) => setNewVehicle({...newVehicle, model: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="registrationNumber">Registration Number</Label>
                    <Input
                      id="registrationNumber"
                      value={newVehicle.registrationNumber}
                      onChange={(e) => setNewVehicle({...newVehicle, registrationNumber: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      type="number"
                      min="2000"
                      max="2030"
                      value={newVehicle.year}
                      onChange={(e) => setNewVehicle({...newVehicle, year: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="color">Color</Label>
                    <Input
                      id="color"
                      value={newVehicle.color}
                      onChange={(e) => setNewVehicle({...newVehicle, color: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={newVehicle.location}
                      onChange={(e) => setNewVehicle({...newVehicle, location: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="hourlyRate">Hourly Rate (₹)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      step="0.01"
                      value={newVehicle.hourlyRate}
                      onChange={(e) => setNewVehicle({...newVehicle, hourlyRate: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="dailyRate">Daily Rate (₹)</Label>
                    <Input
                      id="dailyRate"
                      type="number"
                      step="0.01"
                      value={newVehicle.dailyRate}
                      onChange={(e) => setNewVehicle({...newVehicle, dailyRate: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyRate">Monthly Rate (₹)</Label>
                    <Input
                      id="monthlyRate"
                      type="number"
                      step="0.01"
                      value={newVehicle.monthlyRate}
                      onChange={(e) => setNewVehicle({...newVehicle, monthlyRate: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="imageUrl">Image URL (optional)</Label>
                    <Input
                      id="imageUrl"
                      type="url"
                      value={newVehicle.imageUrl}
                      onChange={(e) => setNewVehicle({...newVehicle, imageUrl: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="gpsEnabled"
                    checked={newVehicle.gpsEnabled}
                    onChange={(e) => setNewVehicle({...newVehicle, gpsEnabled: e.target.checked})}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Label htmlFor="gpsEnabled">GPS Enabled</Label>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddModalOpen(false)}
                    disabled={submitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Adding...
                      </>
                    ) : (
                      'Add Vehicle'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
