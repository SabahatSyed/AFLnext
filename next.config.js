/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'afl2024.logixsy.com',
      },
      {
        protocol: 'https',
        hostname: 'afl2024-cms.logixsy.com',
      },
      {
        protocol: 'https',
        hostname: 'afl-website.logixsy.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
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
