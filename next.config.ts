
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false, // This removes the X-Powered-By: Next.js header
  // Optional: Add these to customize more aspects
  generateBuildId: () => 'my-custom-build-id',
  productionBrowserSourceMaps: true, // Optional for debugging
};

export default nextConfig;