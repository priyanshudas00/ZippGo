import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone, Users, TrendingUp, Target, Calendar, Zap, Gift, Mail, Video, Share2 } from 'lucide-react';

export default function MarketingStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Digital Marketing Blueprint
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Marketing Strategy for{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ZippGo Mobility
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              360° digital marketing plan to acquire riders, onboard partners, and dominate the mobility market
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Executive Summary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    Market Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    India's bike rental market is expected to reach $2.8 billion by 2027. 
                    Urban mobility solutions show 40% year-over-year growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Megaphone className="h-5 w-5 text-pink-600" />
                    Strategy Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Multi-channel digital approach targeting millennials and Gen-Z users 
                    with emphasis on convenience, safety, and affordability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Target Audience Analysis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  Primary Riders
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p><strong>Age:</strong> 18-35 years</p>
                  <p><strong>Income:</strong> ₹20,000-50,000/month</p>
                  <p><strong>Locations:</strong> Tier 1 & 2 cities</p>
                  <p><strong>Behavior:</strong> Tech-savvy, price-conscious, time-sensitive</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  Business Users
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p><strong>Type:</strong> Small business owners</p>
                  <p><strong>Need:</strong> Last-mile delivery</p>
                  <p><strong>Volume:</strong> Regular bookings</p>
                  <p><strong>Priority:</strong> Reliability and cost-efficiency</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  Partners/Fleet Owners
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p><strong>Profile:</strong> Vehicle owners</p>
                  <p><strong>Goal:</strong> Additional income</p>
                  <p><strong>Motivation:</strong> Asset monetization</p>
                  <p><strong>Concern:</strong> Platform commission</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Marketing Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Digital Marketing Channels</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Social Media Marketing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-blue-600" />
                  Social Media Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Instagram & Facebook</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• User-generated content campaigns</li>
                      <li>• Local city-specific targeting</li>
                      <li>• Influencer partnerships</li>
                      <li>• Stories and Reels for engagement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LinkedIn</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• B2B partnerships</li>
                      <li>• Corporate tie-ups</li>
                      <li>• Fleet owner acquisition</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Marketing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Performance Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Google Ads</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Search campaigns for bike rental keywords</li>
                      <li>• Display remarketing</li>
                      <li>• YouTube video ads</li>
                      <li>• Local inventory ads</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Meta Ads</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Conversion optimization</li>
                      <li>• Lookalike audiences</li>
                      <li>• Dynamic product ads</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Marketing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-purple-600" />
                  Content Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Video Content</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• How-to rental guides</li>
                      <li>• City exploration content</li>
                      <li>• Safety tutorials</li>
                      <li>• Partner success stories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Blog & SEO</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Local SEO optimization</li>
                      <li>• Travel and mobility guides</li>
                      <li>• Comparison articles</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email & CRM */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-orange-600" />
                  Email & CRM Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Lifecycle Campaigns</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Welcome series for new users</li>
                      <li>• Booking reminders</li>
                      <li>• Post-ride feedback requests</li>
                      <li>• Win-back campaigns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Segmentation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Frequency-based targeting</li>
                      <li>• Location-based offers</li>
                      <li>• Seasonal campaigns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Growth Strategy Roadmap</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  Phase 1: Launch (Months 1-3)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Brand awareness campaigns in 3 pilot cities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Influencer partnerships and PR launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Performance marketing setup and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Partner acquisition program launch</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Phase 2: Scale (Months 4-8)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expand to 10 cities with localized campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Referral program and loyalty rewards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Corporate partnerships and B2B sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Advanced remarketing and automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-600" />
                  Phase 3: Optimize (Months 9-12)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>AI-powered personalization and recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Market leadership positioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>International expansion planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Platform ecosystem development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Budget Allocation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Marketing Budget Allocation</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Budget Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">Performance Marketing</span>
                      <span className="font-semibold">40% (₹4L)</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">Social Media & Content</span>
                      <span className="font-semibold">25% (₹2.5L)</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">Influencer Marketing</span>
                      <span className="font-semibold">15% (₹1.5L)</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">PR & Events</span>
                      <span className="font-semibold">10% (₹1L)</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-gray-600">Tools & Analytics</span>
                      <span className="font-semibold">10% (₹1L)</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-300 font-bold">
                      <span>Total Monthly Budget</span>
                      <span>₹10,00,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expected ROI Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-700 mb-1">300%</div>
                      <div className="text-sm text-green-600">Expected ROAS in 6 months</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700 mb-1">50K+</div>
                      <div className="text-sm text-blue-600">New users per month by Q2</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-700 mb-1">₹150</div>
                      <div className="text-sm text-purple-600">Target CAC (Customer Acquisition Cost)</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-700 mb-1">25%</div>
                      <div className="text-sm text-orange-600">Monthly active user growth rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs and Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Performance Indicators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">CAC</div>
                <div className="text-sm text-gray-600 mb-4">Customer Acquisition Cost</div>
                <div className="text-lg font-semibold">Target: ≤₹150</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">LTV</div>
                <div className="text-sm text-gray-600 mb-4">Customer Lifetime Value</div>
                <div className="text-lg font-semibold">Target: ₹2,500+</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">ROAS</div>
                <div className="text-sm text-gray-600 mb-4">Return on Ad Spend</div>
                <div className="text-lg font-semibold">Target: 3:1+</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">CTR</div>
                <div className="text-sm text-gray-600 mb-4">Click-Through Rate</div>
                <div className="text-lg font-semibold">Target: 3.5%+</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate the Mobility Market?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            This comprehensive marketing strategy will establish ZippGo as the leading bike rental platform in India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Implementation Support
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}