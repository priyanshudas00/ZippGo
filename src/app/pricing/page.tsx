import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, X, Zap, Star, TrendingUp } from 'lucide-react';

export const metadata = {
  title: "ZippGo Pricing - Affordable Bike Rentals Starting at ₹99",
  description: "Transparent pricing for bike rentals. Hourly from ₹99, Daily ₹299, Monthly ₹2,999. No hidden charges. Save 60% compared to cabs. Best rates in India.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            No hidden charges. No complicated terms. Pay only for what you use. Save up to 60% compared to traditional cabs.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold">
            <Zap className="w-5 h-5" />
            Limited Time: Get 20% off on monthly plans with code ZIPP20
          </div>
        </div>
      </section>

      {/* Pricing Cards - Riders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing for Riders</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hourly Plan */}
            <Card className="hover:shadow-2xl transition border-2 hover:border-blue-500">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    PAY AS YOU GO
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Hourly Plan</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">₹99</span>
                    <span className="text-gray-600">/3 hours</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Then ₹25/hour</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Perfect for quick errands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No commitment required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Book instantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Within city limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Basic insurance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">24/7 support</span>
                  </li>
                </ul>

                <Link href="/user" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Daily Plan */}
            <Card className="hover:shadow-2xl transition border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-600 to-green-400 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  MOST POPULAR
                </span>
              </div>
              <CardContent className="p-8 pt-12">
                <div className="text-center mb-6">
                  <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    BEST VALUE
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Daily Plan</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">₹299</span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">24-hour access</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Full 24-hour access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unlimited km within city</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Flexible pickup/drop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Helmet included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comprehensive insurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>

                <Link href="/user" className="block">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Monthly Plan */}
            <Card className="hover:shadow-2xl transition border-2 hover:border-orange-500">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    MAXIMUM SAVINGS
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Monthly Plan</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">₹2,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold mt-2">Save ₹6,000/month!</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">30 days unlimited usage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Free maintenance & servicing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Free helmet & raincoat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Vehicle swap option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zero-deductible insurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                </ul>

                <Link href="/user" className="block">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Subscribe Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Note */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Why ZippGo is Cheaper</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <p className="text-3xl font-bold text-red-600 mb-2">₹9,000</p>
                <p className="text-gray-700">Monthly cab expense (₹300/day × 30)</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600 mb-2">₹6,000</p>
                <p className="text-gray-700">Vehicle ownership cost (EMI + fuel + parking)</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600 mb-2">₹2,999</p>
                <p className="text-gray-700">ZippGo monthly subscription ✓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate Plans</h2>
            <p className="text-xl text-gray-600">Special pricing for businesses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Small Business</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹2,499</span>
                  <span className="text-gray-600">/vehicle/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>5-10 vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>15% discount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Monthly invoicing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹1,999</span>
                  <span className="text-gray-600">/vehicle/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>10+ vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>30% discount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Custom billing cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Priority support (24/7 phone)</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Earnings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner Earnings</h2>
            <p className="text-xl text-gray-600">Turn your vehicle into passive income</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Revenue Calculator</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-700 mb-2">Average daily bookings: 8 hours</p>
                    <p className="text-gray-700 mb-2">Revenue per day: ₹600-800</p>
                    <p className="text-gray-700 mb-2">Monthly revenue (25 days): ₹15,000-20,000</p>
                    <p className="text-gray-700 mb-2">ZippGo commission (20%): -₹3,000-4,000</p>
                    <div className="border-t-2 border-green-600 pt-4 mt-4">
                      <p className="text-2xl font-bold text-green-600">
                        Your monthly income: ₹12,000-16,000
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold mb-3">What We Cover:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Full maintenance & servicing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Comprehensive insurance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Breakdown assistance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Marketing & customer acquisition</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold mb-6 text-center">ROI Analysis</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Vehicle cost</span>
                    <span className="font-semibold">₹80,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Monthly income (avg)</span>
                    <span className="font-semibold text-green-600">₹14,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Annual income</span>
                    <span className="font-semibold text-green-600">₹1,68,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">ROI timeline</span>
                    <span className="font-semibold">6 months</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-700 font-bold">ROI percentage</span>
                    <span className="text-2xl font-bold text-green-600">210%</span>
                  </div>
                </div>

                <Link href="/partner" className="block mt-6">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white">
                    Become a Partner
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing FAQs</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Are there any hidden charges?</h3>
                <p className="text-gray-700">
                  Absolutely not! What you see is what you pay. The only additional charges are for fuel 
                  (pay as you use) and late return fees (₹50/hour after grace period).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What's included in the price?</h3>
                <p className="text-gray-700">
                  All plans include: Vehicle rental, basic insurance, helmet, 24/7 support, and GPS tracking. 
                  Monthly plans also include free maintenance and servicing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Can I cancel my booking?</h3>
                <p className="text-gray-700">
                  Yes! Free cancellation up to 1 hour before pickup. Full refund guaranteed. No questions asked.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer student discounts?</h3>
                <p className="text-gray-700">
                  Yes! Students get 10% off on all plans with valid college ID. First-time users get additional 
                  15% off with code ZIPPFIRST.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Save Money?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 50,000+ smart riders who save ₹6,000+ every month with ZippGo
          </p>
          <Link href="/user">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Start Saving Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}