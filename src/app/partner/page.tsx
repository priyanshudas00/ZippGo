"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { DollarSign, Shield, Zap, TrendingUp, Clock, Smartphone, Award, CheckCircle, Calculator, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useSession } from '@/lib/auth-client';

export default function PartnerPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [vehicles, setVehicles] = useState(1);
  const monthlyIncome = vehicles * 14000;
  const annualIncome = monthlyIncome * 12;
  const roi = ((annualIncome / (vehicles * 80000)) * 100).toFixed(0);

  // Protect route - redirect to login if not authenticated
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push('/login?redirect=/partner');
    }
  }, [session, isPending, router]);

  // Show loading while checking authentication
  if (isPending) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading partner portal...</p>
        </div>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Become a Partner
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Your Idle Vehicle Into{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  ₹20,000/Month
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join 500+ vehicle owners earning passive income with ZippGo. Zero hassle, guaranteed payouts, 
                and we handle everything from maintenance to insurance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-6 text-lg">
                  Join Now - It's Free
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg">
                  Calculate Your Income
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-bold text-green-600">500+</p>
                  <p className="text-sm text-gray-600">Active Partners</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">₹14K</p>
                  <p className="text-sm text-gray-600">Avg. Monthly Income</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">210%</p>
                  <p className="text-sm text-gray-600">Annual ROI</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop" 
                alt="Partner program" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Monthly Earnings</p>
                    <p className="text-2xl font-bold text-green-600">₹12K - ₹25K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Start earning in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-green-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Register Your Vehicle</h3>
              <p className="text-gray-600">
                Fill out a simple form with your vehicle details. Upload RC, insurance docs. Takes 5 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Vehicle Verification</h3>
              <p className="text-gray-600">
                Our team inspects your vehicle (free 25-point check). We install GPS tracker and smart lock.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-purple-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Start Earning</h3>
              <p className="text-gray-600">
                Vehicle goes live on app. Bookings start. You earn. Get paid on 1st of every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With ZippGo?</h2>
            <p className="text-xl text-gray-600">We take care of everything so you don't have to</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Guaranteed Income</h3>
                <p className="text-gray-600 mb-4">
                  Minimum ₹12,000/month guaranteed even if your vehicle isn't booked. Top partners earn ₹25,000+.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-700">Average earnings: ₹14,000-18,000/month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Insurance Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive insurance on all vehicles. Zero liability for theft, damage, or accidents.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-700">₹5 lakh coverage per vehicle</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Free Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  We handle all servicing, repairs, and breakdowns. You don't pay a rupee.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-700">Saves ₹2,000-3,000/month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
                <p className="text-gray-600 mb-4">
                  Dedicated partner success manager. Breakdown assistance. Instant issue resolution.
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-orange-700">Average response time: 15 minutes</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Track earnings, bookings, and vehicle health from your phone. Withdraw anytime.
                </p>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-indigo-700">Available on iOS & Android</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Bonus & Incentives</h3>
                <p className="text-gray-600 mb-4">
                  Referral bonuses, performance incentives, and loyalty rewards. Top partners earn extra ₹5K/month.
                </p>
                <div className="bg-pink-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-pink-700">₹1,000 per referral</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <Calculator className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your Income</h2>
              <p className="text-xl text-gray-600">See how much you can earn</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl">
              <div className="mb-8">
                <Label className="text-lg font-semibold mb-4 block">
                  How many vehicles do you want to add?
                </Label>
                <div className="flex items-center gap-4">
                  <Input 
                    type="number" 
                    value={vehicles}
                    onChange={(e) => setVehicles(Math.max(1, parseInt(e.target.value) || 1))}
                    className="text-2xl font-bold text-center"
                    min="1"
                  />
                  <span className="text-gray-600">vehicles</span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center pb-4 border-b-2">
                  <span className="text-gray-700 font-semibold">Monthly income per vehicle</span>
                  <span className="text-2xl font-bold text-green-600">₹14,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b-2">
                  <span className="text-gray-700 font-semibold">Total monthly income</span>
                  <span className="text-3xl font-bold text-green-600">₹{monthlyIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b-2">
                  <span className="text-gray-700 font-semibold">Annual income</span>
                  <span className="text-3xl font-bold text-blue-600">₹{annualIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Annual ROI</span>
                  <span className="text-4xl font-bold text-purple-600">{roi}%</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">What We Cover:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">All maintenance & repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Comprehensive insurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">GPS & IoT devices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Marketing & operations</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-lg py-6">
                Start Earning This Much
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            <p className="text-xl text-gray-600">Real earnings from real partners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "I had 2 bikes sitting idle. Now they generate ₹32,000/month! Best decision ever. 
                  ZippGo handles everything."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center font-bold text-green-700">P</div>
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-gray-600">Partner since 6 months, Patna</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Started with 1 scooter, now have 5. Earning ₹70K/month passive income. Planning to buy 5 more!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700">V</div>
                  <div>
                    <p className="font-semibold">Vikram Singh</p>
                    <p className="text-sm text-gray-600">Partner since 1 year, Bengaluru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Transparent payouts, professional team, zero hassle. My vehicle is insured and maintained for free!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-700">R</div>
                  <div>
                    <p className="font-semibold">Rahul Verma</p>
                    <p className="text-sm text-gray-600">Partner since 8 months, Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Registration Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Register as a Partner</h2>
            <p className="text-xl text-gray-600">Fill out this form and we'll get back to you within 24 hours</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="Patna, Bengaluru, Delhi..." />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="vehicleType">Vehicle Type *</Label>
                    <Input id="vehicleType" placeholder="Bike, Scooter, Electric..." />
                  </div>
                  <div>
                    <Label htmlFor="vehicleCount">Number of Vehicles</Label>
                    <Input id="vehicleCount" type="number" placeholder="1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea id="message" placeholder="Tell us about your vehicles..." rows={4} />
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-lg py-6">
                  Submit Application
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting, you agree to our Terms & Conditions. We'll contact you within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ partners who've turned their idle vehicles into income-generating assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Register Now - It's Free
            </Button>
            <Link href="/partner-login">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Partner Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}