/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liqueous-news-cms.logixsy.com',
      },
    ],
  },
}
module.exports = nextConfig
