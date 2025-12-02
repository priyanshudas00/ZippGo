import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Bike, Clock, Calendar, Shield, MapPin, Smartphone, DollarSign, Users, Building2, TrendingUp, Zap, Award } from 'lucide-react';

export const metadata = {
  title: "ZippGo Services - Bike Rentals, Partner Program, Fleet Management",
  description: "Hourly, daily, and monthly bike rentals starting at ₹99. Partner program for vehicle owners. Corporate fleet management solutions across India.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mobility solutions tailored for riders, vehicle owners, and businesses. Whatever your needs, we've got you covered.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Service 1: Bike Rentals */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  For Riders
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  <Bike className="inline-block w-10 h-10 mr-3 text-blue-600" />
                  Bike Rentals
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Affordable, hassle-free bike and scooter rentals for every need. Whether you need a ride for an hour 
                  or a month, we've got flexible plans starting at just ₹99.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hourly Rentals</h3>
                      <p className="text-gray-600">Perfect for quick errands. ₹99 for 3 hours, then ₹25/hour.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Daily Rentals</h3>
                      <p className="text-gray-600">24-hour access. ₹299/day. Unlimited km within city limits.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Monthly Subscriptions</h3>
                      <p className="text-gray-600">Best value! ₹2,999/month. Save ₹6,000 vs daily bookings.</p>
                    </div>
                  </div>
                </div>

                <Link href="/pricing">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500 text-white">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop" 
                  alt="Bike rental service" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Starting at</p>
                  <p className="text-3xl font-bold text-blue-600">₹99</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Partner Program */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  For Vehicle Owners
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  <DollarSign className="inline-block w-10 h-10 mr-3 text-green-600" />
                  Partner Program
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Turn your idle vehicle into a passive income generator. Earn ₹15,000-₹25,000 per month per vehicle 
                  with zero hassle. We handle everything from maintenance to insurance.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Guaranteed Income</h3>
                      <p className="text-gray-600">Minimum ₹15,000/month guaranteed. Top partners earn ₹25,000+.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Full Insurance Coverage</h3>
                      <p className="text-gray-600">Comprehensive insurance on all vehicles. Zero liability for you.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Free Maintenance</h3>
                      <p className="text-gray-600">We handle all servicing, repairs, and maintenance costs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <Smartphone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Real-Time Dashboard</h3>
                      <p className="text-gray-600">Track earnings, vehicle health, and usage from your phone.</p>
                    </div>
                  </div>
                </div>

                <Link href="/partner">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white">
                    Become a Partner
                  </Button>
                </Link>
              </div>

              <div className="relative lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1554224311-beee2509a0c4?w=800&h=600&fit=crop" 
                  alt="Partner program" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Earn up to</p>
                  <p className="text-3xl font-bold text-green-600">₹25K/mo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Fleet Management */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  For Entrepreneurs
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  <TrendingUp className="inline-block w-10 h-10 mr-3 text-orange-600" />
                  Fleet Management
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Build and scale your own vehicle rental business with our complete fleet management solution. 
                  Start with 1 vehicle, scale to 100+. We provide tech, operations, and marketing support.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                      <Building2 className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Turn-Key Solution</h3>
                      <p className="text-gray-600">Complete tech platform, booking app, and operations support.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                      <Award className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Proven Business Model</h3>
                      <p className="text-gray-600">18-month ROI. ₹50,000+ monthly profit with 10 vehicles.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Training & Support</h3>
                      <p className="text-gray-600">Complete onboarding, SOP documentation, and 24/7 helpdesk.</p>
                    </div>
                  </div>
                </div>

                <Link href="/fleet-management">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop" 
                  alt="Fleet management" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">More ways we serve you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <Building2 className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Corporate Plans</h3>
                <p className="text-gray-600 mb-4">
                  Employee transport solutions for companies. Bulk discounts, dedicated account manager, 
                  monthly invoicing.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ 20% discount on bulk bookings</li>
                  <li>✓ Centralized billing</li>
                  <li>✓ Priority support</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Airport Transfers</h3>
                <p className="text-gray-600 mb-4">
                  Convenient airport pickup and drop services. Pre-book your ride and travel stress-free.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ Fixed pricing (₹499 onwards)</li>
                  <li>✓ Meet & greet service</li>
                  <li>✓ Luggage storage</li>
                </ul>
                <Link href="/user">
                  <Button variant="outline" className="w-full">Book Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <Calendar className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Long-Term Leasing</h3>
                <p className="text-gray-600 mb-4">
                  3-12 month vehicle leasing for individuals and businesses. All-inclusive packages.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ Starts at ₹2,499/month</li>
                  <li>✓ Free maintenance</li>
                  <li>✓ Upgrade anytime</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Get Quote</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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