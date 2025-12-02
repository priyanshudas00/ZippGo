import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, TrendingUp, MapPin, FileText, Link as LinkIcon, BarChart, Globe, Target } from 'lucide-react';

export default function SEOStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              📊 SEO Strategy Blueprint
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete SEO Strategy for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ZippGo Mobility
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive search engine optimization strategy to dominate local and national mobility searches
            </p>
          </div>
        </div>
      </section>

      {/* Primary Keywords Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Primary & Secondary Keywords</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Primary Keywords (High Volume)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'bike rental near me',
                    'scooty rental',
                    'two wheeler rental',
                    'bike on rent',
                    'scooter rental service',
                    'motorcycle rental',
                    'rent a bike',
                    'bike sharing service'
                  ].map((keyword, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-900">{keyword}</span>
                      <span className="text-sm text-blue-600">12K+ searches/mo</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Secondary Keywords (Medium Volume)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'hourly bike rental',
                    'daily bike rental',
                    'monthly bike subscription',
                    'electric scooter rental',
                    'self drive bike rental',
                    'bike rental without deposit',
                    'bike rental for students',
                    'affordable bike rental'
                  ].map((keyword, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium text-gray-900">{keyword}</span>
                      <span className="text-sm text-purple-600">5K+ searches/mo</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Local SEO Keywords */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Local SEO Keywords (City-Specific)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { city: 'Patna', keywords: ['bike rental in Patna', 'Patna bike on rent', 'two wheeler rental Patna'] },
                  { city: 'Bengaluru', keywords: ['bike rental in Bangalore', 'Bangalore bike rental', 'scooty rental Bangalore'] },
                  { city: 'Delhi', keywords: ['bike rental in Delhi', 'Delhi bike on rent', 'NCR bike rental'] },
                  { city: 'Mumbai', keywords: ['bike rental in Mumbai', 'Mumbai bike rental', 'two wheeler rental Mumbai'] },
                  { city: 'Pune', keywords: ['bike rental in Pune', 'Pune bike on rent', 'Pune two wheeler rental'] },
                  { city: 'Hyderabad', keywords: ['bike rental in Hyderabad', 'Hyderabad bike rental', 'bike on rent Hyderabad'] }
                ].map((location, i) => (
                  <div key={i} className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
                    <h4 className="font-bold text-green-900 mb-3">{location.city}</h4>
                    <ul className="space-y-2">
                      {location.keywords.map((kw, j) => (
                        <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{kw}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meta Tags Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Meta Titles & Descriptions for All Pages</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                page: 'Home Page',
                title: 'ZippGo - Affordable Bike Rental Starting at ₹99 | Self-Drive Bikes & Scooters',
                description: 'Rent bikes & scooters starting at ₹99/day. Self-drive, hourly/daily/monthly rentals across India. 50K+ happy riders. Book now!'
              },
              {
                page: 'Services Page',
                title: 'Bike Rental Services - Hourly, Daily & Monthly Plans | ZippGo',
                description: 'Choose from flexible bike rental plans - hourly starting ₹99, daily ₹299, monthly ₹4,999. Electric bikes, scooters, motorcycles available.'
              },
              {
                page: 'Partner Program Page',
                title: 'Earn ₹20,000/Month - List Your Bike on ZippGo | Partner Program',
                description: 'Turn your idle bike into passive income. Guaranteed payouts, free insurance, zero hassle. Join 500+ partners earning ₹14K-25K/month.'
              },
              {
                page: 'Pricing Page',
                title: 'Bike Rental Prices - Starting ₹99 | Transparent Pricing | ZippGo',
                description: 'Simple, transparent bike rental pricing. Hourly ₹99, Daily ₹299, Monthly ₹4,999. No hidden charges. Compare plans and save up to 60%.'
              },
              {
                page: 'About Us Page',
                title: 'About ZippGo - India\'s Fastest Growing Bike Rental Platform',
                description: 'Learn about ZippGo\'s mission to revolutionize urban mobility. 50K+ riders, 500+ vehicles, operating in 10+ cities across India.'
              },
              {
                page: 'Contact Page',
                title: 'Contact ZippGo - 24/7 Customer Support | Get Help',
                description: 'Need help? Contact ZippGo support team 24/7. Phone, email, live chat available. Average response time: 5 minutes.'
              },
              {
                page: 'Blog Page',
                title: 'ZippGo Blog - Bike Rental Tips, Guides & News',
                description: 'Read expert tips on bike rentals, travel guides, safety tips, and mobility trends. Updated weekly with fresh content.'
              }
            ].map((page, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{page.page}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-blue-600">Meta Title ({page.title.length} chars)</span>
                      <p className="text-gray-900 mt-1 font-medium">{page.title}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-600">Meta Description ({page.description.length} chars)</span>
                      <p className="text-gray-700 mt-1">{page.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical SEO Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-3 rounded-lg">
              <BarChart className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Technical SEO Checklist</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>On-Page SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Optimize page load speed (target: <2 seconds)',
                    'Mobile-responsive design (Google Mobile-First Index)',
                    'Clean URL structure (/bike-rental-patna)',
                    'Proper heading hierarchy (H1, H2, H3)',
                    'Image optimization with alt text',
                    'Internal linking strategy (3-5 links per page)',
                    'Schema markup implementation',
                    'XML sitemap generation and submission',
                    'Robots.txt optimization',
                    'Canonical tags to avoid duplicate content'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Target keyword density: 1-2%',
                    'LSI keywords integration',
                    'Content length: minimum 800 words per page',
                    'Regular blog posts (2-3 per week)',
                    'FAQ sections on all service pages',
                    'Customer testimonials and reviews',
                    'Location-specific landing pages',
                    'Video content optimization',
                    'User-generated content integration',
                    'Regular content updates and freshness'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local SEO Strategy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Local SEO Strategy</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Google Business Profile Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Create GBP for each city location',
                    'Complete business information (name, address, phone)',
                    'Select primary category: Vehicle Rental Agency',
                    'Add secondary categories: Scooter Rental, Motorcycle Rental',
                    'Upload high-quality photos (minimum 10 per location)',
                    'Post weekly updates and offers',
                    'Respond to all reviews within 24 hours',
                    'Add business attributes (online booking, instant confirmation)',
                    'Create Google Posts for promotions',
                    'Use Q&A section proactively'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold mt-1">→</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Local Citations & Directories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Top Priority Directories:</h4>
                    <ul className="space-y-2">
                      {[
                        'Justdial',
                        'Sulekha',
                        'IndiaMART',
                        'Trade India',
                        'Yellow Pages India',
                        'Asklaila',
                        'GetIt',
                        'NearMe.co.in'
                      ].map((dir, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          <span className="text-gray-700">{dir}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-orange-900 mb-2">NAP Consistency</p>
                    <p className="text-sm text-gray-700">
                      Ensure Name, Address, Phone number are identical across all directories for maximum SEO impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Location Pages Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    city: 'Patna',
                    url: '/bike-rental-patna',
                    content: ['Patna Railway Station rentals', 'Patna University area', 'Gandhi Maidan pickup points', 'Patna City specific routes']
                  },
                  {
                    city: 'Bengaluru',
                    url: '/bike-rental-bangalore',
                    content: ['Koramangala hub', 'Electronic City locations', 'Indiranagar pickup', 'Whitefield coverage']
                  },
                  {
                    city: 'Delhi NCR',
                    url: '/bike-rental-delhi',
                    content: ['Connaught Place hub', 'Noida connections', 'Gurgaon coverage', 'Airport pickup service']
                  }
                ].map((loc, i) => (
                  <div key={i} className="p-5 border-2 border-orange-200 rounded-lg bg-white">
                    <h4 className="font-bold text-orange-900 mb-2">{loc.city}</h4>
                    <p className="text-sm text-blue-600 mb-3">{loc.url}</p>
                    <ul className="space-y-1">
                      {loc.content.map((item, j) => (
                        <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-orange-500">•</span>
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
      </section>

      {/* Backlink Strategy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <LinkIcon className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Backlink Acquisition Strategy</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>High Authority Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: 'Travel & Tourism Sites', domains: ['TripAdvisor', 'MakeMyTrip Blog', 'Travel Triangle'] },
                    { category: 'Automobile Portals', domains: ['BikeWale', 'BikeAdvice', 'RushLane'] },
                    { category: 'News & Media', domains: ['YourStory', 'Inc42', 'The Better India'] },
                    { category: 'Local Blogs', domains: ['Patna Beats', 'Bangalore Insider', 'Delhi Tourism'] }
                  ].map((cat, i) => (
                    <div key={i} className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">{cat.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.domains.map((domain, j) => (
                          <span key={j} className="px-3 py-1 bg-white text-sm text-gray-700 rounded-full">
                            {domain}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Link Building Tactics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { tactic: 'Guest Posting', desc: '2-3 high-quality guest posts per month' },
                    { tactic: 'Digital PR', desc: 'Press releases on major milestones' },
                    { tactic: 'Influencer Partnerships', desc: 'Collaborate with travel/auto bloggers' },
                    { tactic: 'Resource Link Building', desc: 'Create linkable assets (guides, infographics)' },
                    { tactic: 'Broken Link Building', desc: 'Find and replace broken links in niche' },
                    { tactic: 'Testimonials', desc: 'Provide testimonials to partners for backlinks' },
                    { tactic: 'Local Partnerships', desc: 'Partner with hotels, PGs, colleges' },
                    { tactic: 'HARO Responses', desc: 'Respond to journalist queries' }
                  ].map((item, i) => (
                    <li key={i} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-indigo-600 font-bold">#{i + 1}</span>
                        <div>
                          <p className="font-semibold text-gray-900">{item.tactic}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Strategy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">6-Month Blog Content Calendar</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                month: 'Month 1-2: Foundation',
                topics: [
                  'Ultimate Guide to Bike Rentals in India',
                  'How to Choose the Right Rental Bike',
                  '10 Best Bike Routes in Patna/Bangalore/Delhi',
                  'Bike Rental Safety Tips for First-Timers',
                  'Cost Comparison: Owning vs Renting a Bike',
                  'Documents Required for Bike Rental in India',
                  'Electric Scooters vs Petrol Bikes: Which to Rent?',
                  'How ZippGo Makes Bike Rental Easy'
                ]
              },
              {
                month: 'Month 3-4: Growth',
                topics: [
                  'Top 15 Weekend Getaways from Bangalore on a Rented Bike',
                  'Student Guide: Affordable Transportation in College',
                  'Bike Maintenance Tips Every Renter Should Know',
                  'Hourly vs Daily vs Monthly: Which Rental Plan is Best?',
                  'How to Maximize Earnings as a ZippGo Partner',
                  'Bike Rental Insurance: What You Need to Know',
                  'Best Bikes for City Commuting in India',
                  '5 Reasons Why Bike Rentals are Better Than Cabs'
                ]
              },
              {
                month: 'Month 5-6: Authority',
                topics: [
                  'Complete Guide to Starting a Bike Rental Business',
                  'Future of Urban Mobility in India',
                  'Interview with Top ZippGo Partners',
                  'City-Specific Traffic Rules for Bike Riders',
                  'How Technology is Transforming Bike Rentals',
                  'Environmental Impact: Shared Mobility vs Private Vehicles',
                  'Bike Rental Trends and Statistics 2024',
                  'Customer Success Stories: Life Made Easier with ZippGo'
                ]
              }
            ].map((period, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-xl text-pink-900">{period.month}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {period.topics.map((topic, j) => (
                      <div key={j} className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                        <span className="text-pink-600 font-bold flex-shrink-0">{j + 1}.</span>
                        <span className="text-gray-900">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Competitor Analysis</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                competitor: 'Bounce',
                strengths: ['Strong brand presence', 'App-based convenience', 'Dockless model'],
                weaknesses: ['Limited to specific cities', 'Scooter-only focus', 'Higher pricing'],
                opportunity: 'Target bike enthusiasts and longer rentals'
              },
              {
                competitor: 'Rapido',
                strengths: ['Wide network', 'Bike taxi model', 'Quick rides'],
                weaknesses: ['Not self-drive', 'Limited flexibility', 'Safety concerns'],
                opportunity: 'Emphasize self-drive freedom and safety'
              },
              {
                competitor: 'Royal Brothers',
                strengths: ['Long-term rentals', 'Touring bikes', 'Pan-India presence'],
                weaknesses: ['Higher price point', 'Deposit required', 'Complex booking'],
                opportunity: 'Focus on affordability and instant booking'
              }
            ].map((comp, i) => (
              <Card key={i} className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900">{comp.competitor}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Strengths</h4>
                      <ul className="space-y-1">
                        {comp.strengths.map((s, j) => (
                          <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-600">+</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Weaknesses</h4>
                      <ul className="space-y-1">
                        {comp.weaknesses.map((w, j) => (
                          <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-red-600">−</span>
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-900 text-sm mb-1">Our Opportunity</h4>
                      <p className="text-sm text-gray-700">{comp.opportunity}</p>
                    </div>
                  </div>
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
