"use client"

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "For Riders",
      questions: [
        {
          q: "How do I book a bike on ZippGo?",
          a: "Booking is simple! Download our app or visit our website, sign up with your mobile number, browse available bikes near you, select your preferred model and duration, make payment, and you're ready to ride. The entire process takes less than 2 minutes."
        },
        {
          q: "What documents do I need to rent a bike?",
          a: "You need a valid driving license (for bikes) and a government ID proof (Aadhaar, PAN, Passport). Upload these documents once during signup, and you're set for all future bookings."
        },
        {
          q: "What are your pricing plans?",
          a: "We offer flexible pricing: Hourly (₹99 for 3 hours, then ₹25/hour), Daily (₹299/day with unlimited km within city), and Monthly (₹2,999/month - best value!). Check our pricing page for detailed information."
        },
        {
          q: "Is fuel included in the rental price?",
          a: "No, fuel is not included. You'll need to refuel the vehicle before returning. We provide a full tank at pickup, and we expect the same at return. Alternatively, pay for consumed fuel at return."
        },
        {
          q: "What if I return the bike late?",
          a: "We offer a 30-minute grace period. After that, late fees apply: ₹50/hour for hourly rentals, ₹100/hour for daily rentals. Monthly subscribers have no late fees."
        },
        {
          q: "Are helmets provided?",
          a: "Yes! Every booking includes a complimentary helmet. Monthly subscribers get their own helmet to keep. We sanitize all helmets after each use for your safety."
        },
        {
          q: "Can I extend my booking?",
          a: "Absolutely! Extend your booking directly from the app. If another customer hasn't booked the vehicle, extension is instant. If booked, we'll help you find an alternative vehicle."
        },
        {
          q: "What's your cancellation policy?",
          a: "Free cancellation up to 1 hour before pickup time. Full refund, no questions asked. Cancellations within 1 hour of pickup incur a ₹50 cancellation fee."
        },
        {
          q: "What if the bike breaks down?",
          a: "Call our 24/7 support immediately. We'll send roadside assistance within 30 minutes or provide a replacement vehicle. You won't be charged for breakdown time."
        },
        {
          q: "Do you offer student discounts?",
          a: "Yes! Students get 10% off all plans with valid college ID. First-time users get an additional 15% off with code ZIPPFIRST. Refer a friend and both get ₹100 credit."
        }
      ]
    },
    {
      category: "For Partners (Vehicle Owners)",
      questions: [
        {
          q: "How much can I earn by partnering with ZippGo?",
          a: "Average partner earnings are ₹14,000-18,000 per month per vehicle. Top performers earn ₹20,000-25,000. We guarantee minimum ₹12,000/month even if your vehicle isn't booked frequently."
        },
        {
          q: "What are the requirements to become a partner?",
          a: "Your vehicle should be: Less than 5 years old, in good working condition, have valid RC and insurance, and be registered in your name. Both bikes and scooters are accepted."
        },
        {
          q: "Do I need to maintain the vehicle?",
          a: "No! We handle all maintenance, servicing, and repairs at no cost to you. Our team ensures your vehicle is always in top condition. This saves you ₹2,000-3,000/month."
        },
        {
          q: "What about insurance?",
          a: "We provide comprehensive insurance coverage on all partner vehicles. Zero liability for theft, damage, or accidents. ₹5 lakh coverage per vehicle. You're completely protected."
        },
        {
          q: "How and when do I get paid?",
          a: "Payments are made on the 1st of every month via bank transfer. You can track earnings in real-time on our partner app. Withdraw anytime after you reach ₹1,000 threshold."
        },
        {
          q: "Can I use my vehicle whenever I want?",
          a: "No, once partnered, the vehicle is dedicated to ZippGo for maximum utilization and earnings. However, you can withdraw your vehicle with 30 days notice if needed."
        },
        {
          q: "What's the commission structure?",
          a: "ZippGo takes 20% commission on bookings. This covers insurance, maintenance, marketing, operations, and platform costs. You keep 80% of rental revenue."
        },
        {
          q: "How do I track my vehicle and earnings?",
          a: "Our partner app provides real-time tracking: GPS location, current booking status, daily/monthly earnings, maintenance history, and customer ratings. Available on iOS and Android."
        },
        {
          q: "What if my vehicle gets damaged?",
          a: "Our insurance covers all damages. You don't pay a rupee. We handle claims, repairs, and paperwork. Vehicle is repaired at authorized service centers."
        },
        {
          q: "Can I add more vehicles later?",
          a: "Yes! Many partners start with 1 vehicle and scale to 5-10. We encourage growth. Multiple vehicle owners get priority support and better commission rates."
        }
      ]
    },
    {
      category: "Safety & Security",
      questions: [
        {
          q: "How do you verify riders?",
          a: "Every rider goes through KYC verification: Valid driving license verification, Aadhaar authentication, Face verification via selfie, and Background check for safety. Only verified users can book."
        },
        {
          q: "What safety measures do you have?",
          a: "All vehicles have: GPS tracking for real-time location, Geofencing to prevent unauthorized areas, Speed limit alerts, Emergency SOS button in app, and 24/7 monitoring by our safety team."
        },
        {
          q: "Are vehicles regularly maintained?",
          a: "Yes! Every vehicle undergoes: Daily pre-ride inspection, Weekly professional servicing, Monthly comprehensive checkup, and Immediate repair of any reported issues. Safety is our priority."
        },
        {
          q: "What happens in case of an accident?",
          a: "Immediately contact our 24/7 emergency helpline. We'll assist with: Police documentation, Insurance claim processing, Medical assistance if needed, and Replacement vehicle. Comprehensive support throughout."
        },
        {
          q: "Do you conduct background checks on riders?",
          a: "Yes, all riders undergo verification. We check driving license validity, verify identity documents, and maintain a rating system. Poor-rated users are removed from the platform."
        }
      ]
    },
    {
      category: "Technical & App",
      questions: [
        {
          q: "How do I unlock the bike?",
          a: "Once booking is confirmed, use the 'Unlock' button in the app. Our smart IoT lock opens automatically. No physical keys needed. Lock it the same way when parking."
        },
        {
          q: "What if the app isn't working?",
          a: "Contact support immediately at +91 98765 43210. We can unlock vehicles manually. Meanwhile, try: Restarting the app, Checking internet connection, or Updating to the latest version."
        },
        {
          q: "Can I use ZippGo without a smartphone?",
          a: "While the app provides the best experience, you can book via our website and call support for vehicle unlock. However, we strongly recommend using the app for convenience."
        },
        {
          q: "Is my payment information secure?",
          a: "Absolutely! We use industry-standard encryption and comply with PCI-DSS standards. Payments are processed by Razorpay (trusted payment gateway). We never store your complete card details."
        }
      ]
    },
    {
      category: "Locations & Availability",
      questions: [
        {
          q: "Which cities is ZippGo available in?",
          a: "Currently operating in Patna, Bengaluru, Ranchi, Bhopal, and Lucknow. Expanding to 10 more cities by end of 2024 including Delhi, Mumbai, Hyderabad, and Pune."
        },
        {
          q: "Can I pick up in one location and drop in another?",
          a: "Yes! We have 50+ pickup/drop locations across each city. One-way trips are allowed within city limits. Inter-city trips require prior approval and may have additional charges."
        },
        {
          q: "Do you operate 24/7?",
          a: "Yes! Book and ride anytime. Pickup/drop locations are accessible 24/7. Our support team is also available round the clock for assistance."
        },
        {
          q: "What if no bikes are available in my area?",
          a: "Join the waitlist! We'll notify you when vehicles become available. Peak hours (8-10 AM, 5-7 PM) see high demand. Book in advance for guaranteed availability."
        }
      ]
    },
    {
      category: "Corporate & Business",
      questions: [
        {
          q: "Do you offer corporate plans?",
          a: "Yes! We have special plans for businesses: Bulk discounts (20-30% off), Centralized billing, Dedicated account manager, Priority support, and Custom contracts. Contact our B2B team."
        },
        {
          q: "Can we get monthly invoices for accounting?",
          a: "Yes, corporate clients receive monthly consolidated invoices with GST. Download from partner portal or we'll email directly to your accounts team."
        },
        {
          q: "What about employee transport for companies?",
          a: "We specialize in employee transport solutions. Flexible plans from 10-1000 employees. Discounted rates, individual tracking, and usage reports. Perfect for startups and SMEs."
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about ZippGo services
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No results found for "{searchTerm}"</p>
              <p className="text-gray-500 mt-2">Try different keywords or browse categories below</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 1000 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <Card key={faqIndex} className="hover:shadow-lg transition">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full text-left p-6 flex justify-between items-start gap-4"
                            >
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  {faq.q}
                                </h3>
                                {isOpen && (
                                  <p className="text-gray-600 leading-relaxed mt-4">
                                    {faq.a}
                                  </p>
                                )}
                              </div>
                              <div className="flex-shrink-0">
                                {isOpen ? (
                                  <ChevronUp className="w-6 h-6 text-blue-600" />
                                ) : (
                                  <ChevronDown className="w-6 h-6 text-gray-400" />
                                )}
                              </div>
                            </button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is here to help 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Call: +91 98765 43210
              </button>
            </a>
            <a href="mailto:support@zippgo.in">
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Email: support@zippgo.in
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}