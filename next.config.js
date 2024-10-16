/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'dist',
  experimental: {
    serverActions: true,
  },
  limits: {
    bodySize: 52428800, // 50mb in bytes
  },
};

module.exports = nextConfig;