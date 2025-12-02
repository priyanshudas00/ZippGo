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

      {/* Customer Acquisition Funnel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Customer Acquisition Funnel</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                stage: 'Awareness',
                color: 'blue',
                tactics: ['Social media ads', 'SEO blog content', 'Influencer partnerships', 'Local events'],
                kpi: '100K impressions/month'
              },
              {
                stage: 'Interest',
                color: 'green',
                tactics: ['Landing pages', 'Free first ride coupons', 'Educational videos', 'Comparison charts'],
                kpi: '10K website visits/month'
              },
              {
                stage: 'Consideration',
                color: 'orange',
                tactics: ['Testimonials', 'Live chat support', 'ROI calculators', 'Email nurturing'],
                kpi: '3K sign-ups/month'
              },
              {
                stage: 'Conversion',
                color: 'purple',
                tactics: ['Instant booking', 'Limited offers', 'Referral rewards', 'Easy onboarding'],
                kpi: '1.5K bookings/month'
              }
            ].map((funnel, i) => (
              <Card key={i} className={`border-2 border-${funnel.color}-200 bg-${funnel.color}-50`}>
                <CardHeader>
                  <CardTitle className={`text-${funnel.color}-900`}>{funnel.stage}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {funnel.tactics.map((tactic, j) => (
                      <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className={`text-${funnel.color}-600`}>•</span>
                        {tactic}
                      </li>
                    ))}
                  </ul>
                  <div className={`bg-${funnel.color}-100 p-3 rounded-lg`}>
                    <p className="text-xs font-semibold text-gray-600">Target KPI</p>
                    <p className={`text-sm font-bold text-${funnel.color}-900`}>{funnel.kpi}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 30-Day Content Calendar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">30-Day Social Media Content Calendar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                week: 'Week 1: Brand Awareness',
                days: [
                  { day: 'Monday', content: 'Company intro video + mission statement', platform: 'All platforms' },
                  { day: 'Tuesday', content: 'Customer testimonial carousel', platform: 'Instagram/Facebook' },
                  { day: 'Wednesday', content: 'Behind-the-scenes: Vehicle inspection process', platform: 'Instagram Stories' },
                  { day: 'Thursday', content: 'Infographic: Bike rental vs cab costs', platform: 'LinkedIn/Twitter' },
                  { day: 'Friday', content: 'Weekend getaway destination reel', platform: 'Instagram Reels' },
                  { day: 'Saturday', content: 'User-generated content repost', platform: 'All platforms' },
                  { day: 'Sunday', content: 'Poll: Favorite bike type', platform: 'Instagram Stories' }
                ]
              },
              {
                week: 'Week 2: Product Features',
                days: [
                  { day: 'Monday', content: 'How to book in 60 seconds tutorial', platform: 'YouTube/Reels' },
                  { day: 'Tuesday', content: 'Pricing plans comparison', platform: 'All platforms' },
                  { day: 'Wednesday', content: 'Safety features highlight', platform: 'Facebook/Instagram' },
                  { day: 'Thursday', content: 'Partner success story interview', platform: 'LinkedIn' },
                  { day: 'Friday', content: 'Flash sale announcement', platform: 'All platforms' },
                  { day: 'Saturday', content: 'Weekend ride tips', platform: 'Instagram' },
                  { day: 'Sunday', content: 'Q&A session highlights', platform: 'Stories' }
                ]
              },
              {
                week: 'Week 3: Social Proof',
                days: [
                  { day: 'Monday', content: '50K riders milestone celebration', platform: 'All platforms' },
                  { day: 'Tuesday', content: 'Google reviews showcase', platform: 'Instagram' },
                  { day: 'Wednesday', content: 'Partner earnings reveal', platform: 'LinkedIn/Facebook' },
                  { day: 'Thursday', content: 'Before/after: Life with ZippGo', platform: 'Reels' },
                  { day: 'Friday', content: 'City expansion announcement', platform: 'All platforms' },
                  { day: 'Saturday', content: 'Community ride event photos', platform: 'Instagram' },
                  { day: 'Sunday', content: 'Thank you message to users', platform: 'All platforms' }
                ]
              },
              {
                week: 'Week 4: Engagement & Growth',
                days: [
                  { day: 'Monday', content: 'Contest: Tag a friend, win free ride', platform: 'Instagram' },
                  { day: 'Tuesday', content: 'Myth-busting: Bike rental FAQs', platform: 'YouTube' },
                  { day: 'Wednesday', content: 'Referral program launch', platform: 'All platforms' },
                  { day: 'Thursday', content: 'Influencer collaboration post', platform: 'Instagram' },
                  { day: 'Friday', content: 'Month-end offer announcement', platform: 'All platforms' },
                  { day: 'Saturday', content: 'User spotlight feature', platform: 'Instagram Stories' },
                  { day: 'Sunday', content: 'Next month teaser', platform: 'All platforms' }
                ]
              }
            ].map((week, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-xl text-green-900">{week.week}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {week.days.map((item, j) => (
                      <div key={j} className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-semibold text-green-900">{item.day}</span>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">{item.platform}</span>
                        </div>
                        <p className="text-sm text-gray-700">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Viral Marketing Hooks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">10 Viral Marketing Hooks</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                hook: '₹99 Challenge',
                description: 'Can you explore your entire city in ₹99? Show us your journey! Best video wins ₹10,000.',
                platform: 'Instagram Reels',
                virality: 'High'
              },
              {
                hook: 'Ditch Your Boss',
                description: 'Leave work early. Rent a bike. Life\'s too short for traffic. #DitchYourBoss',
                platform: 'Twitter/LinkedIn',
                virality: 'High'
              },
              {
                hook: 'Partner ROI Reveal',
                description: 'Our partner earned ₹1.2 lakhs last year from ONE bike. Here\'s the proof 👇',
                platform: 'LinkedIn',
                virality: 'Medium'
              },
              {
                hook: 'Bike vs Cab Calculator',
                description: 'You spent ₹48,000 on cabs last year. With ZippGo, it would be ₹12,000. Calculate yours.',
                platform: 'Interactive Web Tool',
                virality: 'High'
              },
              {
                hook: 'Flash Mob Ride',
                description: 'Surprise city flash mob with 100 ZippGo riders. Film it. Make it epic.',
                platform: 'YouTube/Instagram',
                virality: 'Very High'
              },
              {
                hook: 'College Student Hack',
                description: 'How I saved ₹50K in college using this one trick. Professors hate me.',
                platform: 'Instagram/YouTube',
                virality: 'High'
              },
              {
                hook: 'Referral Pyramid',
                description: 'Refer 5 friends. They refer 5. Everyone gets ₹500. Do the math 🤯',
                platform: 'WhatsApp/Instagram',
                virality: 'Very High'
              },
              {
                hook: 'Mystery Ride Challenge',
                description: 'Rent a bike. Close your eyes. Point at map. Go there. Document adventure.',
                platform: 'TikTok/Reels',
                virality: 'High'
              },
              {
                hook: 'Corporate Rebel Story',
                description: 'I quit my ₹15L job to become a ZippGo partner. Here\'s why I don\'t regret it.',
                platform: 'LinkedIn/Medium',
                virality: 'Medium'
              },
              {
                hook: 'Free Rides for Startups',
                description: 'Bootstrapped startup? Show us your pitch deck. Get 30 days free rides.',
                platform: 'Twitter/LinkedIn',
                virality: 'High'
              }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-pink-200 hover:shadow-xl transition">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-pink-900">{item.hook}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.virality === 'Very High' ? 'bg-red-100 text-red-700' :
                      item.virality === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.virality}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{item.platform}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Ads Strategy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Megaphone className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Paid Advertising Strategy</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Meta Ads (Facebook & Instagram)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Campaign 1: User Acquisition</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">Objective:</span> Conversions (App installs/Bookings)</li>
                      <li><span className="font-semibold">Budget:</span> ₹2,00,000/month</li>
                      <li><span className="font-semibold">Targeting:</span> 18-35, Urban, College students, Working professionals</li>
                      <li><span className="font-semibold">Creative:</span> Video testimonials, Before/after savings</li>
                      <li><span className="font-semibold">KPI:</span> CAC < ₹150, CTR > 2%</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Campaign 2: Partner Recruitment</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">Objective:</span> Lead generation</li>
                      <li><span className="font-semibold">Budget:</span> ₹1,00,000/month</li>
                      <li><span className="font-semibold">Targeting:</span> Vehicle owners, 25-45, Income > ₹5L</li>
                      <li><span className="font-semibold">Creative:</span> ROI calculator, Partner testimonials</li>
                      <li><span className="font-semibold">KPI:</span> CPL < ₹200, 15% form completion</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Campaign 3: Retargeting</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">Objective:</span> Conversions</li>
                      <li><span className="font-semibold">Budget:</span> ₹50,000/month</li>
                      <li><span className="font-semibold">Targeting:</span> Website visitors, cart abandoners</li>
                      <li><span className="font-semibold">Creative:</span> Special offers, FOMO messaging</li>
                      <li><span className="font-semibold">KPI:</span> ROAS > 4:1</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Google Ads Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Search Ads</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">Keywords:</span> "bike rental near me", "rent bike patna"</li>
                      <li><span className="font-semibold">Budget:</span> ₹1,50,000/month</li>
                      <li><span className="font-semibold">Strategy:</span> Target high-intent keywords</li>
                      <li><span className="font-semibold">Ad Copy:</span> "Book in 60 seconds • Starting ₹99 • Free Cancellation"</li>
                      <li><span className="font-semibold">KPI:</span> CPC < ₹30, Conversion rate > 8%</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">Display Network</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">Placements:</span> Travel blogs, automobile sites, college forums</li>
                      <li><span className="font-semibold">Budget:</span> ₹75,000/month</li>
                      <li><span className="font-semibold">Creative:</span> Banner ads, video ads</li>
                      <li><span className="font-semibold">Format:</span> Responsive display ads</li>
                      <li><span className="font-semibold">KPI:</span> CTR > 0.5%, View-through conversions</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-pink-900 mb-2">YouTube Ads</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">Format:</span> Skippable in-stream ads, Bumper ads</li>
                      <li><span className="font-semibold">Budget:</span> ₹1,00,000/month</li>
                      <li><span className="font-semibold">Targeting:</span> Travel, tech, student channels</li>
                      <li><span className="font-semibold">Creative:</span> 15-30 sec testimonials, offers</li>
                      <li><span className="font-semibold">KPI:</span> CPV < ₹5, VTR > 25%</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Paid Ads Budget Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { platform: 'Meta Ads', amount: '₹3,50,000', percentage: '40%', color: 'purple' },
                  { platform: 'Google Search', amount: '₹1,50,000', percentage: '17%', color: 'orange' },
                  { platform: 'YouTube', amount: '₹1,00,000', percentage: '11%', color: 'pink' },
                  { platform: 'Google Display', amount: '₹75,000', percentage: '9%', color: 'indigo' },
                  { platform: 'Others', amount: '₹2,00,000', percentage: '23%', color: 'green' }
                ].map((item, i) => (
                  <div key={i} className={`p-6 bg-${item.color}-50 rounded-lg border-2 border-${item.color}-200 text-center`}>
                    <p className="text-sm text-gray-600 mb-1">{item.platform}</p>
                    <p className={`text-2xl font-bold text-${item.color}-900 mb-1`}>{item.amount}</p>
                    <p className={`text-sm font-semibold text-${item.color}-700`}>{item.percentage}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
                <p className="text-sm text-gray-600">Total Monthly Ad Spend</p>
                <p className="text-3xl font-bold text-gray-900">₹8,75,000</p>
                <p className="text-sm text-gray-600 mt-1">Target: 5,000 new users & 200 partners/month</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Influencer Strategy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Influencer Marketing Strategy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: 'Mega Influencers',
                followers: '500K - 5M',
                count: '2-3 per quarter',
                budget: '₹2-5L per campaign',
                type: ['Travel vloggers', 'Tech reviewers', 'Lifestyle creators'],
                deliverables: ['Dedicated video', 'Instagram Reels', 'YouTube integration']
              },
              {
                tier: 'Macro Influencers',
                followers: '100K - 500K',
                count: '5-8 per month',
                budget: '₹50K-1.5L per campaign',
                type: ['City-specific influencers', 'College communities', 'Auto enthusiasts'],
                deliverables: ['Story series', 'Reels collaboration', 'Giveaway hosting']
              },
              {
                tier: 'Micro Influencers',
                followers: '10K - 100K',
                count: '20-30 per month',
                budget: '₹10K-40K per campaign',
                type: ['Local bloggers', 'Student ambassadors', 'Niche communities'],
                deliverables: ['Authentic reviews', 'Stories', 'User-generated content']
              }
            ].map((tier, i) => (
              <Card key={i} className="border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-900">{tier.tier}</CardTitle>
                  <p className="text-sm text-gray-600">{tier.followers} followers</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Volume</p>
                      <p className="text-sm text-gray-600">{tier.count}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Investment</p>
                      <p className="text-sm text-gray-600">{tier.budget}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Categories</p>
                      <div className="space-y-1">
                        {tier.type.map((t, j) => (
                          <span key={j} className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Deliverables</p>
                      <ul className="space-y-1">
                        {tier.deliverables.map((d, j) => (
                          <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-yellow-600">•</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Gift className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Referral Program Structure</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-indigo-200">
              <CardHeader>
                <CardTitle className="text-indigo-900">User Referral Program</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-3">How It Works</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="bg-indigo-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                        <p className="text-sm text-gray-700"><span className="font-semibold">Referrer gets:</span> ₹100 credit after friend completes first ride</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-indigo-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                        <p className="text-sm text-gray-700"><span className="font-semibold">Friend gets:</span> ₹100 off on first ride</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-indigo-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                        <p className="text-sm text-gray-700"><span className="font-semibold">Unlimited:</span> Refer as many friends as you want</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Bonus Tiers</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center justify-between">
                        <span>5 successful referrals</span>
                        <span className="font-bold text-green-700">+ ₹250 bonus</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>10 successful referrals</span>
                        <span className="font-bold text-green-700">+ ₹500 bonus</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>25 successful referrals</span>
                        <span className="font-bold text-green-700">+ ₹1,500 bonus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900">Partner Referral Program</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-3">How It Works</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="bg-purple-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                        <p className="text-sm text-gray-700"><span className="font-semibold">Referrer gets:</span> ₹1,000 when referred partner lists first vehicle</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-purple-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                        <p className="text-sm text-gray-700"><span className="font-semibold">New partner gets:</span> First month commission waived (100% earnings)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-purple-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                        <p className="text-sm text-gray-700"><span className="font-semibold">Recurring:</span> ₹200/month ongoing for active partners</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">VIP Partner Program</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center justify-between">
                        <span>3 partner referrals</span>
                        <span className="font-bold text-orange-700">VIP status</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>5 partner referrals</span>
                        <span className="font-bold text-orange-700">Priority support</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>10 partner referrals</span>
                        <span className="font-bold text-orange-700">₹10K cash bonus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Marketing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Email Marketing Sequences</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                sequence: 'New User Onboarding',
                emails: [
                  { day: 'Day 0', subject: 'Welcome to ZippGo! Here\'s ₹100 to get started', cta: 'Claim your welcome offer' },
                  { day: 'Day 2', subject: 'How to book your first ride in 60 seconds', cta: 'Watch tutorial video' },
                  { day: 'Day 5', subject: 'Meet our happy riders (and see their savings)', cta: 'Read success stories' },
                  { day: 'Day 7', subject: 'Last chance: Your ₹100 credit expires tomorrow!', cta: 'Book now' }
                ]
              },
              {
                sequence: 'Cart Abandonment',
                emails: [
                  { day: '1 hour', subject: 'Forgot something? Your bike is waiting...', cta: 'Complete booking' },
                  { day: '24 hours', subject: 'Save 15% if you book in the next 2 hours', cta: 'Claim discount' },
                  { day: '48 hours', subject: 'This bike won\'t last long. Book before it\'s gone!', cta: 'Reserve now' }
                ]
              },
              {
                sequence: 'Re-engagement (Inactive Users)',
                emails: [
                  { day: 'Day 30', subject: 'We miss you! Here\'s ₹50 to come back', cta: 'Redeem offer' },
                  { day: 'Day 45', subject: 'New bikes added in your area. Check them out!', cta: 'Browse vehicles' },
                  { day: 'Day 60', subject: 'Special offer: 50% off your next ride', cta: 'Book with discount' }
                ]
              },
              {
                sequence: 'Partner Nurturing',
                emails: [
                  { day: 'Day 0', subject: 'Welcome partner! Next steps to list your vehicle', cta: 'Start setup' },
                  { day: 'Day 3', subject: 'How Ram earned ₹32K last month (case study)', cta: 'Read full story' },
                  { day: 'Day 7', subject: 'Your vehicle inspection is scheduled', cta: 'Confirm appointment' },
                  { day: 'Day 14', subject: 'Your first payout is on the way!', cta: 'View earnings dashboard' }
                ]
              }
            ].map((seq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-blue-900">{seq.sequence}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {seq.emails.map((email, j) => (
                      <div key={j} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded">{email.day}</span>
                        </div>
                        <p className="font-semibold text-gray-900 text-sm mb-2">{email.subject}</p>
                        <p className="text-xs text-gray-600">CTA: <span className="text-blue-600">{email.cta}</span></p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Campaign */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-100 p-3 rounded-lg">
              <Video className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Launch Campaign Plan: "ZippGo is Live"</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: 'Pre-Launch (Week -2 to 0)',
                color: 'orange',
                activities: [
                  'Teaser campaign on social media',
                  'Influencer seeding (early access)',
                  'Email list building with landing page',
                  'Press release distribution',
                  'Partner pre-registration drive',
                  'Beta user testimonials collection'
                ]
              },
              {
                phase: 'Launch Week (Week 0)',
                color: 'red',
                activities: [
                  'Live launch event (Facebook/YouTube)',
                  'Mega offer: First 1000 users get ₹500 credit',
                  'PR push to local news channels',
                  'Influencer launch day posts',
                  'Social media blitz (every 2 hours)',
                  'Flash sales and giveaways'
                ]
              },
              {
                phase: 'Post-Launch (Week 1-4)',
                color: 'green',
                activities: [
                  'User-generated content campaign',
                  'Success story highlights',
                  'Referral program launch',
                  'City expansion announcements',
                  'Partnership announcements',
                  'Monthly performance report'
                ]
              }
            ].map((phase, i) => (
              <Card key={i} className={`border-2 border-${phase.color}-200 bg-${phase.color}-50`}>
                <CardHeader>
                  <CardTitle className={`text-${phase.color}-900`}>{phase.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className={`text-${phase.color}-600 font-bold mt-1`}>✓</span>
                        <span className="text-sm text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}