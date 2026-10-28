import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/checklist-gratuito-presenca-digital/checklist.pdf",

  assetPrefix: "/checklist-gratuito-presenca-digital/checklist.pdf/",

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