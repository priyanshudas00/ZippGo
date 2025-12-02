import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">ZippGo</span>
                <span className="text-xs text-gray-400">MOBILITY</span>
              </div>
            </div>
            <p className="text-sm mb-4">India's smartest mobility platform. Ride Smart. Earn Smarter.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition">Pricing</Link></li>
              <li><Link href="/fleet-management" className="hover:text-blue-400 transition">Fleet Management</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="font-semibold text-white mb-4">For Partners</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/partner" className="hover:text-blue-400 transition">Partner With Us</Link></li>
              <li><Link href="/partner-login" className="hover:text-blue-400 transition">Partner Login</Link></li>
              <li><Link href="/admin-login" className="hover:text-blue-400 transition">Admin Login</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-blue-400 transition">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>ZippGo HQ, Patna, Bihar, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>support@zippgo.in</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-400 mb-2">Available 24/7</p>
              <Link href="/contact">
                <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                  Get Support
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 ZippGo Mobility. All rights reserved. Built with ❤️ in India.</p>
        </div>
      </div>
    </footer>
  );
}