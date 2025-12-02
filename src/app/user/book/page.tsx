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
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Bike, 
  Car, 
  Zap, 
  ArrowLeft, 
  Loader2, 
  Search, 
  Filter,
  CheckCircle,
  Upload,
  Camera,
  CreditCard,
  FileText,
  User,
  Phone,
  IdCard,
  ArrowRight,
  Shield,
  Star
} from 'lucide-react';
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

interface KYCData {
  aadharNumber: string;
  aadharFrontImage: string;
  aadharBackImage: string;
  drivingLicenseNumber: string;
  drivingLicenseImage: string;
  livePhotoImage: string;
  phone: string;
  address: string;
}

interface PaymentData {
  method: 'upi' | 'card' | 'netbanking' | 'wallet';
  upiId?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

export default function BookVehiclePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [bookingData, setBookingData] = useState<BookingFormData>({
    vehicleId: null,
    startDate: '',
    endDate: '',
    durationType: 'daily',
    pickupLocation: '',
    dropLocation: ''
  });

  const [kycData, setKycData] = useState<KYCData>({
    aadharNumber: '',
    aadharFrontImage: '',
    aadharBackImage: '',
    drivingLicenseNumber: '',
    drivingLicenseImage: '',
    livePhotoImage: '',
    phone: '',
    address: ''
  });

