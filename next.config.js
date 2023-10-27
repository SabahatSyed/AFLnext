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
  //warning fix for aws-crt
  webpack: (config, { isServer, nextRuntime, webpack }) => {
    // Avoid AWS SDK Node.js require issue
    if (isServer && nextRuntime === 'nodejs')
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ })
      )
    return config
  },
}
module.exports = nextConfig
