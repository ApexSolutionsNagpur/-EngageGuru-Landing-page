"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  LayoutDashboard, 
  Users, 
  Contact, 
  MessageSquare, 
  Calendar, 
  BarChart2, 
  Plus,
  Video,
  Search,
  Bell,
  Settings,
  IndianRupee,
  GraduationCap,
  Percent,
  ChevronRight,
  ChevronLeft,
  Facebook,
  Instagram,
  X,
  Globe,
  Phone,
  Shield,
  Zap,
  Mail,
  FileSpreadsheet,
  User,
  CheckSquare
} from "lucide-react";
import { useEffect, useState } from "react";
import CalendlyPopup from "@/components/CalendlyPopup";

const brandBlue = "#2d5790";
const brandCoral = "#e68f86";

interface OrbitItemProps {
  src?: string;
  icon?: any;
  color?: string;
  totalItems: number;
  itemIndex: number;
  radius: number;
  duration: string;
}

const OrbitingItem = ({ src, icon: Icon, color, totalItems, itemIndex, radius, duration }: OrbitItemProps) => {
  const angle = (360 / totalItems) * itemIndex;
  
  return (
    <div 
      className="absolute top-1/2 left-1/2 -ms-5 -mt-5 md:-ms-7 md:-mt-7"
      style={{ 
        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
      }}
    >
      <div 
        className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center overflow-hidden animate-counter-clockwise transition-transform hover:scale-125 hover:z-50 cursor-pointer p-2 md:p-3"
        style={{ "--duration": duration } as any}
      >
        {src ? (
          <img src={src} alt="" className="w-full h-full object-contain" />
        ) : (
          <Icon size={20} style={{ color }} />
        )}
      </div>
    </div>
  );
};

