"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const industries = ["Sales", "Real Estate", "School / Institute", "Other"];

export default function OnboardingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="launch" className="py-24 bg-[#2d5790] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} className="text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Request Received!</h2>
          <p className="text-xl text-[#dfdbd8] max-w-xl mx-auto">
            Our team will contact you within 2 hours to set up your EngageGuru CRM. Get ready to grow!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="launch" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Form Info Side */}
          <div className="md:w-1/3 bg-[#2d5790] p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Launch Your CRM Now</h2>
            <p className="text-[#dfdbd8] mb-8">
              Join 1,000+ businesses who have streamlined their calling and WhatsApp follow-ups with EngageGuru.
            </p>
            <ul className="space-y-4">
              {[
                "Instant Setup",
                "Free Implementation",
                "WhatsApp API Activation",
                "Calling Integration"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-[#e68f86] shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Side */}
          <div className="md:w-2/3 p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                    placeholder="e.g. Apex Solutions"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none bg-white"
                  >
                    <option value="">Select Industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                    placeholder="e.g. +91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  placeholder="e.g. rahul@apex.com"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#2d5790] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1e3a61] transition-all flex items-center justify-center shadow-lg hover:shadow-blue-200"
                >
                  Get Started
                  <Send size={20} className="ml-2" />
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  No credit card required. Free trial available for 14 days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
