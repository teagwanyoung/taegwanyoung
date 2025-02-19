/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PORT: "3001"
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/naver7ce28398976d92521663a92488cd1e2a.html',
        destination: '/public/naver7ce28398976d92521663a92488cd1e2a.html'
      }
    ]
  }
}

module.exports = nextConfig 