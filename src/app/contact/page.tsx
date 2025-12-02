"use client"

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, HeadphonesIcon } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question? Need support? Want to partner with us? We're here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-3">Available 24/7</p>
                <a href="tel:+919876543210" className="text-blue-600 font-semibold hover:underline">
                  +91 98765 43210
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-3">Response in 2 hours</p>
                <a href="mailto:support@zippgo.in" className="text-green-600 font-semibold hover:underline">
                  support@zippgo.in
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-3">Instant support</p>
                <button className="text-purple-600 font-semibold hover:underline">
                  Start Chat
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Support Ticket</h3>
                <p className="text-gray-600 mb-3">Track your query</p>
                <button className="text-orange-600 font-semibold hover:underline">
                  Create Ticket
                </button>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select 
                      id="category"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partner">Partnership</option>
                      <option value="corporate">Corporate Plans</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={6}
                    />
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500 text-white text-lg py-6"
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 2 hours during business hours
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Info & Map */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                        <p className="text-gray-600">
                          ZippGo Mobility Solutions Pvt Ltd<br />
                          Fraser Road, Patna - 800001<br />
                          Bihar, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 7:00 PM<br />
                          Saturday: 10:00 AM - 6:00 PM<br />
                          Sunday: Closed<br />
                          <span className="text-green-600 font-semibold">Support: 24/7</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                        <Phone className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Quick Contact</h3>
                        <p className="text-gray-600">
                          Customer Support: +91 98765 43210<br />
                          Partner Support: +91 98765 43211<br />
                          Corporate Sales: +91 98765 43212
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.923788889!2d85.13446!3d25.59408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5843f0c5f0c5%3A0xf0c5f0c5f0c5f0c5!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="ZippGo Office Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regional Offices</h2>
            <p className="text-xl text-gray-600">We're expanding across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Bengaluru Office</h3>
                <p className="text-gray-600 mb-4">
                  Koramangala, Bengaluru - 560034<br />
                  Karnataka, India
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Contact:</strong> +91 98765 43213
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Ranchi Office</h3>
                <p className="text-gray-600 mb-4">
                  Main Road, Ranchi - 834001<br />
                  Jharkhand, India
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Contact:</strong> +91 98765 43214
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Lucknow Office</h3>
                <p className="text-gray-600 mb-4">
                  Hazratganj, Lucknow - 226001<br />
                  Uttar Pradesh, India
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Contact:</strong> +91 98765 43215
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200">
            <CardContent className="p-8 text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Support</h2>
              <p className="text-xl text-gray-700 mb-6">
                Accident, breakdown, or urgent issue? Call our emergency helpline immediately
              </p>
              <a href="tel:+911234567890">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl">
                  Emergency: +91 12345 67890
                </Button>
              </a>
              <p className="text-sm text-gray-600 mt-4">
                Available 24/7 • Average response time: 15 minutes
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}