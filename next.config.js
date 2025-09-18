/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  serverExternalPackages: ['gray-matter'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  // Production optimizations
  productionBrowserSourceMaps: false,
  // Enable ISR revalidation
  staticPageGenerationTimeout: 60000,
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  // Bundle optimizations
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/{{member}}',
      skipDefaultConversion: true,
    },
  },
  // Caching optimizations
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|gif|ico|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig