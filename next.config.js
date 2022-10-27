/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['minimayorista.cl']
  }
}

module.exports = nextConfig
