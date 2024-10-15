/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'dist',
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb'
    }
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/'
      },
    ];
  },
};

module.exports = nextConfig;