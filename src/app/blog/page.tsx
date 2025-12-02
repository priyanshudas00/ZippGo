import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, TrendingUp } from 'lucide-react';

export const metadata = {
  title: "ZippGo Blog - Mobility Insights, Tips & Industry News",
  description: "Read the latest articles on bike sharing, mobility trends, partner success stories, and industry insights from ZippGo. Expert advice for riders and vehicle owners.",
};

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "How to Save ₹6,000 Every Month on Commute Costs in 2024",
      excerpt: "A comprehensive guide to cutting your transportation expenses without sacrificing convenience. Real calculations, real savings.",
      category: "Money Saving",
      author: "Priya Sharma",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224311-beee2509a0c4?w=800&h=400&fit=crop",
      slug: "save-6000-monthly-commute-costs"
    },
    {
      id: 2,
      title: "Partner Success Story: How Vikram Built a ₹70K/Month Passive Income Stream",
      excerpt: "From 1 scooter to 5 vehicles in 12 months. Vikram shares his journey, mistakes, and lessons learned.",
      category: "Success Stories",
      author: "Rahul Verma",
      date: "March 12, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop",
      slug: "vikram-70k-passive-income-story"
    },
    {
      id: 3,
      title: "The Future of Mobility in Tier 2 Cities: Why Patna, Ranchi & Lucknow are Leading",
      excerpt: "Tier 2 cities are becoming mobility innovation hubs. Here's why and what it means for entrepreneurs.",
      category: "Industry Insights",
      author: "Amit Kumar",
      date: "March 10, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
      slug: "future-mobility-tier-2-cities"
    },
    {
      id: 4,
      title: "5 Mistakes to Avoid When Renting a Bike for the First Time",
      excerpt: "New to bike rentals? Don't make these common mistakes. A beginner's guide to hassle-free riding.",
      category: "Tips & Tricks",
      author: "Ananya Verma",
      date: "March 8, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&h=400&fit=crop",
      slug: "5-mistakes-first-time-bike-rental"
    },
    {
      id: 5,
      title: "ROI Analysis: Is Buying a Vehicle for ZippGo Partnership Worth It?",
      excerpt: "Complete financial breakdown of investing in a vehicle for rental. Numbers, calculations, and real ROI data.",
      category: "Partner Resources",
      author: "Vikram Singh",
      date: "March 5, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1554224311-beee2509a0c4?w=800&h=400&fit=crop",
      slug: "roi-analysis-vehicle-partnership"
    }
  ];

  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ZippGo <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mobility insights, partner success stories, money-saving tips, and industry trends
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 lg:h-full">
                <img 
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Featured Article
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {featuredArticle.category}
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>

                <Link href={`/blog/${featuredArticle.slug}`}>
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Read Full Article <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Recent Articles</h2>
            <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recentArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-2xl transition overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${article.slug}`}>
                    <Button variant="link" className="text-blue-600 p-0 h-auto">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find articles that interest you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Money Saving Tips", count: 12, color: "blue" },
              { name: "Success Stories", count: 8, color: "green" },
              { name: "Industry Insights", count: 15, color: "purple" },
              { name: "Partner Resources", count: 10, color: "orange" },
              { name: "Tips & Tricks", count: 18, color: "indigo" },
              { name: "Tech & Innovation", count: 6, color: "pink" },
              { name: "Policy & Regulations", count: 5, color: "red" },
              { name: "Sustainability", count: 7, color: "teal" }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600">
            <CardContent className="p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-xl mb-8 opacity-90">
                Get the latest articles, tips, and mobility insights delivered to your inbox every week
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-75">
                Join 5,000+ readers. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}