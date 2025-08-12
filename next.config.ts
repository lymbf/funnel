import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
  /* config options here */
    experimental: {
        serverActions: {
            bodySizeLimit: '3mb',
        },
    },
    eslint:{
        ignoreDuringBuilds: true
    }
};

export default nextConfig;
