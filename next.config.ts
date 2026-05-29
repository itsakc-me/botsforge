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
   // NOTE: `output: 'export'` requires all dynamic routes to provide
   // `generateStaticParams()` (or be fully static). Removing this by
   // default avoids build-time errors for dynamic app routes. If you
   // intentionally need `output: 'export'`, add `generateStaticParams`
   // to dynamic pages such as `src/app/projects/[...project]/page.tsx`.
   // nextConfig["output"] = "export";
   nextConfig["reactStrictMode"] = true;
   nextConfig["images"]!["unoptimized"] = true;
}

export default nextConfig;
