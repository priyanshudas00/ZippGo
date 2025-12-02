import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Clock, 
  CreditCard, 
  CheckCircle, 
  AlertTriangle,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Refund Policy
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            We want you to have a great experience with ZippGo. Here is our transparent refund policy.
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-green-200 bg-green-50">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-green-900 mb-2">Quick Refunds</h3>
                <p className="text-sm text-green-700">Most refunds processed within 24-48 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900 mb-2">Flexible Cancellation</h3>
                <p className="text-sm text-blue-700">Free cancellation up to 2 hours before booking</p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <CreditCard className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-purple-900 mb-2">Multiple Methods</h3>
                <p className="text-sm text-purple-700">Refund to original payment method or wallet</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Refund Policy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy Details</h2>
          
          <div className="space-y-8">
            {/* Cancellation Windows */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Cancellation Time Windows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900">More than 2 hours before booking</h4>
                      <p className="text-green-700 text-sm">100% refund - No cancellation charges</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-900">1-2 hours before booking</h4>
                      <p className="text-yellow-700 text-sm">80% refund - 20% cancellation fee applies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-900">Less than 1 hour or after pickup</h4>
                      <p className="text-red-700 text-sm">No refund - Full charges apply</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Circumstances */}
            <Card>
              <CardHeader>
                <CardTitle>Special Circumstances & Exceptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Vehicle Issues</h4>
                    <p className="text-gray-600 text-sm mb-2">If the vehicle has mechanical issues or safety concerns:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>100% refund if reported within 15 minutes of pickup</li>
                      <li>Alternative vehicle arrangement at no extra cost</li>
                      <li>Compensation for inconvenience on case-by-case basis</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Weather Conditions</h4>
                    <p className="text-gray-600 text-sm mb-2">For extreme weather conditions:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Heavy rain or storms: Full refund available</li>
                      <li>Government advisories: 100% refund with no questions asked</li>
                      <li>Safety-first policy in all weather-related scenarios</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Medical Emergencies</h4>
                    <p className="text-gray-600 text-sm mb-2">For genuine medical emergencies:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Full refund with proper medical documentation</li>
                      <li>Compassionate consideration for family emergencies</li>
                      <li>Case-by-case review with our support team</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refund Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                  Refund Process & Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">How to Request a Refund</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                      <li>Open the ZippGo app and go to &quot;My Bookings&quot;</li>
                      <li>Select the booking you want to cancel</li>
                      <li>Click &quot;Cancel Booking&quot; and select your reason</li>
                      <li>Submit the cancellation request</li>
                      <li>Receive confirmation and refund timeline</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Refund Timeline</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-medium text-blue-900 mb-1">ZippGo Wallet</h5>
                        <p className="text-sm text-blue-700">Instant refund</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h5 className="font-medium text-green-900 mb-1">UPI/Net Banking</h5>
                        <p className="text-sm text-green-700">1-2 business days</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h5 className="font-medium text-purple-900 mb-1">Credit/Debit Cards</h5>
                        <p className="text-sm text-purple-700">3-5 business days</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h5 className="font-medium text-orange-900 mb-1">Bank Transfer</h5>
                        <p className="text-sm text-orange-700">5-7 business days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    Refunds are processed only to the original payment method used for booking
                  </p>
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    Promotional discount amounts are non-refundable in case of partial refunds
                  </p>
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    Multiple cancellations may result in temporary account restrictions
                  </p>
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    Refund timeline depends on your bank or payment provider processing time
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Help with Your Refund?</h2>
            <p className="text-blue-100 mb-8">
              Our customer support team is here to help you with any refund-related queries
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-blue-100 text-sm">+91-1800-123-4567</p>
                <p className="text-blue-100 text-xs">24/7 Support</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-blue-100 text-sm">refunds@zippgo.com</p>
                <p className="text-blue-100 text-xs">Response within 2 hours</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MessageCircle className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-blue-100 text-sm">In-app chat support</p>
                <p className="text-blue-100 text-xs">Instant response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}