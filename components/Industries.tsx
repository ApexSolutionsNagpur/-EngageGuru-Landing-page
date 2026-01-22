"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, GraduationCap, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    title: "High-Velocity Sales",
    icon: <Briefcase className="w-8 h-8 text-[#2d5790]" />,
    description: "Built for teams managing large lead volumes. Never let a prospect go cold with automated reminders.",
    benefits: [
      "Virtual calling with auto-logs",
      "Dynamic sales pipelines",
      "WhatsApp & SMS automation",
      "Lead source tracking"
    ],
    accent: "bg-[#f4f7fb]",
    border: "border-[#dfdbd8]"
  },
  {
    title: "Real Estate",
    icon: <Building2 className="w-8 h-8 text-[#e68f86]" />,
    description: "Close properties faster by capturing leads from portals and managing site visits effectively.",
    benefits: [
      "Integrated portal lead capture",
      "Automated site visit scheduling",
      "Agent calling performance",
      "Inventory & deal management"
    ],
    accent: "bg-[#fff5f4]",
    border: "border-[#e68f86]/20"
  },
  {
    title: "Education & Institutes",
    icon: <GraduationCap className="w-8 h-8 text-emerald-600" />,
    description: "Streamline student admissions. Empower your counselors and keep parents updated via WhatsApp.",
    benefits: [
      "Inquiry & counselor tracking",
      "Demo & visit management",
      "KYC & document workflows",
      "Parent communication hub"
    ],
    accent: "bg-emerald-50",
    border: "border-emerald-100"
  }
];

export default function Industries() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored for Your Industry</h2>
          <p className="text-xl text-gray-600">
            Every business is different. EngageGuru comes with specialized workflows for Sales, Real Estate, and Education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${item.border} ${item.accent} flex flex-col h-full shadow-sm hover:shadow-xl transition-all`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{item.description}</p>
              
              <div className="space-y-4 pt-6 border-t border-gray-100/50">
                <p className="font-bold text-sm text-gray-400 uppercase tracking-wider">How we help you convert:</p>
                {item.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-gray-400 mt-1 shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
