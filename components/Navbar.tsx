"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="EngageGuru Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2d5790] to-[#e68f86]">
            EngageGuru
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#solutions" className="text-gray-600 hover:text-[#2d5790] transition-colors">
            Solutions
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-[#2d5790] transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-[#2d5790] transition-colors">
            How it Works
          </Link>
          <Link
            href="#launch"
            className="bg-[#2d5790] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#1e3a61] transition-all shadow-lg hover:shadow-blue-200"
          >
            Launch Your CRM Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t py-6 px-6 space-y-4 shadow-xl">
          <Link
            href="#solutions"
            className="block text-gray-600 hover:text-indigo-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="#features"
            className="block text-gray-600 hover:text-indigo-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="block text-gray-600 hover:text-indigo-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How it Works
          </Link>
          <Link
            href="#launch"
            className="block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Launch Your CRM Now
          </Link>
        </div>
      )}
    </nav>
  );
}
