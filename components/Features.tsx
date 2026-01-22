"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  MessageSquare, 
  Users, 
  GitMerge, 
  Bell, 
  Puzzle, 
  Mail, 
  Sparkles, 
  MessageCircle, 
  Video, 
  Star, 
  Image as ImageIcon, 
  Video as VideoIcon, 
  Cloud,
  Globe
} from "lucide-react";

const mainFeatures = [
  {
    title: "Virtual Calling",
    description: "Make and receive calls directly from the CRM. Automatically log durations and record responses in one click.",
    icon: <Phone className="w-6 h-6" />
  },
  {
    title: "WhatsApp Automation",
    description: "Send automated updates, handle follow-ups, and engage customers on their favorite messaging app seamlessly.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Portal Integration",
    description: "Automatically capture and sync leads in real-time from IndiaMART, Justdial, and other major B2B portals.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "AI Lead Summaries",
    description: "Leverage AI to automatically summarize conversations and score leads for faster, data-driven decisions.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Email Marketing",
    description: "Run targeted email campaigns, track open rates, and nurture your leads with professional templates.",
    icon: <Mail className="w-6 h-6" />
  },
  {
    title: "SMS Integration",
    description: "Send instant SMS alerts and promotional messages to keep your prospects engaged and informed.",
    icon: <MessageCircle className="w-6 h-6" />
  },
  {
    title: "Multi-Agent Support",
    description: "Assign leads to specific team members and monitor performance across your entire sales force effortlessly.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Video Meetings",
    description: "Schedule and launch Google Meet or Zoom calls directly from the CRM without switching tabs.",
    icon: <Video className="w-6 h-6" />
  },
  {
    title: "Reputation Management",
    description: "Monitor and manage your online reviews and brand presence to build trust and credibility.",
    icon: <Star className="w-6 h-6" />
  }
];

const comingSoonFeatures = [
  {
    title: "Social Media Post Gen",
    description: "AI-powered image and post generation for automated social media marketing.",
    icon: <ImageIcon className="w-5 h-5" />
  },
  {
    title: "AI Video Ad Creation",
    description: "Create high-converting video ads for Meta and LinkedIn using advanced AI tools.",
    icon: <VideoIcon className="w-5 h-5" />
  },
  {
    title: "Google Drive Storage",
    description: "Securely store and manage all your customer documents with native Google Drive support.",
    icon: <Cloud className="w-5 h-5" />
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#e68f86] font-bold text-sm uppercase tracking-widest mb-4 block"
          >
            Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Everything You Need to <span className="text-[#2d5790]">Scale</span>
          </h2>
          <p className="text-xl text-gray-600">
            A comprehensive suite of tools designed to help modern sales teams close deals faster and more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-[#2d5790]/20 group"
            >
              <div className="w-14 h-14 bg-[#2d5790] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 text-sm font-bold text-[#e68f86] uppercase tracking-widest">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 opacity-75">
          {comingSoonFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-dashed border-gray-200 rounded-3xl relative overflow-hidden group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-500 text-sm">{feature.description}</p>
              <div className="absolute top-2 right-2">
                <span className="text-[8px] bg-[#f4f7fb] text-[#2d5790] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">AI Beta</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
