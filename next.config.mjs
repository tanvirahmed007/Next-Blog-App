/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['example.com', 'images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // or specify specific rules to ignore
  },
};

export default nextConfig;
