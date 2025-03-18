/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add explicit reference to Tailwind
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
