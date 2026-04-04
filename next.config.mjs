/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pinit.it.kr" }],
        destination: "https://pinit.it.kr/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
