import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

export const metadata = {
  title: "Refund & Cancellation Policy - ZippGo Mobility",
  description: "ZippGo's refund and cancellation policy. Learn about cancellation charges, refund timelines, and process for bike rental bookings.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last Updated: March 1, 2024
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Free Cancellation</h3>
                <p className="text-gray-700">Cancel >1 hour before pickup for full refund</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">₹50 Fee</h3>
                <p className="text-gray-700">Cancel <1 hour before pickup</p>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6 text-center">
                <XCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No Refund</h3>
                <p className="text-gray-700">No-show or after pickup time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2>1. Cancellation Policy for Riders</h2>
                
                <h3>1.1 Hourly and Daily Bookings</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3">Cancellation Time</th>
                        <th className="text-left py-3">Refund Amount</th>
                        <th className="text-left py-3">Processing Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">More than 1 hour before pickup</td>
                        <td className="py-3 text-green-600 font-semibold">100% Refund</td>
                        <td className="py-3">3-5 business days</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Less than 1 hour before pickup</td>
                        <td className="py-3 text-orange-600 font-semibold">Refund minus ₹50</td>
                        <td className="py-3">3-5 business days</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">After pickup time (No-show)</td>
                        <td className="py-3 text-red-600 font-semibold">No Refund</td>
                        <td className="py-3">-</td>
                      </tr>
                      <tr>
                        <td className="py-3">After vehicle picked up</td>
                        <td className="py-3 text-red-600 font-semibold">No Refund</td>
                        <td className="py-3">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>1.2 Monthly Subscriptions</h3>
                <ul>
                  <li><strong>Before activation:</strong> Full refund if cancelled before first use</li>
                  <li><strong>After activation:</strong> Pro-rata refund for unused days (minimum 15 days usage required)</li>
                  <li><strong>Cancellation fee:</strong> ₹500 administrative fee for mid-cycle cancellations</li>
                  <li><strong>Auto-renewal:</strong> Can be disabled anytime. No refund for current cycle</li>
                </ul>

                <h3>1.3 Corporate Plans</h3>
                <p>
                  Corporate bookings follow custom cancellation terms as per agreement. Contact your account 
                  manager for details.
                </p>

                <h2>2. How to Cancel a Booking</h2>
                <h3>2.1 Via Mobile App</h3>
                <ol>
                  <li>Open ZippGo app</li>
                  <li>Go to "My Bookings"</li>
                  <li>Select the booking you want to cancel</li>
                  <li>Tap "Cancel Booking"</li>
                  <li>Select cancellation reason</li>
                  <li>Confirm cancellation</li>
                  <li>Receive confirmation email/SMS</li>
                </ol>

                <h3>2.2 Via Website</h3>
                <ol>
                  <li>Log in to your account at zippgo.in</li>
                  <li>Navigate to "My Bookings"</li>
                  <li>Click on the booking</li>
                  <li>Click "Cancel Booking"</li>
                  <li>Follow the prompts</li>
                </ol>

                <h3>2.3 Via Customer Support</h3>
                <p>Call +91 98765 43210 or email support@zippgo.in. Provide booking ID for faster processing.</p>

                <h2>3. Refund Processing</h2>
                <h3>3.1 Refund Methods</h3>
                <ul>
                  <li><strong>Credit/Debit Card:</strong> Refunded to original payment method</li>
                  <li><strong>UPI:</strong> Credited back to source account</li>
                  <li><strong>Wallet:</strong> Credited to ZippGo wallet instantly</li>
                  <li><strong>Net Banking:</strong> Refunded to source bank account</li>
                </ul>

                <h3>3.2 Refund Timeline</h3>
                <ul>
                  <li><strong>ZippGo Wallet:</strong> Instant credit</li>
                  <li><strong>UPI/Wallets (Paytm, PhonePe):</strong> 1-2 business days</li>
                  <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                  <li><strong>Net Banking:</strong> 5-7 business days</li>
                </ul>
                <p>
                  <em>Note: Timeline starts after ZippGo processes the refund. Bank processing time may vary.</em>
                </p>

                <h3>3.3 Refund Confirmation</h3>
                <p>You'll receive:</p>
                <ul>
                  <li>Instant cancellation confirmation SMS/email</li>
                  <li>Refund initiation notification within 24 hours</li>
                  <li>Final refund confirmation once credited</li>
                </ul>

                <h2>4. Cancellation by ZippGo</h2>
                <h3>4.1 Reasons for Cancellation</h3>
                <p>ZippGo reserves the right to cancel bookings for:</p>
                <ul>
                  <li>Vehicle unavailability due to breakdown</li>
                  <li>Safety or maintenance concerns</li>
                  <li>Violation of Terms & Conditions</li>
                  <li>Fraudulent activity</li>
                  <li>Force majeure events (natural disasters, strikes, etc.)</li>
                  <li>Technical errors in booking</li>
                </ul>

                <h3>4.2 Compensation</h3>
                <p>If ZippGo cancels your booking:</p>
                <ul>
                  <li><strong>Full refund:</strong> 100% refund, no cancellation fee</li>
                  <li><strong>Alternative vehicle:</strong> Offered if available</li>
                  <li><strong>Compensation credit:</strong> ₹100 ZippGo credit for inconvenience</li>
                  <li><strong>Priority booking:</strong> Priority status for next booking</li>
                </ul>

                <h2>5. Modifications to Booking</h2>
                <h3>5.1 Changing Booking Time</h3>
                <ul>
                  <li><strong>More than 2 hours before pickup:</strong> Free modification</li>
                  <li><strong>Less than 2 hours before pickup:</strong> Subject to availability, ₹25 fee</li>
                  <li><strong>After pickup:</strong> Extension possible via app (charged per hour)</li>
                </ul>

                <h3>5.2 Changing Vehicle Type</h3>
                <ul>
                  <li>Upgrade to higher category: Pay price difference</li>
                  <li>Downgrade to lower category: Refund difference minus ₹50 admin fee</li>
                  <li>Subject to vehicle availability</li>
                </ul>

                <h2>6. Early Returns</h2>
                <h3>6.1 Hourly Bookings</h3>
                <p>
                  No refund for early returns. You're charged for the booked duration.
                </p>

                <h3>6.2 Daily Bookings</h3>
                <p>
                  If returned more than 6 hours early, contact support for possible pro-rata credit to wallet.
                </p>

                <h3>6.3 Monthly Subscriptions</h3>
                <p>
                  Pro-rata refund for unused days (minimum 15 days usage required) minus ₹500 admin fee.
                </p>

                <h2>7. Late Returns</h2>
                <p>Late returns are NOT eligible for refunds. Instead:</p>
                <ul>
                  <li><strong>Grace period:</strong> 30 minutes free</li>
                  <li><strong>After grace period:</strong> Late fees apply</li>
                  <li>Hourly bookings: ₹50/hour</li>
                  <li>Daily bookings: ₹100/hour</li>
                  <li>After 3 hours late: Full additional day charged</li>
                </ul>

                <h2>8. Damage and Cleaning Charges</h2>
                <p>The following are NON-REFUNDABLE:</p>
                <ul>
                  <li><strong>Damage charges:</strong> As per actual repair cost</li>
                  <li><strong>Cleaning fee:</strong> ₹500 for excessively dirty vehicles</li>
                  <li><strong>Lost key charges:</strong> ₹1,000 replacement cost</li>
                  <li><strong>Fuel charges:</strong> If returned with less fuel</li>
                  <li><strong>Traffic fines:</strong> Charged to rider + ₹100 admin fee</li>
                </ul>

                <h2>9. No-Show Policy</h2>
                <p>If you fail to pick up the vehicle:</p>
                <ul>
                  <li><strong>No refund</strong> for no-shows</li>
                  <li><strong>15-minute wait time:</strong> After that, booking marked as no-show</li>
                  <li><strong>Repeated no-shows:</strong> May result in account suspension</li>
                  <li><strong>Late arrival:</strong> Contact support immediately to avoid no-show marking</li>
                </ul>

                <h2>10. Partner Cancellation Policy</h2>
                <h3>10.1 Vehicle Withdrawal</h3>
                <ul>
                  <li><strong>Notice period:</strong> 30 days required</li>
                  <li><strong>Pending bookings:</strong> Must be honored or ZippGo finds alternative</li>
                  <li><strong>Early withdrawal fee:</strong> ₹5,000 if withdrawn before 3 months</li>
                  <li><strong>Final payout:</strong> Processed within 30 days of vehicle return</li>
                </ul>

                <h3>10.2 Partnership Termination by ZippGo</h3>
                <p>If ZippGo terminates partnership:</p>
                <ul>
                  <li>7 days notice provided</li>
                  <li>All pending payments cleared</li>
                  <li>Vehicle returned with full inspection report</li>
                  <li>No early withdrawal fee</li>
                </ul>

                <h2>11. Force Majeure</h2>
                <p>
                  In case of events beyond our control (natural disasters, pandemics, government orders, strikes), 
                  ZippGo reserves the right to:
                </p>
                <ul>
                  <li>Suspend operations temporarily</li>
                  <li>Cancel bookings with full refund</li>
                  <li>Pause subscriptions without penalty</li>
                  <li>Modify terms temporarily</li>
                </ul>

                <h2>12. Dispute Resolution</h2>
                <h3>12.1 Refund Disputes</h3>
                <p>If you disagree with a refund decision:</p>
                <ol>
                  <li>Contact customer support: support@zippgo.in</li>
                  <li>Provide booking ID and reason for dispute</li>
                  <li>We'll review within 48 hours</li>
                  <li>Decision communicated via email</li>
                  <li>Escalation to senior management if needed</li>
                </ol>

                <h3>12.2 Chargeback Policy</h3>
                <p>
                  If you initiate a chargeback with your bank without contacting us first, your account will be 
                  suspended pending investigation. We encourage you to contact us first to resolve any issues.
                </p>

                <h2>13. Special Circumstances</h2>
                <h3>13.1 Medical Emergencies</h3>
                <p>
                  In case of genuine medical emergencies (hospitalization required), full refund may be provided 
                  with valid medical documentation.
                </p>

                <h3>13.2 Accident/Breakdown</h3>
                <p>
                  If vehicle breaks down or is involved in accident during rental:
                </p>
                <ul>
                  <li>Replacement vehicle provided (if available)</li>
                  <li>Pro-rata refund for unavailable time</li>
                  <li>Compensation credit for inconvenience</li>
                </ul>

                <h2>14. Promotional Codes and Discounts</h2>
                <ul>
                  <li>Promo code discounts are NOT refundable in cash</li>
                  <li>If booking cancelled, original amount (before discount) refunded</li>
                  <li>Promo code may be reinstated for future use (check T&C)</li>
                  <li>Wallet credits from promotions are non-refundable</li>
                </ul>

                <h2>15. Contact Information</h2>
                <p>For refund and cancellation queries:</p>
                <ul>
                  <li><strong>Email:</strong> refunds@zippgo.in</li>
                  <li><strong>Phone:</strong> +91 98765 43210 (24/7)</li>
                  <li><strong>In-app:</strong> Use "Help & Support" section</li>
                  <li><strong>Response time:</strong> Within 2 hours during business hours</li>
                </ul>

                <h2>16. Policy Updates</h2>
                <p>
                  This policy may be updated from time to time. Changes will be effective immediately upon posting. 
                  Continued use of Services constitutes acceptance of modified policy.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mt-8">
                  <p className="font-semibold text-gray-900 mb-2">Important Reminder:</p>
                  <p className="text-gray-700 mb-4">
                    To avoid cancellation charges and ensure smooth refunds:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Cancel at least 1 hour before pickup time</li>
                    <li>Double-check booking details before confirming</li>
                    <li>Contact support immediately if you face any issues</li>
                    <li>Keep your contact information updated</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
                  <p className="font-semibold text-gray-900 mb-2">Need Help?</p>
                  <p className="text-gray-700">
                    Our support team is available 24/7 to assist with cancellations and refunds. Don't hesitate 
                    to reach out at support@zippgo.in or call +91 98765 43210.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}