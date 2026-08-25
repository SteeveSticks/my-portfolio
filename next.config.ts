import type { NextConfig } from "next";

const mediaCache = {
  key: "Cache-Control",
  value: "public, max-age=86400, stale-while-revalidate=604800",
};

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/img/:path*", headers: [mediaCache] },
      { source: "/video/:path*", headers: [mediaCache] },
      { source: "/tech/:path*", headers: [mediaCache] },
    ];
  },
};

export default nextConfig;
