import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allowed external image domains (add more as needed in Phase 4)
    remotePatterns: [
      // Unsplash — for sourcing editorial photography
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Wikimedia Commons — for quantum hardware photography (free, high-res)
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],

    // Modern formats — Vercel serves WebP/AVIF automatically
    formats: ["image/avif", "image/webp"],

    // Responsive sizes we actually use across the site
    // Hero images, article headers, OG images, thumbnails
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
