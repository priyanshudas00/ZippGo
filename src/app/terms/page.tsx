import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: "Terms & Conditions - ZippGo Mobility",
  description: "Read ZippGo's terms and conditions for bike rental services. User agreements, partner terms, liability clauses, and usage policies.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600">
            Last Updated: March 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to ZippGo Mobility Solutions Pvt Ltd ("ZippGo", "we", "us", or "our"). These Terms and 
                  Conditions ("Terms") govern your access to and use of ZippGo's vehicle rental services, website, 
                  mobile applications, and related services (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to 
                  these Terms, you may not access or use the Services.
                </p>

                <h2>2. Definitions</h2>
                <ul>
                  <li><strong>"User"</strong> or <strong>"Rider"</strong>: Any individual who registers to use ZippGo's rental services</li>
                  <li><strong>"Partner"</strong>: Vehicle owners who list their vehicles on ZippGo platform</li>
                  <li><strong>"Vehicle"</strong>: Two-wheeler vehicles (bikes/scooters) available for rent</li>
                  <li><strong>"Booking"</strong>: A confirmed reservation of a vehicle through our platform</li>
                  <li><strong>"Rental Period"</strong>: The time between vehicle pickup and return</li>
                </ul>

                <h2>3. Eligibility</h2>
                <h3>3.1 For Riders</h3>
                <ul>
                  <li>You must be at least 18 years of age</li>
                  <li>Possess a valid driving license appropriate for the vehicle type</li>
                  <li>Provide valid government-issued ID proof</li>
                  <li>Have a valid payment method</li>
                  <li>Pass our verification process</li>
                </ul>

                <h3>3.2 For Partners</h3>
                <ul>
                  <li>You must be at least 21 years of age</li>
                  <li>Own the vehicle legally with valid RC (Registration Certificate)</li>
                  <li>Maintain valid insurance on the vehicle</li>
                  <li>Vehicle must be less than 5 years old and in good working condition</li>
                  <li>Comply with all local laws and regulations</li>
                </ul>

                <h2>4. Account Registration</h2>
                <p>
                  To use our Services, you must create an account by providing accurate, complete, and current 
                  information. You are responsible for:
                </p>
                <ul>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your contact information is up-to-date</li>
                </ul>

                <h2>5. Vehicle Rental Terms</h2>
                <h3>5.1 Booking Process</h3>
                <ul>
                  <li>Bookings are confirmed upon successful payment</li>
                  <li>Vehicle availability is subject to change</li>
                  <li>Booking confirmation does not guarantee specific vehicle model</li>
                  <li>We reserve the right to refuse service for any reason</li>
                </ul>

                <h3>5.2 Pricing and Payment</h3>
                <ul>
                  <li>All prices are displayed in Indian Rupees (₹)</li>
                  <li>Prices include GST unless otherwise stated</li>
                  <li>Payment must be made in advance through approved payment methods</li>
                  <li>Security deposit may be required for certain bookings</li>
                  <li>We reserve the right to modify pricing with notice</li>
                </ul>

                <h3>5.3 Fuel Policy</h3>
                <ul>
                  <li>Vehicles are provided with a full fuel tank</li>
                  <li>Riders must return vehicles with a full tank</li>
                  <li>Fuel charges will be deducted if returned with less fuel</li>
                  <li>Fuel cost calculation based on current market rates</li>
                </ul>

                <h3>5.4 Usage Restrictions</h3>
                <p>You agree NOT to:</p>
                <ul>
                  <li>Use the vehicle for illegal purposes</li>
                  <li>Sublet or transfer the vehicle to others</li>
                  <li>Use the vehicle while under influence of alcohol or drugs</li>
                  <li>Exceed prescribed speed limits</li>
                  <li>Carry passengers beyond vehicle capacity</li>
                  <li>Use the vehicle for racing or reckless driving</li>
                  <li>Remove or tamper with GPS tracking devices</li>
                  <li>Travel outside city limits without prior approval</li>
                </ul>

                <h2>6. Cancellation and Refunds</h2>
                <h3>6.1 Rider Cancellations</h3>
                <ul>
                  <li><strong>More than 1 hour before pickup:</strong> Full refund</li>
                  <li><strong>Less than 1 hour before pickup:</strong> ₹50 cancellation fee</li>
                  <li><strong>No-show:</strong> No refund</li>
                </ul>

                <h3>6.2 ZippGo Cancellations</h3>
                <p>
                  We reserve the right to cancel bookings due to vehicle unavailability, safety concerns, or 
                  violation of Terms. Full refund will be provided in such cases.
                </p>

                <h2>7. Late Returns and Extensions</h2>
                <ul>
                  <li>Grace period: 30 minutes</li>
                  <li>Late fee: ₹50/hour for hourly rentals, ₹100/hour for daily rentals</li>
                  <li>Extensions can be requested through the app (subject to availability)</li>
                  <li>Unauthorized late returns may result in additional charges</li>
                </ul>

                <h2>8. Vehicle Condition and Damage</h2>
                <h3>8.1 Pre-Rental Inspection</h3>
                <ul>
                  <li>Riders must inspect vehicle before accepting</li>
                  <li>Report any pre-existing damage immediately</li>
                  <li>Take photos/videos if necessary</li>
                  <li>Failure to report may result in damage charges</li>
                </ul>

                <h3>8.2 Damage Liability</h3>
                <ul>
                  <li>Riders are liable for damages caused during rental period</li>
                  <li>Insurance covers major accidents (terms apply)</li>
                  <li>Minor damages will be charged to the rider</li>
                  <li>Security deposit may be used to cover damages</li>
                </ul>

                <h3>8.3 Theft or Total Loss</h3>
                <ul>
                  <li>Report theft to police immediately and provide FIR copy</li>
                  <li>Notify ZippGo within 2 hours of incident</li>
                  <li>Insurance claim will be processed as per policy</li>
                  <li>Rider may be liable for deductible amount</li>
                </ul>

                <h2>9. Insurance Coverage</h2>
                <p>All vehicles are covered by comprehensive insurance including:</p>
                <ul>
                  <li>Third-party liability (as per law)</li>
                  <li>Own damage coverage</li>
                  <li>Personal accident cover for rider</li>
                  <li>Theft protection</li>
                </ul>
                <p>
                  <strong>Exclusions:</strong> Damage due to illegal use, drunk driving, or violation of terms 
                  is not covered.
                </p>

                <h2>10. Partner Terms</h2>
                <h3>10.1 Partnership Agreement</h3>
                <ul>
                  <li>Vehicle ownership must be proven with valid documents</li>
                  <li>ZippGo takes 20% commission on rental revenue</li>
                  <li>Payments made monthly on the 1st of each month</li>
                  <li>Minimum partnership period: 3 months</li>
                  <li>30 days notice required for withdrawal</li>
                </ul>

                <h3>10.2 Partner Responsibilities</h3>
                <ul>
                  <li>Provide vehicle in good working condition</li>
                  <li>Maintain valid RC and insurance</li>
                  <li>Allow installation of GPS and IoT devices</li>
                  <li>Not use vehicle during partnership period</li>
                </ul>

                <h3>10.3 ZippGo's Responsibilities</h3>
                <ul>
                  <li>Regular maintenance and servicing</li>
                  <li>Insurance coverage</li>
                  <li>GPS tracking for security</li>
                  <li>Customer acquisition and marketing</li>
                  <li>24/7 support</li>
                </ul>

                <h2>11. Data Privacy</h2>
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by 
                  our Privacy Policy. By using our Services, you consent to our data practices as described in 
                  the Privacy Policy.
                </p>

                <h2>12. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of the Services, including but not limited to text, 
                  graphics, logos, icons, images, software, and trademarks, are the exclusive property of ZippGo 
                  or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h2>13. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, ZippGo shall not be liable for:
                </p>
                <ul>
                  <li>Indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages arising from accidents or vehicle breakdowns</li>
                  <li>Third-party claims against riders</li>
                </ul>
                <p>
                  Our total liability shall not exceed the amount paid by you for the specific booking.
                </p>

                <h2>14. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless ZippGo, its affiliates, partners, officers, directors, 
                  employees, and agents from any claims, damages, losses, liabilities, and expenses (including 
                  legal fees) arising from:
                </p>
                <ul>
                  <li>Your use of the Services</li>
                  <li>Violation of these Terms</li>
                  <li>Violation of any laws or third-party rights</li>
                  <li>Accidents or damages caused during rental period</li>
                </ul>

                <h2>15. Dispute Resolution</h2>
                <h3>15.1 Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without 
                  regard to conflict of law provisions.
                </p>

                <h3>15.2 Jurisdiction</h3>
                <p>
                  Any disputes arising from these Terms or your use of the Services shall be subject to the 
                  exclusive jurisdiction of courts in Patna, Bihar.
                </p>

                <h3>15.3 Arbitration</h3>
                <p>
                  Before pursuing legal action, parties agree to attempt resolution through good-faith negotiation. 
                  If unresolved, disputes may be submitted to arbitration under the Arbitration and Conciliation 
                  Act, 1996.
                </p>

                <h2>16. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your account and access to Services at any time, 
                  with or without notice, for:
                </p>
                <ul>
                  <li>Violation of these Terms</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Breach of payment obligations</li>
                  <li>Poor rating or behavior</li>
                  <li>Any reason deemed appropriate by ZippGo</li>
                </ul>

                <h2>17. Modifications to Terms</h2>
                <p>
                  ZippGo reserves the right to modify these Terms at any time. Changes will be effective 
                  immediately upon posting on our website/app. Continued use of Services after changes constitutes 
                  acceptance of modified Terms.
                </p>

                <h2>18. Miscellaneous</h2>
                <h3>18.1 Entire Agreement</h3>
                <p>
                  These Terms constitute the entire agreement between you and ZippGo regarding use of the Services.
                </p>

                <h3>18.2 Severability</h3>
                <p>
                  If any provision of these Terms is found invalid or unenforceable, the remaining provisions 
                  shall continue in full force and effect.
                </p>

                <h3>18.3 Waiver</h3>
                <p>
                  No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.
                </p>

                <h3>18.4 Assignment</h3>
                <p>
                  You may not assign or transfer these Terms or your rights without our prior written consent. 
                  ZippGo may assign these Terms at any time without notice.
                </p>

                <h2>19. Contact Information</h2>
                <p>For questions about these Terms, please contact us:</p>
                <ul>
                  <li><strong>Email:</strong> legal@zippgo.in</li>
                  <li><strong>Phone:</strong> +91 98765 43210</li>
                  <li><strong>Address:</strong> ZippGo Mobility Solutions Pvt Ltd, Fraser Road, Patna - 800001, Bihar, India</li>
                </ul>

                <h2>20. Acknowledgment</h2>
                <p>
                  BY USING ZIPPGO SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND 
                  BY THESE TERMS AND CONDITIONS.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8">
                  <p className="font-semibold text-gray-900 mb-2">Important Notice:</p>
                  <p className="text-gray-700">
                    These Terms are legally binding. Please read them carefully. If you have any questions or 
                    concerns, contact our legal team before using the Services.
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