  const [paymentData, setPaymentData] = useState<PaymentData>({
    method: 'upi'
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
      return;
    }

    if (session) {
      fetchVehicles();
    }
  }, [session, isPending, router]);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/vehicles?status=available');
      if (!response.ok) throw new Error('Failed to fetch vehicles');
      const data = await response.json();
      setVehicles(data);
      setFilteredVehicles(data);
    } catch (error: any) {
      toast.error(error.message || 'Failed to load vehicles');
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter vehicles based on search and filters
  useEffect(() => {
    let filtered = vehicles;

    if (searchTerm) {
      filtered = filtered.filter(vehicle =>
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== 'all') {
      filtered = filtered.filter(vehicle => vehicle.vehicleType === filterType);
    }

    if (filterLocation !== 'all') {
      filtered = filtered.filter(vehicle => vehicle.location === filterLocation);
    }

    setFilteredVehicles(filtered);
  }, [vehicles, searchTerm, filterType, filterLocation]);

  // Step navigation functions
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // File upload handler
  const handleFileUpload = (file: File, field: string) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setKycData(prev => ({ ...prev, [field]: result }));
    };
    reader.readAsDataURL(file);
  };

  // Validate step 1
  const validateStep1 = () => {
    return bookingData.vehicleId && bookingData.startDate && bookingData.pickupLocation;
  };

  // Validate step 2
  const validateStep2 = () => {
    return kycData.aadharNumber && 
           kycData.aadharFrontImage && 
           kycData.aadharBackImage && 
           kycData.drivingLicenseNumber && 
           kycData.drivingLicenseImage && 
           kycData.livePhotoImage && 
           kycData.phone && 
           kycData.address;
  };

  // Final booking submission
  const handleFinalBooking = async () => {
    setSubmitting(true);
    try {
      // Get user ID from session or fetch from API
      let userId = parseInt(session?.user?.id || '0');
      
      if (!userId) {
        const userRes = await fetch(`/api/users?email=${encodeURIComponent(session?.user?.email || '')}`);
        if (userRes.ok) {
          const user = await userRes.json();
          userId = user.id;
        } else {
          throw new Error('User not found');
        }
      }

      // Create booking with pending status
      const bookingResponse = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...bookingData,
          userId,
          status: 'pending', // Pending until admin approval
          paymentStatus: 'pending',
          totalAmount: calculateTotalAmount(),
          kycData: JSON.stringify(kycData),
          paymentData: JSON.stringify(paymentData)
        })
      });

      if (!bookingResponse.ok) throw new Error('Failed to create booking');

      toast.success('Booking submitted successfully! Awaiting admin approval and KYC verification.');
      router.push('/user');
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit booking');
    } finally {
      setSubmitting(false);
    }
  };

  // Calculate total amount based on duration
  const calculateTotalAmount = () => {
    const selectedVehicle = vehicles.find(v => v.id === bookingData.vehicleId);
    if (!selectedVehicle) return 0;

    switch (bookingData.durationType) {
      case 'hourly':
        return selectedVehicle.hourlyRate;
      case 'daily':
        return selectedVehicle.dailyRate;
      case 'monthly':
        return selectedVehicle.monthlyRate;
      default:
        return selectedVehicle.dailyRate;
    }
  };

  const getVehicleIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'bike':
        return <Bike className="w-5 h-5" />;
      case 'car':
        return <Car className="w-5 h-5" />;
      case 'scooter':
      case 'electric':
        return <Zap className="w-5 h-5" />;
      default:
        return <Bike className="w-5 h-5" />;
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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => currentStep > 1 ? previousStep() : router.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStep > 1 ? 'Previous' : 'Back'}
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Book a Vehicle</h1>
              <p className="text-lg text-gray-600">Complete your booking in 3 simple steps</p>
            </div>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-gray-300 text-gray-400'
                    }`}
                  >
                    {currentStep > step ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="font-semibold">{step}</span>
                    )}
                  </div>
                  <div className="ml-2 text-sm font-medium">
                    {step === 1 && 'Vehicle & Schedule'}
                    {step === 2 && 'KYC Verification'}
                    {step === 3 && 'Payment'}
                  </div>
                  {step < 3 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Vehicle Selection & Schedule */}
        {currentStep === 1 && (
          <div className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Find Your Perfect Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search by brand, model, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Vehicle Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="bike">Bike</SelectItem>
                      <SelectItem value="scooter">Scooter</SelectItem>
                      <SelectItem value="bicycle">Bicycle</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filterLocation} onValueChange={setFilterLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {[...new Set(vehicles.map(v => v.location))].map(location => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVehicles.map((vehicle) => (
                <Card 
                  key={vehicle.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    bookingData.vehicleId === vehicle.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setBookingData(prev => ({ ...prev, vehicleId: vehicle.id }))}
                >
                  {vehicle.imageUrl && (
                    <div className="h-48 bg-gray-200 rounded-t-lg">
                      <img
                        src={vehicle.imageUrl}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          {getVehicleIcon(vehicle.vehicleType)}
                          {vehicle.brand} {vehicle.model}
                        </h3>
                        <p className="text-gray-600">{vehicle.registrationNumber}</p>
                        <p className="text-sm text-gray-500">{vehicle.year} • {vehicle.color}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">4.5</span>
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
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      {vehicle.location}
                    </div>

                    {vehicle.gpsEnabled && (
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Shield className="w-4 h-4" />
                        GPS Enabled
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Booking Details Form */}
            {bookingData.vehicleId && (
              <Card>
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
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
                        min={new Date().toISOString().slice(0, 16)}
                        required
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

                    <div>
                      <Label htmlFor="dropLocation">Drop Location (Optional)</Label>
                      <Input
                        id="dropLocation"
                        placeholder="Enter drop address"
                        value={bookingData.dropLocation}
                        onChange={(e) => setBookingData(prev => ({ ...prev, dropLocation: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Estimated Cost:</span>
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{calculateTotalAmount()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Rate: ₹{calculateTotalAmount()} per {bookingData.durationType.slice(0, -2)}
                    </p>
                  </div>

                  <Button 
                    onClick={nextStep} 
                    disabled={!validateStep1()}
                    className="w-full"
                  >
                    Continue to KYC Verification
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Step 2: KYC Verification */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  KYC Verification
                </CardTitle>
                <p className="text-gray-600">Upload your documents for verification</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit phone number"
                      value={kycData.phone}
                      onChange={(e) => setKycData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="Enter your full address"
                      value={kycData.address}
                      onChange={(e) => setKycData(prev => ({ ...prev, address: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                {/* Aadhar Card */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <IdCard className="w-5 h-5" />
                    Aadhar Card
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="aadharNumber">Aadhar Number</Label>
                      <Input
                        id="aadharNumber"
                        placeholder="Enter 12-digit Aadhar number"
                        value={kycData.aadharNumber}
                        onChange={(e) => setKycData(prev => ({ ...prev, aadharNumber: e.target.value }))}
                        maxLength={12}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Aadhar Front Image</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        {kycData.aadharFrontImage ? (
                          <div className="space-y-2">
                            <img src={kycData.aadharFrontImage} alt="Aadhar Front" className="max-h-32 mx-auto" />
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setKycData(prev => ({ ...prev, aadharFrontImage: '' }))}
                            >
                              Remove
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Upload Aadhar Front</p>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              id="aadhar-front"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleFileUpload(file, 'aadharFrontImage');
                              }}
                            />
                            <Label htmlFor="aadhar-front" className="cursor-pointer">
                              <Button size="sm" variant="outline" className="mt-2">
                                Choose File
                              </Button>
                            </Label>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label>Aadhar Back Image</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        {kycData.aadharBackImage ? (
                          <div className="space-y-2">
                            <img src={kycData.aadharBackImage} alt="Aadhar Back" className="max-h-32 mx-auto" />
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setKycData(prev => ({ ...prev, aadharBackImage: '' }))}
                            >
                              Remove
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Upload Aadhar Back</p>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              id="aadhar-back"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleFileUpload(file, 'aadharBackImage');
                              }}
                            />
                            <Label htmlFor="aadhar-back" className="cursor-pointer">
                              <Button size="sm" variant="outline" className="mt-2">
                                Choose File
                              </Button>
                            </Label>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Driving License */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Driving License
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="drivingLicenseNumber">License Number</Label>
                      <Input
                        id="drivingLicenseNumber"
                        placeholder="Enter driving license number"
                        value={kycData.drivingLicenseNumber}
                        onChange={(e) => setKycData(prev => ({ ...prev, drivingLicenseNumber: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label>License Image</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      {kycData.drivingLicenseImage ? (
                        <div className="space-y-2">
                          <img src={kycData.drivingLicenseImage} alt="Driving License" className="max-h-32 mx-auto" />
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setKycData(prev => ({ ...prev, drivingLicenseImage: '' }))}
                          >
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Upload License Image</p>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="license"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleFileUpload(file, 'drivingLicenseImage');
                            }}
                          />
                          <Label htmlFor="license" className="cursor-pointer">
                            <Button size="sm" variant="outline" className="mt-2">
                              Choose File
                            </Button>
                          </Label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Live Photo */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Live Photo Verification
                  </h4>
                  
                  <div>
                    <Label>Live Photo</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      {kycData.livePhotoImage ? (
                        <div className="space-y-2">
                          <img src={kycData.livePhotoImage} alt="Live Photo" className="max-h-32 mx-auto" />
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setKycData(prev => ({ ...prev, livePhotoImage: '' }))}
                          >
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Take a live photo for verification</p>
                          <input
                            type="file"
                            accept="image/*"
                            capture="user"
                            className="hidden"
                            id="live-photo"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleFileUpload(file, 'livePhotoImage');
                            }}
                          />
                          <Label htmlFor="live-photo" className="cursor-pointer">
                            <Button size="sm" variant="outline" className="mt-2">
                              Take Photo
                            </Button>
                          </Label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={nextStep} 
                  disabled={!validateStep2()}
                  className="w-full"
                >
                  Continue to Payment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Payment */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Booking Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Booking Summary</h4>
                  {(() => {
                    const selectedVehicle = vehicles.find(v => v.id === bookingData.vehicleId);
                    return (
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Vehicle:</span>
                          <span>{selectedVehicle?.brand} {selectedVehicle?.model}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{bookingData.durationType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Start Date:</span>
                          <span>{new Date(bookingData.startDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pickup:</span>
                          <span>{bookingData.pickupLocation}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-bold text-lg">
                          <span>Total Amount:</span>
                          <span>₹{calculateTotalAmount()}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Payment Method Selection */}
                <div>
                  <Label className="text-base font-semibold">Select Payment Method</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                    {['upi', 'card', 'netbanking', 'wallet'].map((method) => (
                      <Button
                        key={method}
                        variant={paymentData.method === method ? 'default' : 'outline'}
                        onClick={() => setPaymentData(prev => ({ ...prev, method: method as any }))}
                        className="h-16 flex-col"
                      >
                        <CreditCard className="w-6 h-6 mb-1" />
                        {method.charAt(0).toUpperCase() + method.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Payment Form based on selected method */}
                {paymentData.method === 'upi' && (
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      placeholder="example@upi"
                      value={paymentData.upiId || ''}
                      onChange={(e) => setPaymentData(prev => ({ ...prev, upiId: e.target.value }))}
                    />
                  </div>
                )}

                {paymentData.method === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber || ''}
                        onChange={(e) => setPaymentData(prev => ({ ...prev, cardNumber: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Expiry Date</Label>
                        <Input
                          id="cardExpiry"
                          placeholder="MM/YY"
                          value={paymentData.cardExpiry || ''}
                          onChange={(e) => setPaymentData(prev => ({ ...prev, cardExpiry: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardCvv">CVV</Label>
                        <Input
                          id="cardCvv"
                          placeholder="123"
                          type="password"
                          value={paymentData.cardCvv || ''}
                          onChange={(e) => setPaymentData(prev => ({ ...prev, cardCvv: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-yellow-800">Important Note</h5>
                      <p className="text-sm text-yellow-700 mt-1">
                        Your booking will be in pending status until admin approves and verifies your KYC documents. 
                        Payment will be processed only after approval.
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleFinalBooking}
                  disabled={submitting}
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting Booking...
                    </>
                  ) : (
                    <>
                      Submit Booking Request
                      <CheckCircle className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}