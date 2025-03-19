/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["framer-motion"],
  experimental: {
    // Adjust optimizations if needed
    esmExternals: 'loose',
  },
};

export default nextConfig;
