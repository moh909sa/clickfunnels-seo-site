/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['statics.myclickfunnels.com', 'cdn.prod.website-files.com'],
  },
}

module.exports = nextConfig
