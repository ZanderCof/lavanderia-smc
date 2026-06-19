import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const config: NextConfig = {
  // ⚡ FORZA LA RICOMPILAZIONE MODERNA DI QUESTI PACCHETTI:
  transpilePackages: ["framer-motion", "motion-dom"],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pngarts.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },
};

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(config);

export default nextConfig;