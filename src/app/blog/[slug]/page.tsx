import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';

// This would normally fetch from a CMS or database
export default function BlogArticlePage() {
  const article = {
    title: "How to Save ₹6,000 Every Month on Commute Costs in 2024",
    excerpt: "A comprehensive guide to cutting your transportation expenses without sacrificing convenience. Real calculations, real savings.",
    category: "Money Saving",
    author: "Priya Sharma",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1554224311-beee2509a0c4?w=1200&h=600&fit=crop",
    content: `
      <h2>The Hidden Cost of Daily Commuting</h2>
      <p>Most people don't realize how much they're spending on daily transportation. Between cab fares, fuel costs, parking fees, and vehicle maintenance, the average Indian urban commuter spends ₹9,000-12,000 per month just getting to work.</p>
      
      <p>Let's break down the typical monthly commute expenses:</p>
      
      <ul>
        <li><strong>Cab/Auto rides:</strong> ₹300/day × 25 days = ₹7,500</li>
        <li><strong>Or Personal vehicle:</strong> Fuel (₹3,000) + EMI (₹5,000) + Parking (₹1,000) + Maintenance (₹1,000) = ₹10,000</li>
        <li><strong>Public transport:</strong> ₹80/day × 25 days = ₹2,000 (but inconvenient)</li>
      </ul>

      <h2>The ZippGo Solution: ₹2,999/Month</h2>
      <p>This is where bike rentals change the game. With ZippGo's monthly subscription at ₹2,999, you get:</p>
      
      <ul>
        <li>Unlimited usage for 30 days</li>
        <li>No parking hassles (park anywhere)</li>
        <li>Free maintenance and servicing</li>
        <li>Comprehensive insurance</li>
        <li>Vehicle swap option</li>
        <li>Zero depreciation cost</li>
      </ul>

      <h2>Real Savings Calculation</h2>
      <p>Let's do the math for three different commuter profiles:</p>

      <h3>Profile 1: The Cab Rider (Rajesh, 26, IT Professional)</h3>
      <p><strong>Before ZippGo:</strong></p>
      <ul>
        <li>Daily cab fare: ₹300 (both ways)</li>
        <li>Monthly expense: ₹7,500</li>
      </ul>

      <p><strong>After ZippGo:</strong></p>
      <ul>
        <li>Monthly subscription: ₹2,999</li>
        <li>Fuel cost: ₹1,500</li>
        <li>Total: ₹4,499</li>
      </ul>

      <p><strong>Monthly savings: ₹3,001</strong></p>
      <p><strong>Annual savings: ₹36,012</strong></p>

      <h3>Profile 2: The Vehicle Owner (Priya, 28, Marketing Manager)</h3>
      <p><strong>Before ZippGo (owned scooter):</strong></p>
      <ul>
        <li>EMI: ₹5,000</li>
        <li>Fuel: ₹3,000</li>
        <li>Maintenance: ₹1,000</li>
        <li>Insurance: ₹500</li>
        <li>Parking: ₹1,000</li>
        <li>Total: ₹10,500</li>
      </ul>

      <p><strong>After ZippGo (sold vehicle):</strong></p>
      <ul>
        <li>Monthly subscription: ₹2,999</li>
        <li>Fuel: ₹1,500</li>
        <li>Total: ₹4,499</li>
        <li>Plus: ₹60,000 from selling vehicle (invested in FD earning ₹500/month)</li>
      </ul>

      <p><strong>Monthly savings: ₹6,501</strong></p>
      <p><strong>Annual savings: ₹78,012</strong></p>

      <h3>Profile 3: The Student (Ananya, 21, College Student)</h3>
      <p><strong>Before ZippGo:</strong></p>
      <ul>
        <li>Bus fare: ₹60/day</li>
        <li>Auto for emergencies: ₹500/month</li>
        <li>Monthly expense: ₹2,000</li>
      </ul>

      <p><strong>After ZippGo (with student discount):</strong></p>
      <ul>
        <li>Monthly subscription: ₹2,699 (10% student discount)</li>
        <li>Fuel: ₹800 (lower usage)</li>
        <li>Total: ₹3,499</li>
      </ul>

      <p><strong>Cost increase: ₹1,499 BUT gains huge convenience and time savings (2 hours/day saved = 60 hours/month)</strong></p>

      <h2>Beyond Direct Savings</h2>
      <p>The financial benefits go beyond just transportation costs:</p>

      <ol>
        <li><strong>Time Savings:</strong> No waiting for cabs or buses. Average 30 minutes saved per trip = 1 hour/day = 25 hours/month. At ₹500/hour opportunity cost, that's ₹12,500 value.</li>
        <li><strong>Health Benefits:</strong> Fresh air, exercise (even minimal), reduced stress from traffic.</li>
        <li><strong>Flexibility:</strong> Go anywhere, anytime. No surge pricing, no driver cancellations.</li>
        <li><strong>Tax Benefits:</strong> Corporate employees can claim bike rental as business expense (check with CA).</li>
      </ol>

      <h2>How to Maximize Your Savings</h2>
      <p>Here are pro tips from existing ZippGo users:</p>

      <ol>
        <li><strong>Choose the right plan:</strong> If you commute daily, monthly is always cheaper than daily rentals.</li>
        <li><strong>Share with a colleague:</strong> Some users coordinate with colleagues, taking turns.</li>
        <li><strong>Use referral codes:</strong> Refer friends and earn ₹100 credit per referral.</li>
        <li><strong>Maintain good riding behavior:</strong> High-rated users get priority booking and occasional discounts.</li>
        <li><strong>Book in advance:</strong> Avoid peak hour rush by booking the night before.</li>
      </ol>

      <h2>Common Questions</h2>
      
      <h3>Is it safe?</h3>
      <p>All ZippGo vehicles are GPS-tracked, regularly maintained, and come with comprehensive insurance. We've served 50,000+ riders with a 4.8/5 safety rating.</p>

      <h3>What about rainy days?</h3>
      <p>Monthly subscribers get a free raincoat. Plus, you can always take a cab on extremely rainy days and still save money overall.</p>

      <h3>Can I use it for weekend trips?</h3>
      <p>Absolutely! Monthly plan includes unlimited usage within city limits. Perfect for grocery runs, meeting friends, or exploring your city.</p>

      <h2>Real User Testimonial</h2>
      <blockquote>
        "I was skeptical at first, but ZippGo saved me ₹5,500 in the first month itself. I sold my scooter, got ₹55,000, invested it in mutual funds, and now use ZippGo for everything. Best financial decision of 2024!" - Rajesh Kumar, Bengaluru
      </blockquote>

      <h2>Take Action Now</h2>
      <p>Here's your action plan:</p>

      <ol>
        <li><strong>Calculate your current commute expense</strong> (be honest, include everything)</li>
        <li><strong>Try ZippGo for 1 month</strong> (use code SAVE20 for 20% off first month)</li>
        <li><strong>Track your actual savings</strong></li>
        <li><strong>Decide:</strong> Continue or go back (but 98% of users continue!)</li>
      </ol>

      <h2>The Bottom Line</h2>
      <p>Saving ₹6,000/month = ₹72,000/year. That's enough for:</p>
      <ul>
        <li>An international vacation</li>
        <li>Paying off credit card debt</li>
        <li>Starting a SIP for retirement</li>
        <li>Building an emergency fund</li>
        <li>Or just having more disposable income</li>
      </ul>

      <p>The choice is yours. Keep overpaying for transportation, or make the smart switch today.</p>

      <p><strong>Ready to start saving?</strong> Download the ZippGo app or visit our website. Use code <strong>SAVE20</strong> for 20% off your first month.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Article Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {article.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: '1.8',
              }}
            />

            {/* Share Section */}
            <div className="border-t pt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Facebook className="w-4 h-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Twitter className="w-4 h-4" />
                    Tweet
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 50,000+ smart commuters who save ₹6,000+ every month
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/user">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Get Started - Save ₹6,000/mo
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Use code <strong>SAVE20</strong> for 20% off your first month
          </p>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Mistakes to Avoid When Renting a Bike",
                category: "Tips & Tricks",
                readTime: "6 min",
                image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=300&fit=crop"
              },
              {
                title: "Partner Success Story: ₹70K/Month Income",
                category: "Success Stories",
                readTime: "10 min",
                image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop"
              },
              {
                title: "Future of Mobility in Tier 2 Cities",
                category: "Industry Insights",
                readTime: "12 min",
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
              }
            ].map((related, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <div className="relative h-48">
                  <img src={related.image} alt={related.title} className="w-full h-full object-cover rounded-t-lg" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {related.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{related.title}</h3>
                  <p className="text-sm text-gray-600">{related.readTime} read</p>
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