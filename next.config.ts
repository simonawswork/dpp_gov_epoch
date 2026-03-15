import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dpp_gov_epoch',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
