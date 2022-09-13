/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    externalDir: true,
    eslint: {
        ignoreDuringBuilds: true
    }
}

module.exports = nextConfig;
