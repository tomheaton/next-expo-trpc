/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: [
      "@next-expo-trpc/api",
    ],
  },
}

module.exports = nextConfig;
