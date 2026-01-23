"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import Clarity from "@microsoft/clarity";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Initialize Microsoft Clarity
    Clarity.init("v601il0b3i");

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4 items-end">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918669001770?text=May%20i%20know%20more%20about%20%22EngageGuru%20CRM%22" // WhatsApp link with pre-filled message
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "contact_whatsapp", {
              event_category: "Conversion",
              event_label: "Floating WhatsApp Button"
            });
          }
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-green-300/50 transition-all cursor-pointer relative group"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp text-3xl text-white"></i>
        <span className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 text-gray-600 rounded-full shadow-lg hover:border-indigo-300 hover:text-indigo-600 transition-all"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
