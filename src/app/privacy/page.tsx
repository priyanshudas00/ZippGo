import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: "Privacy Policy - ZippGo Mobility",
  description: "ZippGo's privacy policy. Learn how we collect, use, protect, and manage your personal information. GDPR compliant data practices.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
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
                  ZippGo Mobility Solutions Pvt Ltd ("ZippGo", "we", "us", or "our") is committed to protecting 
                  your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our vehicle rental services, website, and mobile applications 
                  (collectively, the "Services").
                </p>
                <p>
                  By using our Services, you consent to the data practices described in this policy. If you do 
                  not agree with this policy, please discontinue use of our Services.
                </p>

                <h2>2. Information We Collect</h2>
                <h3>2.1 Personal Information You Provide</h3>
                <p>We collect information that you voluntarily provide when you:</p>
                <ul>
                  <li><strong>Create an account:</strong> Name, email address, phone number, date of birth</li>
                  <li><strong>Complete verification:</strong> Driving license details, Aadhaar/PAN card, address proof</li>
                  <li><strong>Make bookings:</strong> Payment information, billing address</li>
                  <li><strong>Contact support:</strong> Messages, feedback, complaints</li>
                  <li><strong>Partner registration:</strong> Vehicle details, RC, insurance documents, bank account information</li>
                </ul>

                <h3>2.2 Automatically Collected Information</h3>
                <p>When you use our Services, we automatically collect:</p>
                <ul>
                  <li><strong>Location data:</strong> GPS coordinates, geofencing data</li>
                  <li><strong>Device information:</strong> Device type, OS version, unique device identifiers</li>
                  <li><strong>Usage data:</strong> Booking history, ride patterns, app interactions</li>
                  <li><strong>Vehicle data:</strong> Speed, distance traveled, fuel consumption (from IoT devices)</li>
                  <li><strong>Log data:</strong> IP address, browser type, access times</li>
                </ul>

                <h3>2.3 Information from Third Parties</h3>
                <ul>
                  <li><strong>Payment processors:</strong> Transaction details from Razorpay</li>
                  <li><strong>Background checks:</strong> Driving record verification</li>
                  <li><strong>Social media:</strong> If you connect your social media accounts</li>
                  <li><strong>Credit bureaus:</strong> For fraud prevention (with consent)</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use your information to:</p>

                <h3>3.1 Provide Services</h3>
                <ul>
                  <li>Process bookings and payments</li>
                  <li>Verify your identity and eligibility</li>
                  <li>Track vehicle location and usage</li>
                  <li>Manage your account</li>
                  <li>Provide customer support</li>
                </ul>

                <h3>3.2 Improve Services</h3>
                <ul>
                  <li>Analyze usage patterns and trends</li>
                  <li>Develop new features</li>
                  <li>Optimize pricing and operations</li>
                  <li>Conduct research and analytics</li>
                </ul>

                <h3>3.3 Communication</h3>
                <ul>
                  <li>Send booking confirmations and updates</li>
                  <li>Provide customer support</li>
                  <li>Send promotional offers (with consent)</li>
                  <li>Notify about policy changes</li>
                  <li>Send SMS/email notifications</li>
                </ul>

                <h3>3.4 Safety and Security</h3>
                <ul>
                  <li>Prevent fraud and abuse</li>
                  <li>Enforce Terms and Conditions</li>
                  <li>Resolve disputes</li>
                  <li>Monitor for suspicious activity</li>
                  <li>Ensure rider and vehicle safety</li>
                </ul>

                <h3>3.5 Legal Compliance</h3>
                <ul>
                  <li>Comply with legal obligations</li>
                  <li>Respond to legal requests</li>
                  <li>Protect rights and property</li>
                  <li>Enforce agreements</li>
                </ul>

                <h2>4. Information Sharing and Disclosure</h2>
                <h3>4.1 With Partners</h3>
                <p>
                  We share limited information with vehicle partners (name, phone number, booking details) to 
                  facilitate rentals.
                </p>

                <h3>4.2 With Service Providers</h3>
                <p>We share information with third-party service providers who help us operate:</p>
                <ul>
                  <li>Payment processing (Razorpay)</li>
                  <li>SMS and email services</li>
                  <li>Cloud hosting (AWS)</li>
                  <li>Analytics tools (Google Analytics)</li>
                  <li>Customer support software</li>
                  <li>Background verification services</li>
                </ul>

                <h3>4.3 For Legal Reasons</h3>
                <p>We may disclose your information if required to:</p>
                <ul>
                  <li>Comply with laws, regulations, or legal processes</li>
                  <li>Respond to government requests</li>
                  <li>Enforce our Terms and Conditions</li>
                  <li>Protect rights, safety, or property</li>
                  <li>Investigate fraud or security issues</li>
                </ul>

                <h3>4.4 Business Transfers</h3>
                <p>
                  In case of merger, acquisition, or sale of assets, your information may be transferred to 
                  the acquiring entity.
                </p>

                <h3>4.5 With Your Consent</h3>
                <p>
                  We may share information for other purposes with your explicit consent.
                </p>

                <h2>5. Data Security</h2>
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul>
                  <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission</li>
                  <li><strong>Secure storage:</strong> Encrypted databases with access controls</li>
                  <li><strong>Authentication:</strong> Multi-factor authentication for accounts</li>
                  <li><strong>Regular audits:</strong> Security assessments and penetration testing</li>
                  <li><strong>Employee training:</strong> Data protection and privacy training</li>
                  <li><strong>Access controls:</strong> Role-based access to sensitive data</li>
                </ul>
                <p>
                  However, no method of transmission over the internet is 100% secure. We cannot guarantee 
                  absolute security.
                </p>

                <h2>6. Data Retention</h2>
                <p>We retain your information for as long as necessary to:</p>
                <ul>
                  <li>Provide Services to you</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce agreements</li>
                </ul>
                <p>Specific retention periods:</p>
                <ul>
                  <li><strong>Account data:</strong> Until account deletion + 90 days</li>
                  <li><strong>Booking history:</strong> 7 years (for tax/legal compliance)</li>
                  <li><strong>Payment data:</strong> As required by payment regulations</li>
                  <li><strong>Communication logs:</strong> 3 years</li>
                  <li><strong>Vehicle tracking data:</strong> 1 year</li>
                </ul>

                <h2>7. Your Privacy Rights</h2>
                <h3>7.1 Access and Update</h3>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Update or correct inaccurate data</li>
                  <li>Download your data (data portability)</li>
                </ul>

                <h3>7.2 Deletion</h3>
                <p>
                  You can request deletion of your account and personal data. Some information may be retained 
                  for legal or legitimate business purposes.
                </p>

                <h3>7.3 Marketing Communications</h3>
                <p>
                  You can opt-out of promotional emails by clicking the unsubscribe link. You'll still receive 
                  transactional emails (booking confirmations, etc.).
                </p>

                <h3>7.4 Location Data</h3>
                <p>
                  You can disable location services in your device settings. However, this may limit service 
                  functionality.
                </p>

                <h3>7.5 Cookie Preferences</h3>
                <p>
                  You can manage cookie preferences through your browser settings.
                </p>

                <h2>8. Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>Remember your preferences</li>
                  <li>Understand how you use our Services</li>
                  <li>Improve user experience</li>
                  <li>Provide personalized content</li>
                  <li>Analyze traffic and trends</li>
                </ul>

                <h3>Types of Cookies We Use:</h3>
                <ul>
                  <li><strong>Essential cookies:</strong> Required for basic functionality</li>
                  <li><strong>Performance cookies:</strong> Help us improve our Services</li>
                  <li><strong>Functional cookies:</strong> Remember your preferences</li>
                  <li><strong>Targeting cookies:</strong> Deliver relevant ads (with consent)</li>
                </ul>

                <h2>9. Children's Privacy</h2>
                <p>
                  Our Services are not intended for individuals under 18 years of age. We do not knowingly 
                  collect personal information from children. If you believe we have collected information from 
                  a child, please contact us immediately.
                </p>

                <h2>10. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than India, including 
                  countries that may have different data protection laws. We ensure appropriate safeguards are 
                  in place for such transfers.
                </p>

                <h2>11. Third-Party Links</h2>
                <p>
                  Our Services may contain links to third-party websites. We are not responsible for the privacy 
                  practices of these sites. We encourage you to read their privacy policies.
                </p>

                <h2>12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with 
                  an updated "Last Updated" date. Continued use of Services after changes constitutes acceptance 
                  of the modified policy.
                </p>

                <h2>13. Contact Us</h2>
                <p>For privacy-related questions or to exercise your rights, contact us:</p>
                <ul>
                  <li><strong>Data Protection Officer:</strong> privacy@zippgo.in</li>
                  <li><strong>Phone:</strong> +91 98765 43210</li>
                  <li><strong>Address:</strong> ZippGo Mobility Solutions Pvt Ltd, Fraser Road, Patna - 800001, Bihar, India</li>
                </ul>

                <h2>14. Grievance Redressal</h2>
                <p>
                  In accordance with Information Technology Act 2000 and rules made thereunder, the name and 
                  contact details of the Grievance Officer are provided below:
                </p>
                <ul>
                  <li><strong>Name:</strong> Rahul Verma</li>
                  <li><strong>Email:</strong> grievance@zippgo.in</li>
                  <li><strong>Phone:</strong> +91 98765 43216</li>
                </ul>
                <p>
                  The Grievance Officer shall respond to your grievance within 48 hours of receipt.
                </p>

                <h2>15. Consent</h2>
                <p>
                  By using ZippGo Services, you consent to the collection, use, and sharing of your information 
                  as described in this Privacy Policy.
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8">
                  <p className="font-semibold text-gray-900 mb-2">Your Privacy Matters:</p>
                  <p className="text-gray-700">
                    We are committed to protecting your privacy and handling your data responsibly. If you have 
                    any concerns or questions about how we handle your information, please don't hesitate to 
                    contact our privacy team.
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