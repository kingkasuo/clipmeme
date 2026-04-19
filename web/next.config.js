/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'public',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
