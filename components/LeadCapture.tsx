"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Phone, Database, Globe } from "lucide-react";

export default function LeadCapture() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#e68f86]/10 text-[#e68f86] px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          >
            <Zap size={16} className="fill-[#e68f86]" />
            <span>INSTANT SYNC TECHNOLOGY</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Capture Leads from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5790] to-[#e68f86]">Top Portals</span> Automatically
          </h2>
          <p className="text-xl text-gray-600">
            Stop manually entering data. EngageGuru connects directly with India's largest B2B and local search engines to instantly fetch and organize your leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* IndiaMart Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:border-[#2d5790]/20 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d5790]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700 ease-out"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#2d5790]/10 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8 text-[#2d5790]" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">IndiaMART</h3>
              <p className="text-[#2d5790] font-medium mb-6">B2B Marketplace Integration</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time Buy Leads sync",
                  "Auto-assign to relevant sales agent",
                  "Instant WhatsApp greeting sent",
                  "Filter by category and location"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-sm font-bold text-[#2d5790] group-hover:translate-x-2 transition-transform cursor-pointer">
                <span>Connect IndiaMART Account</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.div>

          {/* JustDial Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:border-[#e68f86]/20 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e68f86]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700 ease-out"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#e68f86]/10 rounded-2xl flex items-center justify-center mb-8">
                <Phone className="w-8 h-8 text-[#e68f86]" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Justdial</h3>
              <p className="text-[#e68f86] font-medium mb-6">Local Search Engine Integration</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Capture local inquiries instantly",
                  "Separate leads by business listing",
                  "Auto-verification via OTP (optional)",
                  "Zero delay in first response"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-sm font-bold text-[#e68f86] group-hover:translate-x-2 transition-transform cursor-pointer">
                <span>Connect Justdial Account</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Unified View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-16 bg-[#0f172a] rounded-3xl p-1 shadow-2xl"
        >
          <div className="bg-[#1e293b] rounded-[22px] p-6 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">One Dashboard for All Your Leads</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-70">
              <span className="text-xl font-bold text-white">Justdial</span>
              <span className="text-gray-600">+</span>
              <span className="text-xl font-bold text-white">IndiaMART</span>
              <span className="text-gray-600">+</span>
              <span className="text-xl font-bold text-white">Facebook Ads</span>
              <span className="text-gray-600">+</span>
              <span className="text-xl font-bold text-white">Website</span>
              <span className="text-gray-600">=</span>
              <div className="bg-[#2d5790] px-4 py-1 rounded-lg text-white font-bold">EngageGuru CRM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
