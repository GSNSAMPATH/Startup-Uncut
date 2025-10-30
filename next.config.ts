import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/diatamf9x/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
    ],
  },
  
};

export default nextConfig;
