import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com'
        },
      ],
    },
};

if (process.env.NODE_ENV === "production") {
   nextConfig["basePath"] = "/botsforge";
   nextConfig["output"] = "export";
   nextConfig["reactStrictMode"] = true;
   nextConfig["images"]!["unoptimized"] = true;
}

export default nextConfig;
