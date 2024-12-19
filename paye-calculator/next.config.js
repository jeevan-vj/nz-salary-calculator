/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add any webpack configurations here
    return config;
  },
  // Enable docker-specific settings
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: process.env.WATCHPACK_POLLING === 'true' ? 1000 : false,
      aggregateTimeout: 300,
    }
    return config
  },
}

module.exports = nextConfig 