const OrbitRing = ({ radius, duration, children, index }: { radius: number, duration: string, children: React.ReactNode, index: number }) => (
  <div 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200/50 transition-colors animate-clockwise group-hover:border-[#2d5790]/30"
    style={{ 
      width: radius * 2, 
      height: radius * 2,
      "--duration": duration,
      zIndex: 10 - index
    } as any}
  >
    {children}
  </div>
);

const typewriterText = "Calling-First CRM That Helps You Close More Leads.";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + typewriterText[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const rings = [
    {
      radius: 100,
      duration: "15s",
      items: [
        { src: "/icons/whatsapp.png" },
        { icon: Phone, color: "#2d5790" },
        { icon: MessageSquare, color: "#e68f86" }
      ]
    },
    {
      radius: 170,
      duration: "25s",
      items: [
        { icon: Facebook, color: "#1877F2" },
        { icon: Instagram, color: "#E4405F" },
        { icon: X, color: "#000000" },
        { src: "/icons/INDIAMART.NS.png" },
        { src: "/icons/JustDial.png" }
      ]
    },
    {
      radius: 240,
      duration: "40s",
      items: [
        { src: "/icons/ai.png" },
        { src: "/icons/zoom.png" },
        { src: "/icons/gmeet.png" },
        { src: "/icons/sms.png" },
        { icon: Shield, color: "#10b981" },
        { icon: Zap, color: "#f59e0b" },
        { icon: Mail, color: "#ef4444" }
      ]
    }
  ];

  return (
    <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-[#f4f7fb] rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-[#fff5f4] rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-[#f4f7fb] text-[#2d5790] px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e68f86] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e68f86]"></span>
              </span>
              <span>Trusted by 500+ Indian SMBs</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 min-h-[120px] md:min-h-[160px]">
              {displayText}
              <span className="animate-pulse text-[#e68f86]">|</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl"
            >
              Scale your sales with Virtual Calling, WhatsApp Automation, AI Insights, and Portal Lead Sync. 
              Manage your entire pipeline in one simple CRM built for teams who take follow-ups seriously.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-2"
            >
              <Link
                href="#launch"
                className="w-full sm:w-auto group bg-[#2d5790] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1e3a61] transition-all flex items-center justify-center shadow-xl hover:shadow-blue-200"
              >
                Launch Your CRM Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center space-x-2 text-gray-900 font-bold text-lg px-8 py-4 hover:bg-gray-50 rounded-xl transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:border-[#2d5790]/30 transition-colors">
                  <Play size={20} className="text-[#2d5790] ml-1" />
                </div>
                <CalendlyPopup 
                  text="Book a Free Demo"
                  className="bg-transparent text-gray-900 font-bold text-lg hover:bg-transparent hover:text-[#2d5790] transition-colors p-0"
                  color="transparent"
                  textColor="#111827"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Advanced Multi-Ring Orbital Animation */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center min-h-[500px] md:min-h-[600px] relative group overflow-visible">
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Central Logo - "The Sun" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-50 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center transition-transform group-hover:scale-110"
              >
                 <img src="/logo1080x1080.png" alt="EngageGuru" className="w-full h-full object-contain" />
              </motion.div>

              {/* Orbital Rings with Items */}
              {rings.map((ring, rIndex) => (
                <OrbitRing key={rIndex} radius={ring.radius} duration={ring.duration} index={rIndex}>
                  {ring.items.map((item, iIndex) => (
                    <OrbitingItem 
                      key={iIndex}
                      {...item}
                      totalItems={ring.items.length}
                      itemIndex={iIndex}
                      radius={ring.radius}
                      duration={ring.duration}
                    />
                  ))}
                </OrbitRing>
              ))}

              {/* Decorative Ring Pulses */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-[#2d5790]/5 rounded-full animate-pulse-slow -z-10"></div>
            </div>
          </div>
        </div>

        {/* Hero Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl border border-gray-200 shadow-2xl overflow-hidden bg-[#f4f7fb] flex min-h-[400px] md:min-h-[500px] max-h-[700px] text-left mt-24"
        >
          {/* Sidebar */}
          <div className="w-20 md:w-52 bg-[#0f172a] text-gray-400 flex flex-col flex-shrink-0">
            <div className="p-4 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="" className="w-8 h-8 object-contain" />
                <span className="text-white font-bold text-sm hidden md:inline">Sales CRM</span>
              </div>
              <ChevronLeft size={16} className="hidden md:inline" />
            </div>
            
            <div className="flex-1 overflow-y-auto py-4 space-y-6">
              <div>
                <div className="px-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 hidden md:block">Main</div>
                <div className="space-y-0.5">
                  <div className="px-4 py-2 text-gray-400 hover:text-white flex items-center justify-center md:justify-start md:space-x-3 cursor-pointer">
                    <LayoutDashboard size={14} />
                    <span className="text-xs font-medium hidden md:inline">Dashboard</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="px-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 hidden md:block">Lead Management</div>
                <div className="space-y-0.5">
                  {[
                    { icon: Users, label: "Leads" },
                    { icon: Contact, label: "Contacts" },
                    { icon: MessageSquare, label: "WhatsApp" }
                  ].map((item, idx) => (
                    <div key={idx} className="px-4 py-2 hover:text-white flex items-center justify-center md:justify-start md:space-x-3 cursor-pointer transition-colors">
                      <item.icon size={14} />
                      <span className="text-xs font-medium hidden md:inline">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="px-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 hidden md:block">Visits</div>
                <div className="space-y-0.5">
                  <div className="px-4 py-2 hover:text-white flex items-center justify-center md:justify-start md:space-x-3 cursor-pointer">
                    <Calendar size={14} />
                    <span className="text-xs font-medium hidden md:inline">Visit Schedule</span>
                  </div>
                  <div className="px-4 py-2 hover:text-white flex items-center justify-center md:justify-start md:space-x-3 cursor-pointer">
                    <CheckSquare size={14} />
                    <span className="text-xs font-medium hidden md:inline">Check-ins</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="px-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 hidden md:block">Reports</div>
                <div className="space-y-0.5">
                  <div className="px-4 py-2 text-white bg-[#2d5790]/20 border-r-2 border-[#2d5790] flex items-center justify-center md:justify-start md:space-x-3 cursor-pointer">
                    <BarChart2 size={14} />
                    <span className="text-xs font-medium hidden md:inline">Analytics</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="px-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 hidden md:block">Team</div>
                <div className="space-y-0.5">
                  <div className="px-4 py-2 hover:text-white flex items-center justify-center md:justify-start md:space-x-3 cursor-pointer">
                    <User size={14} />
                    <span className="text-xs font-medium hidden md:inline">Agents</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-800 bg-gray-900/50">
              <div className="flex items-center justify-center md:justify-start md:space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#2d5790] flex items-center justify-center text-white text-xs font-bold shrink-0">PR</div>
                <div className="hidden md:block min-w-0">
                  <div className="text-[10px] text-white font-bold truncate">Paresh Rao</div>
                  <div className="text-[8px] text-gray-500">Admin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Preview */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white">
            {/* Header */}
            <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 flex-shrink-0">
              <div className="flex flex-col">
                <h2 className="text-sm font-bold text-gray-900 leading-none">Analytics & Reports</h2>
                <span className="text-[10px] text-gray-400 mt-1">Home / Reports</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="hidden md:flex items-center space-x-2 mr-4 scale-90 lg:scale-100 origin-right">
                  <button className="bg-[#5c67f2] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center space-x-1.5 shadow-sm">
                    <Plus size={12} />
                    <span>New Lead</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center space-x-1.5">
                    <Calendar size={12} />
                    <span>Schedule Visit</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center space-x-1.5">
                    <CheckSquare size={12} />
                    <span>Check in</span>
                  </button>
                  <button className="bg-[#2a9d8f] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center space-x-1.5 shadow-sm">
                    <Video size={12} />
                    <span>Online Meeting</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-3 border-l border-gray-100 pl-4 text-gray-400">
                  <Search size={16} />
                  <div className="relative">
                    <Bell size={16} />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#e68f86] rounded-full text-[7px] text-white flex items-center justify-center font-bold">1</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">P</div>
                </div>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-[#f8fafc]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center space-x-2 text-[10px] font-medium shadow-sm">
                    <span>This Month</span>
                    <ChevronRight size={12} className="rotate-90" />
                  </div>
                  <div className="text-[10px] text-gray-500 flex items-center space-x-2">
                    <Calendar size={12} />
                    <span>Jan 01, 2026 - Jan 22, 2026</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="bg-white border border-gray-100 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center space-x-1.5 shadow-sm">
                    <BarChart2 size={12} />
                    <span>Export PDF</span>
                  </button>
                  <button className="bg-white border border-gray-100 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center space-x-1.5 shadow-sm">
                    <FileSpreadsheet size={12} />
                    <span>Export Excel</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Total Leads", value: "3", bg: "bg-blue-50", text: "text-[#2d5790]", icon: Users, trend: "0% vs previous" },
                  { label: "Conversion Rate", value: "0%", bg: "bg-green-50", text: "text-green-600", icon: LayoutDashboard, trend: "Lead to Enrolled" },
                  { label: "Total Revenue", value: "₹0.0L", bg: "bg-orange-50", text: "text-orange-600", icon: IndianRupee, trend: "0% growth" },
                  { label: "Enrollments", value: "0", bg: "bg-indigo-50", text: "text-indigo-600", icon: GraduationCap, trend: "0% increase" }
                ].map((card, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <div className={`w-8 h-8 rounded-lg ${card.bg} ${card.text} flex items-center justify-center mb-3`}>
                      <card.icon size={16} />
                    </div>
                    <div className="text-xl font-bold text-gray-900 mb-0.5">{card.value}</div>
                    <div className="text-[10px] text-gray-500 font-bold mb-1">{card.label}</div>
                    <div className="text-[9px] text-green-500 font-bold flex items-center">
                       <ArrowRight size={10} className="-rotate-45 mr-1" />
                       {card.trend}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Admission Funnel */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-bold text-gray-900 mb-6">Admission Funnel</h3>
                    <div className="space-y-4">
                      {[
                        { label: "New Leads", count: 3, percentage: 100, color: "bg-black" },
                        { label: "Contacted", count: 0, percentage: 0, color: "bg-gray-100" },
                        { label: "Visit Scheduled", count: 0, percentage: 0, color: "bg-gray-100" },
                        { label: "Visited", count: 0, percentage: 0, color: "bg-gray-100" },
                        { label: "Applied", count: 0, percentage: 0, color: "bg-gray-100" },
                        { label: "Enrolled", count: 0, percentage: 0, color: "bg-gray-100" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <span className="text-[10px] text-gray-500 w-24 font-medium">{item.label}</span>
                          <div className="flex-1 h-6 bg-gray-50 rounded-md overflow-hidden">
                             <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
                          </div>
                          <span className="text-[10px] font-bold text-gray-900 w-4">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lead Sources Table */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-50">
                      <h3 className="text-xs font-bold text-gray-900">Lead Sources</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-gray-50 text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                          <tr>
                            <th className="px-6 py-3">Source</th>
                            <th className="px-6 py-3">Leads</th>
                            <th className="px-6 py-3">Conversions</th>
                            <th className="px-6 py-3">Conv. Rate</th>
                            <th className="px-6 py-3">Revenue</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-[10px]">
                          <tr>
                            <td className="px-6 py-4 flex items-center space-x-2">
                              <MessageSquare size={12} className="text-green-500" />
                              <span className="font-medium">Whatsapp</span>
                            </td>
                            <td className="px-6 py-4 font-bold">3</td>
                            <td className="px-6 py-4">0</td>
                            <td className="px-6 py-4">0%</td>
                            <td className="px-6 py-4 font-bold">₹0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Team Performance */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-bold text-gray-900 mb-6">Team Performance</h3>
                    <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                        <Users size={24} />
                      </div>
                      <p className="text-[10px] text-gray-400 font-medium max-w-[140px]">No team performance data available</p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-bold text-gray-900 mb-6">Quick Stats</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Avg. Time to Convert", value: "12 days" },
                        { label: "Visits per Lead", value: "1.4" },
                        { label: "Avg. Ticket Size", value: "₹0" },
                        { label: "Cost per Lead", value: "₹850" }
                      ].map((stat, idx) => (
                        <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                          <span className="text-[10px] text-gray-500 font-medium">{stat.label}</span>
                          <span className="text-[10px] text-gray-900 font-black">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}