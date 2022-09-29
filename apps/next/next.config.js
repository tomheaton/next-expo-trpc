const withTM = require('next-transpile-modules')([
    "@next-expo-trpc/api",
    "@next-expo-trpc/react",
    "@next-expo-trpc/utils"
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
}

module.exports = withTM(nextConfig);
