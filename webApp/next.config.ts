import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: true,
    serverActions: {
      allowedOrigins: ['organic-zebra-5vr6w454749cx77.github.dev', 'localhost:3000'],
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
};

export default nextConfig;
