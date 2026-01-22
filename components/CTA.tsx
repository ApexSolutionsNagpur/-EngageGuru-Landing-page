"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CalendlyPopup from "@/components/CalendlyPopup"; // Add this import

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1e3a61] to-[#2d5790] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e68f86]/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Stop Missing Leads. <br className="hidden md:block" /> Start Closing Faster.
            </h2>
            <p className="text-xl md:text-2xl text-[#dfdbd8] mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses who are transforming their sales process with EngageGuru. Your leads deserve better follow-ups.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#launch"
                className="w-full sm:w-auto bg-white text-[#2d5790] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all flex items-center justify-center shadow-lg"
              >
                Launch Your CRM Now
                <ArrowRight className="ml-2" />
              </Link>
              <div className="w-full sm:w-auto">
                <CalendlyPopup
                  text="Book a Free Demo"
                  className="w-full bg-white/20 text-white border border-white/30 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all"
                  color="transparent"
                  textColor="#ffffff"
                />
              </div>
            </div>
            <p className="mt-8 text-[#dfdbd8] font-medium">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}