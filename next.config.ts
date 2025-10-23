import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'main-website-api.55-iq.com',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
