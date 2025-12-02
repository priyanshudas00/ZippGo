"use client"

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, TrendingUp, Users, Heart, Zap, Award, Rocket, Coffee } from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Full Stack Developer",
      location: "Bengaluru",
      type: "Full-time",
      experience: "3-5 years",
      department: "Engineering",
      description: "Build scalable web and mobile applications using React, Node.js, and modern tech stack."
    },
    {
      title: "Product Manager",
      location: "Patna",
      type: "Full-time",
      experience: "4-6 years",
      department: "Product",
      description: "Drive product strategy and roadmap for ZippGo's rider and partner platforms."
    },
    {
      title: "Growth Marketing Manager",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      department: "Marketing",
      description: "Lead acquisition campaigns, SEO/SEM, and growth experiments to scale user base."
    },
    {
      title: "Fleet Operations Manager",
      location: "Ranchi",
      type: "Full-time",
      experience: "2-3 years",
      department: "Operations",
      description: "Manage vehicle fleet, coordinate with partners, ensure operational excellence."
    },
    {
      title: "Customer Support Lead",
      location: "Patna",
      type: "Full-time",
      experience: "1-3 years",
      department: "Support",
      description: "Build and lead customer support team, ensure 24/7 quality service."
    },
    {
      title: "IoT Engineer",
      location: "Bengaluru",
      type: "Full-time",
      experience: "2-4 years",
      department: "Engineering",
      description: "Design and implement IoT solutions for vehicle tracking and smart locks."
    },
    {
      title: "Business Development Manager",
      location: "Multiple Cities",
      type: "Full-time",
      experience: "2-5 years",
      department: "Sales",
      description: "Acquire corporate clients, close partnership deals, drive B2B growth."
    },
    {
      title: "Data Analyst",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      department: "Analytics",
      description: "Analyze user behavior, optimize pricing, provide insights for business decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Mission</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're revolutionizing India's mobility. Join a team that's building the future of transportation 
            and creating wealth opportunities for millions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg">
              Life at ZippGo
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join ZippGo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join ZippGo?</h2>
            <p className="text-xl text-gray-600">Build your career with India's fastest-growing mobility startup</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Massive Impact</h3>
                <p className="text-gray-600">
                  Work on products used by 50,000+ riders and 500+ partners. Your code, ideas, and decisions 
                  directly impact lives.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Rocket Ship Growth</h3>
                <p className="text-gray-600">
                  5x growth in last year. Expanding to 10 cities. Early-stage opportunity with massive upside. 
                  ESOPs for all employees.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Amazing Team</h3>
                <p className="text-gray-600">
                  Work with ex-Ola, Uber, Google, Amazon folks. Learn from the best. Small team, big impact. 
                  Everyone's voice matters.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ownership & Autonomy</h3>
                <p className="text-gray-600">
                  Own your domain end-to-end. No micromanagement. Freedom to experiment, fail, learn, and succeed. 
                  Meritocracy culture.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cutting-Edge Tech</h3>
                <p className="text-gray-600">
                  Work with latest technologies: React, Node.js, AI/ML, IoT, cloud infrastructure. Build from scratch. 
                  No legacy code.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Work-Life Balance</h3>
                <p className="text-gray-600">
                  Flexible hours, remote options, unlimited leave policy. We care about your well-being. 
                  Results matter, not hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perks & Benefits</h2>
            <p className="text-xl text-gray-600">We take care of our team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💰", title: "Competitive Salary", desc: "Top of market compensation" },
              { icon: "📈", title: "ESOPs", desc: "Equity for all employees" },
              { icon: "🏥", title: "Health Insurance", desc: "Medical coverage for you & family" },
              { icon: "🏖️", title: "Unlimited PTO", desc: "Take time off when you need" },
              { icon: "💻", title: "Latest Gear", desc: "MacBook, monitors, accessories" },
              { icon: "📚", title: "Learning Budget", desc: "₹50K/year for courses, books" },
              { icon: "🏋️", title: "Gym Membership", desc: "Stay fit, we pay" },
              { icon: "☕", title: "Free Meals", desc: "Lunch & snacks at office" },
              { icon: "🎉", title: "Team Outings", desc: "Quarterly team retreats" },
              { icon: "👶", title: "Parental Leave", desc: "6 months paid leave" },
              { icon: "🚀", title: "Fast Growth", desc: "Rapid career progression" },
              { icon: "🎯", title: "Mentorship", desc: "Learn from industry veterans" }
            ].map((perk, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{perk.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
                  <p className="text-sm text-gray-600">{perk.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your perfect role</p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see a role that fits? We're always looking for talented people!
            </p>
            <Button variant="outline" size="lg" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600">What we believe in</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">🚀 Move Fast, Think Big</h3>
                <p className="text-gray-700">
                  We're building for 1 billion Indians. Speed and ambition are in our DNA. We ship fast, 
                  iterate faster, and think 10x, not 10%.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">🤝 Trust & Transparency</h3>
                <p className="text-gray-700">
                  No politics, no hidden agendas. Open communication, honest feedback, transparent decision-making. 
                  Everyone knows the company's financials and strategy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">💪 Ownership Mindset</h3>
                <p className="text-gray-700">
                  Think like a founder. Take initiative. Don't wait for permission. If you see a problem, 
                  fix it. Own outcomes, not just tasks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">❤️ Customer Obsession</h3>
                <p className="text-gray-700">
                  Every decision starts with the customer. Riders, partners, drivers—we serve them all. 
                  Their success is our success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600">What to expect when you apply</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Application Review (2-3 days)</h3>
                <p className="text-gray-600">
                  Submit your resume and portfolio. Our team reviews every application carefully. 
                  You'll hear back within 3 days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-green-600 to-green-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Screening Call (30 min)</h3>
                <p className="text-gray-600">
                  Quick call with HR to understand your background, motivations, and fit. Two-way conversation 
                  to see if we're aligned.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-purple-600 to-purple-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Technical/Domain Round (1-2 hours)</h3>
                <p className="text-gray-600">
                  For engineers: coding challenge + system design. For others: case study or assignment relevant 
                  to the role. Real-world problems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-orange-600 to-orange-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Founder Round (45 min)</h3>
                <p className="text-gray-600">
                  Meet the founders. Discuss vision, culture, your goals. Deep-dive into your past work. 
                  This is where we assess long-term fit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-pink-600 to-pink-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Offer & Onboarding (1-2 days)</h3>
                <p className="text-gray-600">
                  If all goes well, you'll receive an offer within 48 hours. Fast decision-making is our strength. 
                  Welcome to ZippGo! 🎉
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Total time from application to offer: 1-2 weeks
            </p>
            <p className="text-gray-600">
              We move fast. No lengthy processes. No multiple rounds for the sake of it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Coffee className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Let's Build the Future Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Join a mission-driven team that's revolutionizing mobility in India
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl">
            View All Jobs
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}