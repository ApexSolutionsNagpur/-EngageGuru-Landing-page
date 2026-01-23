"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
             <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="EngageGuru Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2d5790] to-[#e68f86]">
                EngageGuru
              </span>
            </Link>
            <p className="text-gray-500 max-w-xs">
              The calling-first, WhatsApp-native CRM built for Indian Sales, Real Estate, and Educational Institutes.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#2d5790] shadow-sm hover:shadow-md transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#2d5790] shadow-sm hover:shadow-md transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#2d5790] shadow-sm hover:shadow-md transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#2d5790] shadow-sm hover:shadow-md transition-all">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="#solutions" className="hover:text-[#2d5790] transition-colors">Sales Teams</Link></li>
              <li><Link href="#solutions" className="hover:text-[#2d5790] transition-colors">Real Estate Agencies</Link></li>
              <li><Link href="#solutions" className="hover:text-[#2d5790] transition-colors">Schools & Institutes</Link></li>
              <li><Link href="#solutions" className="hover:text-[#2d5790] transition-colors">Agencies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Product</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="#features" className="hover:text-[#2d5790] transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-[#2d5790] transition-colors">How it Works</Link></li>
              <li><Link href="#" className="hover:text-[#2d5790] transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-[#2d5790] transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-start space-x-2">
                <span className="text-[#2d5790]">📧</span>
                <a href="mailto:crm@engageguru.in" onClick={() => (window as any).gtag?.('event', 'contact_email', { event_category: 'Contact', event_label: 'Footer Email' })} className="hover:text-[#2d5790] transition-colors">crm@engageguru.in</a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#2d5790]">📞</span>
                <a href="tel:+918669001770" onClick={() => (window as any).gtag?.('event', 'contact_call', { event_category: 'Contact', event_label: 'Footer Call' })} className="hover:text-[#2d5790] transition-colors">+91 86690 01770</a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">💬</span>
                <a href="https://wa.me/918669001770" target="_blank" rel="noopener noreferrer" onClick={() => (window as any).gtag?.('event', 'contact_whatsapp', { event_category: 'Contact', event_label: 'Footer WhatsApp' })} className="hover:text-green-600 transition-colors">WhatsApp Us</a>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <ul className="space-y-3 text-gray-500 text-sm">
                <li><Link href="#" className="hover:text-[#2d5790] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#2d5790] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 EngageGuru CRM. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium text-gray-500">Powered by Apex Solutions</p>
        </div>
      </div>
    </footer>
  );
}
