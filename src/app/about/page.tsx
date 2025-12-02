import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: "About ZippGo Mobility - India's Smartest Mobility Platform",
  description: "Learn about ZippGo's mission to revolutionize urban mobility in India. We're democratizing transportation and creating wealth opportunities for vehicle owners.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">ZippGo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another bike rental company. We're building India's most intelligent mobility ecosystem 
            where technology meets affordability, and every ride moves India forward.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  In the bustling streets of Patna and the tech corridors of Bengaluru, a revolution was brewing. 
                  ZippGo Mobility was born from a simple observation: India's urban mobility was broken. Commuters 
                  struggled with expensive cabs, unreliable public transport, and the hassle of vehicle ownership.
                </p>
                <p>
                  Meanwhile, thousands of vehicle owners watched their bikes and scooters sit idle in garages, 
                  depreciating assets that could be generating income. ZippGo Mobility bridges this gap with a 
                  revolutionary three-sided marketplace connecting riders, vehicle owners, and drivers.
                </p>
                <p>
                  Founded in 2023, we started with just 50 vehicles in Patna. Today, we're operating 500+ vehicles 
                  across multiple cities, serving 50,000+ riders, and generating ₹20,000+ monthly income for our 
                  vehicle owner partners.
                </p>
                <p className="font-semibold text-blue-600">
                  We're not competing with Ola or Uber. We're democratizing mobility ownership.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become India's most trusted and accessible mobility platform, democratizing transportation 
                  and creating wealth opportunities for vehicle owners across every city and town.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize urban mobility by providing affordable, eco-friendly, and technology-driven 
                  transport solutions while creating sustainable income streams for vehicle owners and employment 
                  for drivers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  Innovation First • Trust & Transparency • Sustainability • Empowerment • Speed & Reliability • 
                  Customer Obsession
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">We're redefining mobility in India</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Asset-Light Model</h3>
              <p className="text-gray-700 mb-4">
                Unlike competitors who invest crores in buying vehicles, we partner with vehicle owners. This means:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Lower operational costs = Better prices for riders</li>
                <li>✓ Faster city expansion (₹15L vs ₹1Cr+ per city)</li>
                <li>✓ Better unit economics and profitability</li>
                <li>✓ Passive income for vehicle owners</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-900">Three-Sided Marketplace</h3>
              <p className="text-gray-700 mb-4">
                We create value for everyone in the ecosystem:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Riders: Affordable transport (₹99 onwards)</li>
                <li>✓ Vehicle Owners: ₹15-25K passive income</li>
                <li>✓ Drivers: Flexible employment opportunities</li>
                <li>✓ Cities: Reduced traffic and emissions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-900">Technology First</h3>
              <p className="text-gray-700 mb-4">
                AI and IoT power our operations:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Dynamic pricing based on demand</li>
                <li>✓ Real-time GPS tracking and geofencing</li>
                <li>✓ Predictive maintenance algorithms</li>
                <li>✓ Smart route optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-orange-900">Tier 2/3 Focus</h3>
              <p className="text-gray-700 mb-4">
                While others chase metros, we're building in underserved cities:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Lower customer acquisition costs</li>
                <li>✓ Less competition, higher margins</li>
                <li>✓ Massive untapped demand</li>
                <li>✓ Creating local employment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-400">Real growth, real impact</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-400" />
              </div>
              <p className="text-4xl font-bold font-poppins mb-2">50,000+</p>
              <p className="text-gray-400">Active Users</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-green-400" />
              </div>
              <p className="text-4xl font-bold font-poppins mb-2">500+</p>
              <p className="text-gray-400">Partner Vehicles</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-orange-400" />
              </div>
              <p className="text-4xl font-bold font-poppins mb-2">4.8/5</p>
              <p className="text-gray-400">User Rating</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-purple-400" />
              </div>
              <p className="text-4xl font-bold font-poppins mb-2">5 Cities</p>
              <p className="text-gray-400">& Growing Fast</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced founders building India's mobility future</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AK</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Amit Kumar</h3>
                <p className="text-blue-600 mb-3">Co-Founder & CEO</p>
                <p className="text-sm text-gray-600">
                  Ex-Ola, 10+ years in mobility. IIT Delhi graduate with passion for solving India's transport challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">PS</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Priya Singh</h3>
                <p className="text-green-600 mb-3">Co-Founder & CTO</p>
                <p className="text-sm text-gray-600">
                  Ex-Google engineer. Built scalable tech platforms serving millions. Expert in AI and IoT.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">RV</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Rahul Verma</h3>
                <p className="text-orange-600 mb-3">Co-Founder & COO</p>
                <p className="text-sm text-gray-600">
                  Ex-Uber operations head. Scaled operations across 20+ Indian cities. MBA from ISB.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join the ZippGo Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a rider looking for affordable transport or a vehicle owner wanting passive income, 
            we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/user">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Start Riding
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