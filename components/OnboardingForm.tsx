"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, CheckCircle2, Loader2, Phone, Mail, AlertCircle } from "lucide-react";

// API Configuration - Update these for production
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
const API_KEY = process.env.NEXT_PUBLIC_ONBOARD_API_KEY || "onb_aca4b1d27c4b77d384a73d4e0b0527e1d11797009c8166fb2ec9474e29acacaa6";

// Fallback industries in case API fails
const FALLBACK_INDUSTRIES = ["Sales", "Real Estate", "School / Institute", "Other"];

interface FormData {
  business_name: string;
  industry: string;
  contact_person: string;
  mobile: string;
  email: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: {
    reference_id: number;
    submitted_at: string;
  };
}

interface IndustriesResponse {
  success: boolean;
  data: string[];
}

export default function OnboardingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [industries, setIndustries] = useState<string[]>(FALLBACK_INDUSTRIES);
  const [industriesLoading, setIndustriesLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    business_name: "",
    industry: "",
    contact_person: "",
    mobile: "",
    email: "",
  });

  // Common headers for API requests
  const getHeaders = (includeContentType = false) => {
    const headers: HeadersInit = {
      "Accept": "application/json",
      "X-Onboard-Key": API_KEY,
    };
    if (includeContentType) {
      headers["Content-Type"] = "application/json";
    }
    return headers;
  };

  // Fetch industries from API on component mount
  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/public/onboard/industries`, {
          method: "GET",
          headers: getHeaders(),
        });

        if (!response.ok) {
          console.warn("Failed to fetch industries, using fallback");
          return;
        }

        const data: IndustriesResponse = await response.json();
        
        if (data.success && Array.isArray(data.data)) {
          setIndustries(data.data);
        }
      } catch (err) {
        console.warn("Error fetching industries, using fallback:", err);
        // Keep using fallback industries
      } finally {
        setIndustriesLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Get UTM parameters from URL if present
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {
        utm_source: urlParams.get("utm_source") || undefined,
        utm_medium: urlParams.get("utm_medium") || undefined,
        utm_campaign: urlParams.get("utm_campaign") || undefined,
        utm_term: urlParams.get("utm_term") || undefined,
        utm_content: urlParams.get("utm_content") || undefined,
      };

      // Filter out undefined values
      const cleanUtmData = Object.fromEntries(
        Object.entries(utmData).filter(([_, v]) => v !== undefined)
      );

      const response = await fetch(`${API_BASE_URL}/api/v1/public/onboard`, {
        method: "POST",
        headers: getHeaders(true),
        body: JSON.stringify({
          ...formData,
          ...cleanUtmData,
        }),
      });

      const data: ApiResponse = await response.json();

      // Handle different error status codes
      if (response.status === 401) {
        throw new Error("Authentication error. Please refresh and try again.");
      }

      if (response.status === 422) {
        // Validation error - extract first error message
        const validationErrors = (data as any).errors;
        if (validationErrors) {
          const firstError = Object.values(validationErrors)[0];
          throw new Error(Array.isArray(firstError) ? firstError[0] : String(firstError));
        }
        throw new Error(data.message || "Please check your input and try again.");
      }

      if (response.status === 429) {
        throw new Error("Too many requests. Please wait a moment and try again.");
      }

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      if (data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="launch" className="py-24 bg-[#2d5790] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} className="text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Request Received!</h2>
          <p className="text-xl text-[#dfdbd8] max-w-xl mx-auto mb-8">
            Our team will contact you within 2 hours to set up your EngageGuru CRM. Get ready to grow!
          </p>
          
          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="https://wa.me/918669001770?text=Hi%20EngageGuru!%20I%20just%20submitted%20my%20CRM%20request.%20Looking%20forward%20to%20connecting!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+918669001770"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="launch" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Form Info Side */}
          <div className="md:w-1/3 bg-[#2d5790] p-12 text-white flex flex-col justify-center">
            <div className="mb-8 p-3 bg-white rounded-2xl w-fit shadow-sm">
              <img src="/logo1080x1080.png" alt="EngageGuru Logo" className="w-16 h-16 object-contain" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Launch Your CRM Now</h2>
            <p className="text-[#dfdbd8] mb-8">
              Join 1,000+ businesses who have streamlined their calling and WhatsApp follow-ups with EngageGuru.
            </p>
            <ul className="space-y-4">
              {[
                "Instant Setup",
                "Free Implementation",
                "WhatsApp API Activation",
                "Calling Integration"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-white shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-10 pt-8 border-t border-white/20 space-y-3">
              <a href="mailto:crm@engageguru.in" className="flex items-center space-x-3 text-[#dfdbd8] hover:text-white transition-colors">
                <Mail size={18} />
                <span>crm@engageguru.in</span>
              </a>
              <a href="tel:+918669001770" className="flex items-center space-x-3 text-[#dfdbd8] hover:text-white transition-colors">
                <Phone size={18} />
                <span>+91 86690 01770</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-2/3 p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2"
                >
                  <AlertCircle size={20} />
                  <span>{error}</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name</label>
                  <input
                    required
                    type="text"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2d5790] focus:border-[#2d5790] transition-all outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="e.g. Apex Solutions"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                  <select
                    required
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    disabled={isLoading || industriesLoading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2d5790] focus:border-[#2d5790] transition-all outline-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">{industriesLoading ? "Loading..." : "Select Industry"}</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person Name</label>
                  <input
                    required
                    type="text"
                    name="contact_person"
                    value={formData.contact_person}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2d5790] focus:border-[#2d5790] transition-all outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                  <input
                    required
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2d5790] focus:border-[#2d5790] transition-all outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="e.g. +91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2d5790] focus:border-[#2d5790] transition-all outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="e.g. rahul@apex.com"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#2d5790] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1e3a61] transition-all flex items-center justify-center shadow-lg hover:shadow-[#2d5790]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get Started
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  No credit card required. Free trial available for 14 days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
