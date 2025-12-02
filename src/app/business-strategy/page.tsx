import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, FileText, Shield, Users, Bike, BarChart, AlertTriangle, CheckCircle, Target } from 'lucide-react';

export default function BusinessStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              💼 Business Strategy & Operations
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Business Blueprint for{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ZippGo Mobility
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive business operations, revenue models, and growth strategy for sustainable mobility business
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Revenue Model & Streams</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Primary Revenue Streams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      stream: 'Rental Revenue (Users)',
                      breakdown: 'Hourly: ₹99-199 • Daily: ₹299-599 • Monthly: ₹4,999-8,999',
                      share: '70%',
                      projection: '₹2.1 Cr/year'
                    },
                    {
                      stream: 'Commission from Partners',
                      breakdown: '15-20% commission on each booking',
                      share: '20%',
                      projection: '₹60 L/year'
                    },
                    {
                      stream: 'Security Deposits',
                      breakdown: '₹500-2,000 refundable deposit (interest income)',
                      share: '5%',
                      projection: '₹15 L/year'
                    },
                    {
                      stream: 'Late Fees & Penalties',
                      breakdown: '₹50/hour late return, damage charges',
                      share: '3%',
                      projection: '₹9 L/year'
                    },
                    {
                      stream: 'Partnerships & Advertising',
                      breakdown: 'Brand partnerships, in-app advertising',
                      share: '2%',
                      projection: '₹6 L/year'
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold text-green-900">{item.stream}</h4>
                          <p className="text-sm text-gray-600 mt-1">{item.breakdown}</p>
                        </div>
                        <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {item.share}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-green-700">Year 1 Target: {item.projection}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white">
                  <p className="text-sm opacity-90">Total Projected Revenue (Year 1)</p>
                  <p className="text-3xl font-bold">₹3 Crores</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Commission Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Partner Commission Tiers</h4>
                    <div className="space-y-3">
                      {[
                        { tier: 'Standard Partners', vehicles: '1-2 vehicles', commission: '15%', earnings: '₹11,900/vehicle' },
                        { tier: 'Silver Partners', vehicles: '3-5 vehicles', commission: '17%', earnings: '₹11,620/vehicle' },
                        { tier: 'Gold Partners', vehicles: '6-10 vehicles', commission: '18%', earnings: '₹11,480/vehicle' },
                        { tier: 'Platinum Partners', vehicles: '10+ vehicles', commission: '20%', earnings: '₹11,200/vehicle' }
                      ].map((tier, i) => (
                        <div key={i} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-blue-900">{tier.tier}</span>
                            <span className="text-sm text-blue-600 font-semibold">{tier.commission} commission</span>
                          </div>
                          <p className="text-xs text-gray-600">{tier.vehicles}</p>
                          <p className="text-sm font-semibold text-green-700 mt-1">Partner earns: {tier.earnings}/month</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Pricing Strategy</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-700">Peak Hours (9 AM - 6 PM)</span>
                        <span className="font-bold text-gray-900">Base price + 20%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-700">Weekend Surge</span>
                        <span className="font-bold text-gray-900">Base price + 30%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-700">Holiday Surge</span>
                        <span className="font-bold text-gray-900">Base price + 50%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-700">Long-term Discount (30+ days)</span>
                        <span className="font-bold text-green-700">Base price - 25%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partner ROI Model */}
          <Card>
            <CardHeader>
              <CardTitle>Partner ROI Model (Per Vehicle)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Monthly Income Breakdown</h4>
                  <div className="space-y-3">
                    {[
                      { item: 'Average daily rental revenue', amount: '₹450', calc: '(8 hours @ ₹150/day avg)' },
                      { item: 'Monthly revenue (25 days booked)', amount: '₹11,250', calc: '(₹450 × 25)' },
                      { item: 'ZippGo commission (15%)', amount: '- ₹1,688', calc: '', negative: true },
                      { item: 'Net partner earnings', amount: '₹9,562', calc: '', highlight: true },
                      { item: 'Savings (maintenance/insurance)', amount: '+ ₹2,500', calc: 'Covered by ZippGo' },
                      { item: 'Total monthly benefit', amount: '₹12,062', calc: '', total: true }
                    ].map((item, i) => (
                      <div key={i} className={`flex justify-between p-3 rounded-lg ${
                        item.total ? 'bg-green-100 border-2 border-green-400' :
                        item.highlight ? 'bg-blue-50 border border-blue-200' :
                        item.negative ? 'bg-red-50' : 'bg-gray-50'
                      }`}>
                        <div>
                          <p className={`font-semibold ${
                            item.total ? 'text-green-900' :
                            item.highlight ? 'text-blue-900' :
                            'text-gray-900'
                          }`}>{item.item}</p>
                          {item.calc && <p className="text-xs text-gray-600 mt-1">{item.calc}</p>}
                        </div>
                        <span className={`font-bold ${
                          item.total ? 'text-green-900 text-lg' :
                          item.highlight ? 'text-blue-900' :
                          item.negative ? 'text-red-700' :
                          'text-gray-900'
                        }`}>{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Annual ROI Calculation</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Average bike purchase price</span>
                      <span className="font-bold text-gray-900">₹80,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Annual gross income</span>
                      <span className="font-bold text-gray-900">₹1,44,744</span>
                    </div>
                    <div className="flex justify-between p-3 bg-blue-100 rounded-lg border-2 border-blue-400">
                      <span className="font-semibold text-blue-900">Annual ROI</span>
                      <span className="font-bold text-blue-900 text-xl">181%</span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-100 rounded-lg border-2 border-green-400">
                      <span className="font-semibold text-green-900">Payback Period</span>
                      <span className="font-bold text-green-900 text-xl">6.6 months</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-3">5-Year Projection (Per Vehicle)</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-700">Year 1 earnings:</span>
                        <span className="font-bold text-gray-900">₹1,44,744</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-700">5-year total earnings:</span>
                        <span className="font-bold text-purple-900">₹7,23,720</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-700">Less: Initial investment:</span>
                        <span className="font-bold text-red-700">- ₹80,000</span>
                      </li>
                      <li className="flex justify-between pt-2 border-t-2 border-purple-300">
                        <span className="font-bold text-purple-900">Net 5-year profit:</span>
                        <span className="font-bold text-green-700 text-lg">₹6,43,720</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Sheet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-100 p-3 rounded-lg">
              <BarChart className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Cost Sheet (CAPEX & OPEX)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Capital Expenditure (CAPEX)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { item: 'Vehicle fleet (50 bikes)', amount: '₹40,00,000', oneTime: true },
                    { item: 'GPS tracking devices', amount: '₹2,50,000', oneTime: true },
                    { item: 'Smart lock systems', amount: '₹1,50,000', oneTime: true },
                    { item: 'Office setup & equipment', amount: '₹5,00,000', oneTime: true },
                    { item: 'Technology infrastructure', amount: '₹8,00,000', oneTime: true },
                    { item: 'Initial marketing & branding', amount: '₹10,00,000', oneTime: true },
                    { item: 'Working capital reserve', amount: '₹8,00,000', oneTime: true }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">{item.item}</p>
                        {item.oneTime && <span className="text-xs text-orange-600">One-time investment</span>}
                      </div>
                      <span className="font-bold text-orange-900">{item.amount}</span>
                    </div>
                  ))}
                  <div className="p-4 bg-orange-600 text-white rounded-lg mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total CAPEX</span>
                      <span className="text-2xl font-bold">₹75,00,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operating Expenditure (OPEX) - Monthly</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { item: 'Partner payouts (commission)', amount: '₹4,50,000', percent: '40%' },
                    { item: 'Maintenance & servicing', amount: '₹1,50,000', percent: '13%' },
                    { item: 'Insurance premium', amount: '₹75,000', percent: '7%' },
                    { item: 'Marketing & advertising', amount: '₹1,25,000', percent: '11%' },
                    { item: 'Technology & hosting', amount: '₹50,000', percent: '4%' },
                    { item: 'Staff salaries (10 employees)', amount: '₹5,00,000', percent: '44%' },
                    { item: 'Office rent & utilities', amount: '₹1,00,000', percent: '9%' },
                    { item: 'Customer support', amount: '₹50,000', percent: '4%' },
                    { item: 'Miscellaneous & contingency', amount: '₹1,00,000', percent: '9%' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{item.item}</p>
                        <span className="text-xs text-blue-600">{item.percent} of revenue</span>
                      </div>
                      <span className="font-bold text-blue-900">{item.amount}</span>
                    </div>
                  ))}
                  <div className="p-4 bg-blue-600 text-white rounded-lg mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Total Monthly OPEX</span>
                      <span className="text-2xl font-bold">₹16,00,000</span>
                    </div>
                    <div className="flex justify-between items-center text-sm opacity-90">
                      <span>Annual OPEX</span>
                      <span className="font-bold">₹1,92,00,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Break-even Analysis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Break-Even Analysis & Growth Plan</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Break-Even Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-3">Key Metrics</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Total initial investment (CAPEX)</span>
                        <span className="font-bold text-gray-900">₹75,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monthly OPEX</span>
                        <span className="font-bold text-gray-900">₹16,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Expected monthly revenue</span>
                        <span className="font-bold text-green-700">₹25,00,000</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="text-gray-700">Monthly profit (before CAPEX recovery)</span>
                        <span className="font-bold text-green-700">₹9,00,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg">
                    <h4 className="font-semibold mb-2">Break-Even Timeline</h4>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">8.3 months</p>
                      <p className="text-sm opacity-90">₹75L CAPEX ÷ ₹9L monthly profit</p>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <p className="text-sm text-gray-600 mb-1">After break-even (Month 9+)</p>
                    <p className="text-xl font-bold text-green-900">₹9,00,000 monthly profit</p>
                    <p className="text-sm text-green-700">₹1,08,00,000 annual profit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>1-Year Growth Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      quarter: 'Q1 (Month 1-3): Foundation',
                      goals: ['Launch in Patna with 50 bikes', 'Acquire 1,000 users', 'Onboard 30 partners', 'Revenue target: ₹15L/month'],
                      color: 'blue'
                    },
                    {
                      quarter: 'Q2 (Month 4-6): Scaling',
                      goals: ['Expand to 100 bikes', 'Acquire 3,000 users', 'Onboard 50 partners', 'Revenue target: ₹25L/month'],
                      color: 'green'
                    },
                    {
                      quarter: 'Q3 (Month 7-9): Expansion',
                      goals: ['Launch in Bengaluru', 'Total: 200 bikes', 'Acquire 7,000 users', 'Revenue target: ₹45L/month'],
                      color: 'orange'
                    },
                    {
                      quarter: 'Q4 (Month 10-12): Profitability',
                      goals: ['Launch in Delhi NCR', 'Total: 350 bikes', 'Acquire 12,000 users', 'Revenue target: ₹75L/month'],
                      color: 'purple'
                    }
                  ].map((q, i) => (
                    <div key={i} className={`p-4 bg-${q.color}-50 rounded-lg border-2 border-${q.color}-200`}>
                      <h4 className={`font-bold text-${q.color}-900 mb-3`}>{q.quarter}</h4>
                      <ul className="space-y-1">
                        {q.goals.map((goal, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className={`w-4 h-4 text-${q.color}-600 flex-shrink-0 mt-0.5`} />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Year 1 Summary */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-white">Year 1 Financial Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm opacity-90 mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold">₹4.8 Cr</p>
                </div>
                <div>
                  <p className="text-sm opacity-90 mb-1">Total OPEX</p>
                  <p className="text-3xl font-bold">₹1.92 Cr</p>
                </div>
                <div>
                  <p className="text-sm opacity-90 mb-1">CAPEX</p>
                  <p className="text-3xl font-bold">₹75 L</p>
                </div>
                <div>
                  <p className="text-sm opacity-90 mb-1">Net Profit (Year 1)</p>
                  <p className="text-3xl font-bold text-green-300">₹2.13 Cr</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SOPs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Standard Operating Procedures</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>SOP: Onboarding Riders (Users)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { step: 1, title: 'Registration', desc: 'User signs up with phone/email, verifies OTP' },
                    { step: 2, title: 'KYC Verification', desc: 'Upload Aadhaar, driving license, selfie verification' },
                    { step: 3, title: 'Document Approval', desc: 'Team verifies documents within 2 hours' },
                    { step: 4, title: 'Payment Setup', desc: 'Add payment method, security deposit (₹500-2000)' },
                    { step: 5, title: 'Onboarding Tutorial', desc: 'Watch 2-min video on how to book and use' },
                    { step: 6, title: 'Welcome Bonus', desc: 'Get ₹100 credit for first ride' },
                    { step: 7, title: 'First Booking', desc: 'Browse vehicles, select duration, confirm booking' },
                    { step: 8, title: 'Vehicle Pickup', desc: 'Unlock with app, inspect vehicle, start ride' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                      <span className="bg-indigo-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SOP: Onboarding Vehicle Owners (Partners)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { step: 1, title: 'Initial Inquiry', desc: 'Partner fills interest form on website' },
                    { step: 2, title: 'Screening Call', desc: 'Team calls within 24 hrs to discuss details' },
                    { step: 3, title: 'Document Submission', desc: 'Upload RC, insurance, PAN, Aadhaar' },
                    { step: 4, title: 'Vehicle Inspection', desc: 'Free 25-point inspection at partner location' },
                    { step: 5, title: 'Agreement Signing', desc: 'Digital contract with revenue split terms' },
                    { step: 6, title: 'GPS Installation', desc: 'Install GPS tracker and smart lock (free)' },
                    { step: 7, title: 'Photography', desc: 'Professional photos for app listing' },
                    { step: 8, title: 'Go Live', desc: 'Vehicle listed on app, partner dashboard access' },
                    { step: 9, title: 'First Payout', desc: 'Earnings deposited by 1st of every month' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="bg-green-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vehicle Acquisition & Legal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Bike className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle>Vehicle Acquisition Strategy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Acquisition Channels</h4>
                    <div className="space-y-2">
                      {[
                        { channel: 'Partner-Owned (Asset-Light)', share: '60%', desc: 'Commission-based model' },
                        { channel: 'Company-Owned Fleet', share: '30%', desc: 'Full control, higher margins' },
                        { channel: 'Leased Vehicles', share: '10%', desc: 'Flexible scaling option' }
                      ].map((item, i) => (
                        <div key={i} className="p-3 bg-blue-50 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-blue-900">{item.channel}</span>
                            <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded">{item.share}</span>
                          </div>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Preferred Vehicle Mix</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-700">Budget bikes (Honda Shine, Hero Splendor)</span>
                        <span className="font-bold">40%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-700">Premium bikes (Royal Enfield, KTM)</span>
                        <span className="font-bold">30%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-700">Scooters (Activa, Jupiter)</span>
                        <span className="font-bold">20%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-700">Electric bikes (Ola, Ather)</span>
                        <span className="font-bold">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <CardTitle>Legal Compliance Checklist</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { category: 'Business Registration', items: ['Private Limited Company registration', 'GST registration', 'Trade license', 'Shop establishment license'] },
                    { category: 'Insurance & Liability', items: ['Comprehensive vehicle insurance', 'Public liability insurance', 'Cyber insurance', 'Directors & Officers insurance'] },
                    { category: 'Legal Agreements', items: ['Partner agreement template', 'User terms & conditions', 'Privacy policy (GDPR compliant)', 'Service Level Agreement'] },
                    { category: 'Compliance', items: ['Motor Vehicles Act compliance', 'Consumer Protection Act adherence', 'RBI payment gateway guidelines', 'Data Protection Act compliance'] }
                  ].map((section, i) => (
                    <div key={i} className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">{section.category}</h4>
                      <ul className="space-y-1">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Risk Management & Fraud Prevention</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Key Risks & Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      risk: 'Vehicle Theft',
                      severity: 'High',
                      mitigation: ['GPS tracking on all vehicles', 'Comprehensive insurance', 'Geofencing alerts', 'Police NOC for high-value bikes'],
                      color: 'red'
                    },
                    {
                      risk: 'Payment Fraud',
                      severity: 'Medium',
                      mitigation: ['Security deposit mandatory', 'PAN/Aadhaar verification', 'Payment gateway fraud detection', 'Credit limit for new users'],
                      color: 'orange'
                    },
                    {
                      risk: 'Vehicle Damage',
                      severity: 'Medium',
                      mitigation: ['Pre-ride photo documentation', 'Damage waiver insurance', 'User liability clause', '25-point inspection checklist'],
                      color: 'yellow'
                    },
                    {
                      risk: 'Competition',
                      severity: 'Medium',
                      mitigation: ['Differentiated pricing', 'Superior customer service', 'Exclusive partnerships', 'Loyalty programs'],
                      color: 'blue'
                    }
                  ].map((item, i) => (
                    <div key={i} className={`p-4 bg-${item.color}-50 rounded-lg border-2 border-${item.color}-200`}>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-gray-900">{item.risk}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${item.color}-600 text-white`}>
                          {item.severity}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Mitigation Strategies:</p>
                        <ul className="space-y-1">
                          {item.mitigation.map((m, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className={`w-4 h-4 text-${item.color}-600 flex-shrink-0 mt-0.5`} />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fraud Prevention System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">User Verification (3-Layer)</h4>
                    <div className="space-y-2">
                      {[
                        { layer: 'Layer 1: Identity Verification', checks: ['Phone OTP', 'Email verification', 'Aadhaar verification'] },
                        { layer: 'Layer 2: Document Verification', checks: ['Driving license validation', 'License expiry check', 'Background check (optional)'] },
                        { layer: 'Layer 3: Behavioral Analysis', checks: ['Booking patterns', 'Payment history', 'Return punctuality', 'Damage history'] }
                      ].map((layer, i) => (
                        <div key={i} className="p-3 bg-purple-50 rounded-lg">
                          <p className="font-semibold text-purple-900 mb-2">{layer.layer}</p>
                          <ul className="space-y-1">
                            {layer.checks.map((check, j) => (
                              <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                                {check}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Real-Time Monitoring</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-gray-700">GPS tracking (live location)</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-gray-700">Geofencing alerts</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-gray-700">Unusual pattern detection</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-gray-700">Emergency SOS button</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">Incident Response Time</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Theft alert:</span>
                        <span className="font-bold text-indigo-900">Immediate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Breakdown:</span>
                        <span className="font-bold text-indigo-900">15 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Accident:</span>
                        <span className="font-bold text-indigo-900">10 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Customer support:</span>
                        <span className="font-bold text-indigo-900">5 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}