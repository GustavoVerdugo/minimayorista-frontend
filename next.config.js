/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['minimayorista.cl']
  },
  async rewrites() {
    return [
      {
        source: '/api/payments.js',
        destination: 'https://minimayorista-web.onrender.com/',
      },
    ]
  },
}

module.exports = nextConfig
