import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for better compatibility
  images: {
    unoptimized: true,
  },
  // Trailing slash for better routing
  trailingSlash: true,
};

export default nextConfig;
