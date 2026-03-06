import type { NextConfig } from "next";

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
  "frame-src https://calendly.com https://www.openstreetmap.org",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  [
    "connect-src 'self'",
    "https://calendly.com",
    "https://basemaps.cartocdn.com",
    "https://tiles.basemaps.cartocdn.com",
    "https://tiles-a.basemaps.cartocdn.com",
    "https://tiles-b.basemaps.cartocdn.com",
    "https://tiles-c.basemaps.cartocdn.com",
    "https://tiles-d.basemaps.cartocdn.com",
  ].join(" "),
  "worker-src 'self' blob:",
  "child-src 'self' blob:",
];

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: cspDirectives.join("; ") + ";",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
