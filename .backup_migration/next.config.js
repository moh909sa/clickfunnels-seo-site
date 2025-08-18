/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['clickfunnels.com', 'statics.myclickfunnels.com'],
  },
}

module.exports = nextConfig
