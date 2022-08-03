/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com'],
  },
  pageExtensions: ['styles.ts'],
};

module.exports = nextConfig;
