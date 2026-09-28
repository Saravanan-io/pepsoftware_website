import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable modern image formats for better compression
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pepsoftwares.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "pepsoftwares.com",
        pathname: "/**",
      },
    ],
  },

  // Optimize specific heavy package imports
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@react-three/drei"],
  },

  // Compress assets
  compress: true,

  // Prevent browser caching on localhost during development
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      ],
    },
  ],
};

export default nextConfig;
