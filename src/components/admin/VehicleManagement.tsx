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

  useEffect(() => {
    fetchVehicles();
    fetchPartners();
  }, []);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/vehicles?limit=100');
      if (!response.ok) throw new Error('Failed to fetch vehicles');
      const data = await response.json();
      setVehicles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load vehicles');
    } finally {
      setLoading(false);
    }
  };

  const fetchPartners = async () => {
    try {
      const response = await fetch('/api/users?role=partner&limit=100');
      if (!response.ok) throw new Error('Failed to fetch partners');
      const data = await response.json();
      setPartners(data);
    } catch (err) {
      console.error('Failed to fetch partners:', err);
    }
  };

  const handleAddVehicle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const vehicleData = {
      partnerId: parseInt(formData.get('partnerId') as string),
      vehicleType: formData.get('vehicleType') as string,
      brand: formData.get('brand') as string,
      model: formData.get('model') as string,
      registrationNumber: formData.get('registrationNumber') as string,
      year: parseInt(formData.get('year') as string),
      color: formData.get('color') as string,
      location: formData.get('location') as string,
      hourlyRate: parseInt(formData.get('hourlyRate') as string),
      dailyRate: parseInt(formData.get('dailyRate') as string),
      monthlyRate: parseInt(formData.get('monthlyRate') as string),
      imageUrl: formData.get('imageUrl') as string || null,
    };

    try {
      const response = await fetch('/api/vehicles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehicleData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to add vehicle');
      }

      toast.success('Vehicle added successfully!');
      setIsAddModalOpen(false);
      fetchVehicles();
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to add vehicle');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteVehicle = async (id: number) => {
    if (!confirm('Are you sure you want to delete this vehicle?')) return;

    try {
      const response = await fetch(`/api/vehicles?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete vehicle');
      }

      toast.success('Vehicle deleted successfully!');
      fetchVehicles();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to delete vehicle');
    }
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vehicle.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || vehicle.status === filterStatus;
    const matchesLocation = filterLocation === 'all' || vehicle.location === filterLocation;
    return matchesSearch && matchesStatus && matchesLocation;
  });

  const statusCounts = {
    all: vehicles.length,
    available: vehicles.filter(v => v.status === 'available').length,
    booked: vehicles.filter(v => v.status === 'booked').length,
    maintenance: vehicles.filter(v => v.status === 'maintenance').length,
  };

  const locations = [...new Set(vehicles.map(v => v.location))];

  if (loading) {
    return (
      <div className=\"min-h-screen bg-gray-50 flex items-center justify-center\">
        <div className=\"text-center\">
          <Loader2 className=\"w-12 h-12 animate-spin text-blue-600 mx-auto mb-4\" />
          <p className=\"text-gray-600\">Loading vehicles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className=\"min-h-screen bg-gray-50 flex items-center justify-center p-6\">
        <Card className=\"max-w-md w-full\">
          <CardContent className=\"p-6 text-center\">
            <AlertCircle className=\"w-12 h-12 text-red-600 mx-auto mb-4\" />
            <h3 className=\"text-xl font-bold text-gray-900 mb-2\">Error Loading Vehicles</h3>
            <p className=\"text-gray-600 mb-4\">{error}</p>
            <Button onClick={fetchVehicles}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className=\"min-h-screen bg-gray-50 p-6\">
      <div className=\"max-w-7xl mx-auto\">
        {/* Header */}
        <div className=\"flex items-center justify-between mb-8\">
          <div>
            <div className=\"flex items-center gap-4 mb-2\">
              <Link href=\"/admin\">
                <Button variant=\"ghost\" size=\"sm\">
                  <ArrowLeft className=\"w-4 h-4 mr-2\" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            <h1 className=\"text-4xl font-bold text-gray-900 mb-2\">Vehicle Management</h1>
            <p className=\"text-gray-600\">Manage all vehicles, add new vehicles, and update vehicle information</p>
          </div>
          <Button 
            onClick={() => setIsAddModalOpen(true)}
            className=\"bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500 text-white\"
          >
            <Plus className=\"w-4 h-4 mr-2\" />
            Add New Vehicle
          </Button>
        </div>

        {/* Stats Cards */}
        <div className=\"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8\">
          <Card>
            <CardContent className=\"p-6\">
              <div className=\"flex items-center justify-between\">
                <div>
                  <p className=\"text-sm text-gray-600\">Total Vehicles</p>
                  <p className=\"text-3xl font-bold text-gray-900\">{statusCounts.all}</p>
                </div>
                <Bike className=\"w-10 h-10 text-blue-600\" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=\"p-6\">
              <div className=\"flex items-center justify-between\">
                <div>
                  <p className=\"text-sm text-gray-600\">Available</p>
                  <p className=\"text-3xl font-bold text-green-600\">{statusCounts.available}</p>
                </div>
                <CheckCircle className=\"w-10 h-10 text-green-600\" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=\"p-6\">
              <div className=\"flex items-center justify-between\">
                <div>
                  <p className=\"text-sm text-gray-600\">Booked</p>
                  <p className=\"text-3xl font-bold text-orange-600\">{statusCounts.booked}</p>
                </div>
                <Clock className=\"w-10 h-10 text-orange-600\" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=\"p-6\">
              <div className=\"flex items-center justify-between\">
                <div>
                  <p className=\"text-sm text-gray-600\">Maintenance</p>
                  <p className=\"text-3xl font-bold text-red-600\">{statusCounts.maintenance}</p>
                </div>
                <XCircle className=\"w-10 h-10 text-red-600\" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className=\"mb-6\">
          <CardContent className=\"p-6\">
            <div className=\"flex flex-col md:flex-row gap-4\">
              <div className=\"flex-1 relative\">
                <Search className=\"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5\" />
                <Input
                  type=\"text\"
                  placeholder=\"Search by model, brand, or registration number...\"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=\"pl-10\"
                />
              </div>
              <div className=\"flex gap-2\">
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className=\"px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\"
                >
                  <option value=\"all\">All Status</option>
                  <option value=\"available\">Available</option>
                  <option value=\"booked\">Booked</option>
                  <option value=\"maintenance\">Maintenance</option>
                  <option value=\"inactive\">Inactive</option>
                </select>
                <select 
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className=\"px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\"
                >
                  <option value=\"all\">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Vehicles ({filteredVehicles.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredVehicles.length === 0 ? (
              <div className=\"text-center py-12\">
                <Bike className=\"w-16 h-16 text-gray-300 mx-auto mb-4\" />
                <p className=\"text-gray-600\">No vehicles found</p>
              </div>
            ) : (
              <div className=\"overflow-x-auto\">
                <table className=\"w-full\">
                  <thead>
                    <tr className=\"border-b-2 border-gray-200\">
                      <th className=\"text-left py-3 px-4 font-semibold text-gray-700\">ID</th>
                      <th className=\"text-left py-3 px-4 font-semibold text-gray-700\">Vehicle</th>
                      <th className=\"text-left py-3 px-4 font-semibold text-gray-700\">Reg. Number</th>
                      <th className=\"text-left py-3 px-4 font-semibold text-gray-700\">Type</th>
                      <th className=\"text-left py-3 px-4 font-semibold text-gray-700\">Status</th>
                      <th className=\"text-left py-3 px-4 font-semibold text-gray-700\">Location</th>
                      <th className=\"text-left py-3 px-4 font-semibold text-gray-700\">Rates</th>
                      <th className=\"text-left py-3 px-4 font-semibold text-gray-700\">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVehicles.map((vehicle) => (
                      <tr key={vehicle.id} className=\"border-b border-gray-100 hover:bg-gray-50\">
                        <td className=\"py-4 px-4 font-medium\">#{vehicle.id}</td>
                        <td className=\"py-4 px-4\">
                          <div>
                            <p className=\"font-semibold\">{vehicle.brand} {vehicle.model}</p>
                            <p className=\"text-sm text-gray-600\">{vehicle.year} • {vehicle.color}</p>
                          </div>
                        </td>
                        <td className=\"py-4 px-4 font-mono text-sm\">{vehicle.registrationNumber}</td>
                        <td className=\"py-4 px-4\">
                          <span className=\"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 capitalize\">
                            {vehicle.vehicleType}
                          </span>
                        </td>
                        <td className=\"py-4 px-4\">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                            vehicle.status === 'available' ? 'bg-green-100 text-green-700' :
                            vehicle.status === 'booked' ? 'bg-orange-100 text-orange-700' :
                            vehicle.status === 'maintenance' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {vehicle.status}
                          </span>
                        </td>
                        <td className=\"py-4 px-4 text-sm\">{vehicle.location}</td>
                        <td className=\"py-4 px-4\">
                          <div className=\"text-sm\">
                            <div>Daily: <span className=\"font-semibold\">₹{vehicle.dailyRate}</span></div>
                            <div className=\"text-gray-600\">Monthly: ₹{vehicle.monthlyRate}</div>
                          </div>
                        </td>
                        <td className=\"py-4 px-4\">
                          <div className=\"flex items-center gap-2\">
                            <Button size=\"sm\" variant=\"ghost\" className=\"text-red-600 hover:text-red-700\"
                              onClick={() => handleDeleteVehicle(vehicle.id)}>
                              <Trash2 className=\"w-4 h-4\" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Add Vehicle Modal */}
        {isAddModalOpen && (
          <div className=\"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4\">
            <Card className=\"w-full max-w-2xl max-h-[90vh] overflow-y-auto\">
              <CardHeader>
                <CardTitle>Add New Vehicle</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddVehicle} className=\"space-y-4\">
                  <div className=\"grid md:grid-cols-2 gap-4\">
                    <div>
                      <Label htmlFor=\"brand\">Brand *</Label>
                      <Input id=\"brand\" name=\"brand\" placeholder=\"Honda\" required />
                    </div>
                    <div>
                      <Label htmlFor=\"model\">Model *</Label>
                      <Input id=\"model\" name=\"model\" placeholder=\"Activa 6G\" required />
                    </div>
                  </div>

                  <div className=\"grid md:grid-cols-2 gap-4\">
                    <div>
                      <Label htmlFor=\"registrationNumber\">Registration Number *</Label>
                      <Input id=\"registrationNumber\" name=\"registrationNumber\" placeholder=\"BR01AB1234\" required />
                    </div>
                    <div>
                      <Label htmlFor=\"year\">Year *</Label>
                      <Input id=\"year\" name=\"year\" type=\"number\" placeholder=\"2023\" required />
                    </div>
                  </div>

                  <div className=\"grid md:grid-cols-2 gap-4\">
                    <div>
                      <Label htmlFor=\"vehicleType\">Vehicle Type *</Label>
                      <select id=\"vehicleType\" name=\"vehicleType\" required
                        className=\"w-full px-3 py-2 border border-gray-300 rounded-md\">
                        <option value=\"\">Select type</option>
                        <option value=\"bike\">Bike</option>
                        <option value=\"scooter\">Scooter</option>
                        <option value=\"electric\">Electric</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor=\"color\">Color *</Label>
                      <Input id=\"color\" name=\"color\" placeholder=\"Black\" required />
                    </div>
                  </div>

                  <div className=\"grid md:grid-cols-2 gap-4\">
                    <div>
                      <Label htmlFor=\"location\">Location *</Label>
                      <Input id=\"location\" name=\"location\" placeholder=\"Patna\" required />
                    </div>
                    <div>
                      <Label htmlFor=\"partnerId\">Partner *</Label>
                      <select id=\"partnerId\" name=\"partnerId\" required
                        className=\"w-full px-3 py-2 border border-gray-300 rounded-md\">
                        <option value=\"\">Select partner</option>
                        {partners.map(partner => (
                          <option key={partner.id} value={partner.id}>{partner.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className=\"grid md:grid-cols-3 gap-4\">
                    <div>
                      <Label htmlFor=\"hourlyRate\">Hourly Rate (₹) *</Label>
                      <Input id=\"hourlyRate\" name=\"hourlyRate\" type=\"number\" placeholder=\"50\" required />
                    </div>
                    <div>
                      <Label htmlFor=\"dailyRate\">Daily Rate (₹) *</Label>
                      <Input id=\"dailyRate\" name=\"dailyRate\" type=\"number\" placeholder=\"299\" required />
                    </div>
                    <div>
                      <Label htmlFor=\"monthlyRate\">Monthly Rate (₹) *</Label>
                      <Input id=\"monthlyRate\" name=\"monthlyRate\" type=\"number\" placeholder=\"8000\" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor=\"imageUrl\">Image URL (optional)</Label>
                    <Input id=\"imageUrl\" name=\"imageUrl\" placeholder=\"https://...\" />
                  </div>

                  <div className=\"flex gap-4 pt-4\">
                    <Button 
                      type=\"button\" 
                      onClick={() => setIsAddModalOpen(false)}
                      variant=\"outline\"
                      className=\"flex-1\"
                      disabled={submitting}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type=\"submit\"
                      className=\"flex-1 bg-gradient-to-r from-blue-600 to-green-400 text-white\"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className=\"w-4 h-4 mr-2 animate-spin\" />
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
    </div>
  );
}
