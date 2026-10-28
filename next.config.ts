import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/checklist",

  assetPrefix: "/checklist/",

  images: {
    unoptimized: true,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;