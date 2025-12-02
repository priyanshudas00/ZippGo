import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Bike, Users, TrendingUp, Shield, Clock, MapPin, Star, CheckCircle, DollarSign, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 India's Smartest Mobility Platform
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ride Smart.<br />
                <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">
                  Earn Smarter.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Affordable bike rentals starting at ₹99. Vehicle owners earn ₹20,000/month passive income. 
                Join India's fastest-growing mobility revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/user">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500 text-white px-8 py-6 text-lg">
                    Book Your Ride <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/partner">
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                    Become a Partner
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">No Hidden Charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Instant Booking</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&h=600&fit=crop" 
                alt="Bike rental" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50,000+</p>
                  <p className="text-sm text-gray-600">Happy Riders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold font-poppins mb-2">50K+</p>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold font-poppins mb-2">500+</p>
              <p className="text-gray-400">Vehicles</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold font-poppins mb-2">₹20K</p>
              <p className="text-gray-400">Avg. Partner Income</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold font-poppins mb-2">4.8★</p>
              <p className="text-gray-400">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Mobility solutions for every need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition border-2 hover:border-blue-500">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Bike className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Bike Rentals</h3>
                <p className="text-gray-600 mb-6">Affordable hourly, daily, and monthly bike rentals. Starting at just ₹99.</p>
                <Link href="/services">
                  <Button variant="link" className="text-blue-600 p-0">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition border-2 hover:border-green-500">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Partner Program</h3>
                <p className="text-gray-600 mb-6">Turn your idle vehicle into a passive income source. Earn ₹15-25K/month.</p>
                <Link href="/partner">
                  <Button variant="link" className="text-green-600 p-0">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition border-2 hover:border-orange-500">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fleet Management</h3>
                <p className="text-gray-600 mb-6">Build your vehicle fleet business. We handle maintenance, insurance, and operations.</p>
                <Link href="/fleet-management">
                  <Button variant="link" className="text-orange-600 p-0">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
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
              <h3 className="text-2xl font-bold mb-4">Download App</h3>
              <p className="text-gray-600">Sign up in 30 seconds with your mobile number. No paperwork required.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-green-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Choose Vehicle</h3>
              <p className="text-gray-600">Browse available bikes near you. Select your preferred model and duration.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-orange-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Start Riding</h3>
              <p className="text-gray-600">Unlock with app and hit the road. Return anytime. Payment auto-deducted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ZippGo?</h2>
            <p className="text-xl text-gray-600">We're different from the rest</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">100% Verified Vehicles</h3>
                <p className="text-gray-600">Every vehicle passes 25-point safety inspection with GPS tracking.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Breakdown? Accident? Our team is available round the clock.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden charges. What you see is what you pay.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Multiple Locations</h3>
                <p className="text-gray-600">Pickup and drop across 50+ locations in your city.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Instant Booking</h3>
                <p className="text-gray-600">Book in seconds. Start riding in minutes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                <Star className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Best Rates</h3>
                <p className="text-gray-600">Save up to 60% compared to traditional cabs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real stories from real people</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4">"I save ₹6,000 every month using ZippGo instead of cabs. Best decision ever!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700">R</div>
                  <div>
                    <p className="font-semibold">Rajesh Kumar</p>
                    <p className="text-sm text-gray-600">Software Engineer, Bengaluru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4">"My 2 scooters now earn ₹40,000/month. ZippGo turned my idle assets into income!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center font-bold text-green-700">P</div>
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-gray-600">Partner, Patna</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4">"Reliable, affordable, and hassle-free. Perfect for college students like me!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-700">A</div>
                  <div>
                    <p className="font-semibold">Ananya Verma</p>
                    <p className="text-sm text-gray-600">Student, Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join 50,000+ riders and 500+ partners who trust ZippGo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/user">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Start Riding Now
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