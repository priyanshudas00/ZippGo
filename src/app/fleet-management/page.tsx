import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TrendingUp, Building2, Users, Shield, Smartphone, Award, BarChart, Zap, Target, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "ZippGo Fleet Management - Build Your Vehicle Rental Business",
  description: "Turn-key fleet management solution for entrepreneurs. Start with 1 vehicle, scale to 100+. Complete tech platform, operations support, proven business model with 18-month ROI.",
};

export default function FleetManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 For Entrepreneurs
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build Your Own{' '}
                <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                  Vehicle Rental Empire
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Complete fleet management solution. Start with 1 vehicle, scale to 100+. We provide tech, 
                operations, and marketing support. Proven business model with 18-month ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                    Schedule Demo
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg">
                  Download Business Plan
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-bold text-orange-600">₹50K+</p>
                  <p className="text-sm text-gray-600">Monthly Profit</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">18 Mo</p>
                  <p className="text-sm text-gray-600">ROI Timeline</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">200%</p>
                  <p className="text-sm text-gray-600">Annual ROI</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop" 
                alt="Fleet management" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">With 10 Vehicles</p>
                    <p className="text-2xl font-bold text-orange-600">₹50K+/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Turn-Key Solution</h2>
            <p className="text-xl text-gray-600">Everything you need to run a successful vehicle rental business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">White-Label App</h3>
                <p className="text-gray-600 mb-4">
                  Your own branded booking app (iOS + Android). Customer app, partner app, and admin dashboard.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Custom branding & logo</li>
                  <li>✓ Real-time booking system</li>
                  <li>✓ Payment gateway integration</li>
                  <li>✓ Push notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BarChart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Operations Management</h3>
                <p className="text-gray-600 mb-4">
                  Complete operational playbook with SOPs, training materials, and best practices.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Fleet management system</li>
                  <li>✓ Maintenance scheduling</li>
                  <li>✓ Staff training program</li>
                  <li>✓ Quality control checklists</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Marketing Support</h3>
                <p className="text-gray-600 mb-4">
                  Complete marketing toolkit to acquire customers and grow your business.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Social media templates</li>
                  <li>✓ Ad campaign strategies</li>
                  <li>✓ SEO & local listings</li>
                  <li>✓ Referral program setup</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Insurance & Legal</h3>
                <p className="text-gray-600 mb-4">
                  Partnerships with insurance providers and legal document templates.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Insurance broker connections</li>
                  <li>✓ Rental agreement templates</li>
                  <li>✓ Compliance checklists</li>
                  <li>✓ Legal consultation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">IoT & Technology</h3>
                <p className="text-gray-600 mb-4">
                  GPS trackers, smart locks, and IoT devices for all vehicles.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Real-time GPS tracking</li>
                  <li>✓ Remote lock/unlock</li>
                  <li>✓ Geofencing alerts</li>
                  <li>✓ Theft prevention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Training & Support</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training program and ongoing support for your team.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ 2-week onboarding program</li>
                  <li>✓ Video tutorials & guides</li>
                  <li>✓ 24/7 technical support</li>
                  <li>✓ Quarterly business reviews</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Business Model</h2>
            <p className="text-xl text-gray-600">Real numbers from existing fleet operators</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Revenue Model (10 Vehicles)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Avg. daily booking per vehicle</span>
                  <span className="font-semibold">8 hours</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Revenue per vehicle/day</span>
                  <span className="font-semibold">₹800</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Monthly revenue (25 days)</span>
                  <span className="font-semibold">₹20,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Total monthly revenue (10 vehicles)</span>
                  <span className="font-semibold text-green-600">₹2,00,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Operating costs (40%)</span>
                  <span className="font-semibold text-red-600">-₹80,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">ZippGo platform fee (10%)</span>
                  <span className="font-semibold text-orange-600">-₹20,000</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-xl font-bold text-gray-900">Net Monthly Profit</span>
                  <span className="text-3xl font-bold text-green-600">₹1,00,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Investment & ROI</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Vehicles (10 @ ₹80K each)</span>
                  <span className="font-semibold">₹8,00,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">ZippGo setup fee</span>
                  <span className="font-semibold">₹50,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Working capital</span>
                  <span className="font-semibold">₹1,50,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-xl font-bold text-gray-900">Total Investment</span>
                  <span className="text-2xl font-bold text-blue-600">₹10,00,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b mt-6">
                  <span className="text-gray-700">Monthly profit</span>
                  <span className="font-semibold text-green-600">₹1,00,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Annual profit</span>
                  <span className="font-semibold text-green-600">₹12,00,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-xl font-bold text-gray-900">ROI Timeline</span>
                  <span className="text-2xl font-bold text-orange-600">10 months</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-xl font-bold text-gray-900">Annual ROI</span>
                  <span className="text-3xl font-bold text-purple-600">120%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-100 to-purple-100 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Start small, scale fast: Begin with just 1-2 vehicles and reinvest profits to grow
            </p>
            <p className="text-gray-700">
              Most successful fleet operators reach 20+ vehicles within 24 months
            </p>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600">Launch your fleet business in 4 weeks</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery Call</h3>
              <p className="text-gray-600 text-sm">
                Schedule a call with our team. We'll understand your goals and explain the model.
              </p>
              <p className="text-sm text-orange-600 font-semibold mt-2">Week 1</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-green-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Setup & Training</h3>
              <p className="text-gray-600 text-sm">
                Complete onboarding program. App setup, operations training, marketing strategies.
              </p>
              <p className="text-sm text-orange-600 font-semibold mt-2">Week 2</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-purple-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Fleet Onboarding</h3>
              <p className="text-gray-600 text-sm">
                Acquire or onboard vehicles. Install IoT devices. Complete documentation.
              </p>
              <p className="text-sm text-orange-600 font-semibold mt-2">Week 3</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-orange-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Go Live</h3>
              <p className="text-gray-600 text-sm">
                Launch app, start marketing, acquire customers. Begin generating revenue!
              </p>
              <p className="text-sm text-orange-600 font-semibold mt-2">Week 4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real operators, real results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700 text-2xl">
                    VR
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">VeloRide Rentals</h3>
                    <p className="text-sm text-gray-600">Patna, Bihar</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">25</p>
                    <p className="text-sm text-gray-600">Vehicles</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">₹2.5L</p>
                    <p className="text-sm text-gray-600">Monthly Revenue</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">8 Mo</p>
                    <p className="text-sm text-gray-600">ROI Achieved</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Started with 3 bikes in Jan 2023. ZippGo's system and support helped us scale to 25 
                  vehicles in 10 months. Now generating ₹1 lakh+ profit monthly!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center font-bold text-green-700 text-2xl">
                    ZM
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Zoom Mobility</h3>
                    <p className="text-sm text-gray-600">Ranchi, Jharkhand</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">40</p>
                    <p className="text-sm text-gray-600">Vehicles</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">₹4L</p>
                    <p className="text-sm text-gray-600">Monthly Revenue</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">6 Mo</p>
                    <p className="text-sm text-gray-600">ROI Achieved</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Best business decision ever. ZippGo handles tech, we focus on operations. Planning to 
                  expand to 100 vehicles by next year. The support has been incredible!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600">Flexible options to match your investment level</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹50,000</span>
                  <span className="text-gray-600"> setup fee</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Up to 5 vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">White-label app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Basic operations training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">10% platform fee</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition border-2 border-orange-500">
              <CardContent className="p-8">
                <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4">Growth</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹1,00,000</span>
                  <span className="text-gray-600"> setup fee</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Up to 25 vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Custom branded app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Complete training program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">8% platform fee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Marketing toolkit</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-gray-600"> pricing</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Unlimited vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Fully customized platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">White-glove onboarding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Priority 24/7 support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">5% platform fee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Multi-city support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Fleet Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free consultation call to learn more about the opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Schedule Free Demo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Download Business Plan PDF
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}