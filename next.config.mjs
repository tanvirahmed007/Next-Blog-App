// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//     domains: ['example.com', 'images.unsplash.com'],
//   },
//   eslint: {
//     ignoreDuringBuilds: true, // or specify specific rules to ignore
//   },
// };

// export default nextConfig;



// next.config.mjs
const nextConfig = {
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@': process.cwd(), // Use process.cwd() instead of __dirname
  //   };
  //   return config;
  // },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
