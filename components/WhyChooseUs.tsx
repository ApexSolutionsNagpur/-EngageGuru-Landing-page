"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, HeartPulse, Layers } from "lucide-react";

const reasons = [
  {
    title: "Built for Indian Businesses",
    description: "Localized features like IndiaMART/Justdial integration and regional language support.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Zero Friction Setup",
    description: "No complicated implementation. Go live in less than 24 hours with your existing team.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Focus on Follow-ups",
    description: "Designed to eliminate missed leads. Our system keeps nudging until you convert.",
    icon: <HeartPulse className="w-8 h-8" />
  },
  {
    title: "All-in-One Powerhouse",
    description: "Replace calling apps, WhatsApp tools, and Excel sheets with a single CRM.",
    icon: <Layers className="w-8 h-8" />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#12263f] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-20">
          <div className="lg:w-1/3 mb-16 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Why Indian SMBs Trust EngageGuru?</h2>
            <p className="text-[#dfdbd8] text-xl mb-10">
              We understand the unique challenges of sales teams in India. We don't just provide a tool; we provide a growth partner.
            </p>
            <div className="inline-block bg-white text-[#2d5790] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#f4f7fb] transition-all cursor-pointer shadow-xl">
               See the Difference
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/15 transition-all"
              >
                <div className="text-[#e68f86] mb-6 font-bold">{reason.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                <p className="text-[#dfdbd8] leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
