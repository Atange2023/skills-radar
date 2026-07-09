import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/skills-radar/" : undefined,
};

export default nextConfig;
