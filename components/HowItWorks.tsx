"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Capture Leads",
    description: "Automatically import leads from Google Ads, Meta, Portals (IndiaMART, Justdial), and your website in real-time.",
    color: "bg-[#2d5790]"
  },
  {
    number: "02",
    title: "Virtual Calling",
    description: "Launch calls directly from the CRM. Log conversations and send automated WhatsApp intros instantly after every call.",
    color: "bg-[#e68f86]"
  },
  {
    number: "03",
    title: "Smart Automation",
    description: "Set reminders for site visits or follow-up calls. Get automated WhatsApp and SMS alerts for every critical task.",
    color: "bg-[#1e3a61]"
  },
  {
    number: "04",
    title: "Track & Scale",
    description: "Analyze performance through real-time dashboards to identify high-converting channels and top agents.",
    color: "bg-[#334155]"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How EngageGuru Works</h2>
          <p className="text-xl text-gray-600">
            A simple, result-oriented workflow designed for high-performing teams.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-gray-100 -z-10 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className={`w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-8 shadow-xl ring-8 ring-white`}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
