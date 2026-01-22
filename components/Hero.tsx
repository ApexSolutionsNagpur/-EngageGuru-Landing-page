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
  CheckSquare, 
  BarChart2, 
  User, 
  Shield, 
  Settings, 
  CreditCard, 
  Puzzle,
  Search,
  Bell,
  MoreVertical,
  Plus,
  Video,
  FileText,
  FileSpreadsheet,
  IndianRupee,
  GraduationCap,
  Percent,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { useEffect, useState } from "react";
import CalendlyPopup from "@/components/CalendlyPopup";

const brandBlue = "#2d5790";
const brandCoral = "#e68f86";

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

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-indigo-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
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

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 min-h-[120px] md:min-h-[160px]">
            {displayText}
            <span className="animate-pulse text-[#e68f86]">|</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl"
          >
            Scale your sales with Virtual Calling, WhatsApp Automation, AI Insights, and Portal Lead Sync. 
            Manage your entire pipeline in one simple CRM built for teams who take follow-ups seriously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <Link
              href="#launch"
              className="group bg-[#2d5790] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1e3a61] transition-all flex items-center shadow-xl hover:shadow-blue-200"
            >
              Launch Your CRM Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {/* This is the updated section with CalendlyPopup */}
            <div className="flex items-center space-x-2 text-gray-900 font-bold text-lg px-8 py-4 hover:bg-gray-50 rounded-xl transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:border-indigo-300 transition-colors">
                <Play size={20} className="text-indigo-600 ml-1" />
              </div>
              <CalendlyPopup 
                text="Book a Free Demo"
                className="bg-transparent text-gray-900 font-bold text-lg hover:bg-transparent hover:text-[#2d5790] transition-colors p-0"
                color="transparent"
                textColor="#111827"
              />
            </div>
          </motion.div>

          {/* Hero Dashboard Preview - ALL YOUR EXISTING CODE REMAINS HERE */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative w-full rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-[#f1f5f9] flex max-h-[600px] text-left"
          >
            {/* Sidebar */}
            <div className="w-48 bg-[#0f172a] text-gray-400 flex flex-col flex-shrink-0 hidden md:flex">
              <div className="p-4 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                  <span className="text-white font-bold text-sm">Sales CRM</span>
                </div>
                <ChevronLeft size={16} />
              </div>
              
              <div className="flex-1 overflow-y-auto py-4 space-y-6">
                <div>
                  <div className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Main</div>
                  <div className="space-y-1">
                    <div className="px-4 py-2 text-indigo-400 bg-indigo-500/10 border-r-2 border-indigo-500 flex items-center space-x-3 cursor-pointer">
                      <LayoutDashboard size={14} />
                      <span className="text-xs font-medium">Dashboard</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Lead Management</div>
                  <div className="space-y-1">
                    {[
                      { icon: Users, label: "Leads" },
                      { icon: Contact, label: "Contacts" },
                      { icon: MessageSquare, label: "WhatsApp" }
                    ].map((item, idx) => (
                      <div key={idx} className="px-4 py-2 hover:text-white hover:bg-gray-800 flex items-center space-x-3 cursor-pointer transition-colors">
                        <item.icon size={14} />
                        <span className="text-xs font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Reports</div>
                  <div className="space-y-1">
                    <div className="px-4 py-2 text-white bg-indigo-500/20 flex items-center space-x-3 cursor-pointer transition-colors">
                      <BarChart2 size={14} />
                      <span className="text-xs font-medium">Analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">PR</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-white font-bold truncate">Paresh Rao</div>
                    <div className="text-[8px] text-gray-500">Admin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
              {/* Header */}
              <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
                <div className="flex flex-col">
                  <h2 className="text-sm font-bold text-gray-900 leading-none">Analytics & Reports</h2>
                  <span className="text-[10px] text-gray-500 mt-1">Home / Reports</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 mr-4">
                    <button className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-[10px] font-bold flex items-center space-x-1 shadow-sm">
                      <Plus size={12} />
                      <span>New Lead</span>
                    </button>
                    <button className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-md text-[10px] font-bold flex items-center space-x-1 shadow-sm">
                      <Calendar size={12} />
                      <span>Schedule Visit</span>
                    </button>
                    <button className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-md text-[10px] font-bold flex items-center space-x-1 shadow-sm">
                      <Video size={12} />
                      <span>Online Meeting</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-3 border-l border-gray-200 pl-4 text-gray-400">
                    <Search size={16} />
                    <div className="relative">
                      <Bell size={16} />
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">1</span>
                    </div>
                    <Settings size={16} />
                    <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-[10px] font-bold border border-gray-300">P</div>
                  </div>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#f8fafc]">
                {/* Filters */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center space-x-2 shadow-sm">
                      <span className="text-[10px] font-medium text-gray-700">This Month</span>
                      <ChevronRight size={12} className="rotate-90" />
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium bg-white px-3 py-1.5 rounded-lg border border-gray-200 flex items-center space-x-2 shadow-sm">
                      <Calendar size={12} />
                      <span>Jan 01, 2026 - Jan 22, 2026</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center space-x-1 shadow-sm">
                      <FileText size={12} />
                      <span>Export PDF</span>
                    </button>
                    <button className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center space-x-1 shadow-sm">
                      <FileSpreadsheet size={12} />
                      <span>Export Excel</span>
                    </button>
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "Total Leads", value: "3", icon: Users, bg: "bg-blue-50", text: "text-blue-600", trend: "0% vs previous" },
                    { label: "Conversion Rate", value: "0%", icon: Percent, bg: "bg-green-50", text: "text-green-600", trend: "Lead to Enrolled" },
                    { label: "Total Revenue", value: "₹0.0L", icon: IndianRupee, bg: "bg-orange-50", text: "text-orange-600", trend: "0% growth" },
                    { label: "Enrollments", value: "0", icon: GraduationCap, bg: "bg-indigo-50", text: "text-indigo-600", trend: "0% increase" }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
                      <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 ${card.bg} rounded-full opacity-50 group-hover:scale-110 transition-transform`}></div>
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-lg ${card.bg} ${card.text} flex items-center justify-center mb-3`}>
                          <card.icon size={16} />
                        </div>
                        <div className="text-2xl font-black text-gray-900 mb-1">{card.value}</div>
                        <div className="text-[10px] text-gray-500 font-bold mb-2">{card.label}</div>
                        <div className="flex items-center text-[8px] text-green-500 font-bold">
                          <Plus size={8} className="mr-0.5" />
                          <span>{card.trend}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {/* Funnel */}
                  <div className="col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6 overflow-hidden">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xs font-bold text-gray-900 capitalize">Admission Funnel</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: "New Leads", count: 3, percentage: 100, color: "bg-gray-900" },
                        { label: "Contacted", count: 0, percentage: 0, color: "bg-gray-100" },
                        { label: "Visit Scheduled", count: 0, percentage: 0, color: "bg-gray-100" },
                        { label: "Visited", count: 0, percentage: 0, color: "bg-gray-100" },
                        { label: "Applied", count: 0, percentage: 0, color: "bg-gray-100" },
                        { label: "Enrolled", count: 0, percentage: 0, color: "bg-gray-100" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <span className="text-[10px] text-gray-500 w-24 font-medium">{item.label}</span>
                          <div className="flex-1 h-6 bg-gray-50 rounded overflow-hidden relative">
                             <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
                          </div>
                          <span className="text-[10px] font-bold text-gray-900 w-4">{item.count}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-gray-100 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-bold text-gray-900">Lead Sources</h3>
                      </div>
                      <table className="w-full">
                        <thead>
                          <tr className="text-[10px] text-gray-400 font-bold text-left border-b border-gray-50">
                            <th className="pb-2">SOURCE</th>
                            <th className="pb-2 text-center">LEADS</th>
                            <th className="pb-2 text-center">CONVERSIONS</th>
                            <th className="pb-2 text-center">CONV. RATE</th>
                            <th className="pb-2 text-right">REVENUE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-[10px] text-gray-700 font-medium">
                            <td className="py-3 flex items-center space-x-2">
                               <MessageSquare size={12} className="text-green-500" />
                               <span>Whatsapp</span>
                            </td>
                            <td className="py-3 text-center">3</td>
                            <td className="py-3 text-center">0</td>
                            <td className="py-3 text-center">0%</td>
                            <td className="py-3 text-right">₹0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Sidebar stats */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center text-center">
                       <h3 className="text-xs font-bold text-gray-900 self-start mb-6">Team Performance</h3>
                       <div className="py-12">
                         <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-4 mx-auto">
                            <Users size={24} />
                         </div>
                         <p className="text-[10px] text-gray-400 font-medium">No team performance data available</p>
                       </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                       <h3 className="text-xs font-bold text-gray-900 mb-6">Quick Stats</h3>
                       <div className="space-y-4">
                         {[
                           { label: "Avg. Time to Convert", value: "12 days" },
                           { label: "Visits per Lead", value: "1.4" },
                           { label: "Avg. Ticket Size", value: "₹0" },
                           { label: "Cost per Lead", value: "₹850" }
                         ].map((stat, idx) => (
                           <div key={idx} className="flex items-center justify-between border-b border-gray-50 pb-2">
                              <span className="text-[10px] text-gray-500 font-medium">{stat.label}</span>
                              <span className="text-[10px] text-gray-900 font-bold">{stat.value}</span>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated Call Overlay */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
            >
               <div className="bg-white/95 backdrop-blur-xl border border-indigo-200 rounded-2xl shadow-[0_32px_64px_-16px_rgba(79,70,229,0.3)] p-6 w-72 pointer-events-auto transition-all hover:scale-105">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white ring-4 ring-indigo-50">
                        <Users size={20} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <MessageSquare size={10} className="text-white fill-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-indigo-600 font-black uppercase tracking-widest mb-0.5">NEW WHATSAPP LEAD</div>
                      <div className="font-black text-gray-900 text-lg leading-tight">Rahul Sharma</div>
                      <div className="text-[10px] text-gray-500 font-medium">Coming from: <span className="text-indigo-600">Google Ads</span></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100/50">
                      <div className="text-[9px] text-gray-500 font-bold uppercase mb-1">AUTOMATED AI RESPONSE</div>
                      <div className="text-[11px] text-gray-700 italic font-medium leading-relaxed">
                        "Hi Rahul! We've received your inquiry about our MBA program. Would you like to schedule a campus visit?"
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <div className="flex-1 h-9 bg-indigo-600 text-white text-[10px] font-bold rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200 cursor-pointer hover:bg-indigo-700">CALL NOW</div>
                      <div className="flex-1 h-9 bg-white border border-gray-200 text-gray-700 text-[10px] font-bold rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">VIEW LEAD</div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}