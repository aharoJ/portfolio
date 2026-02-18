/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    // ignoreDuringBuilds: true, -- ERROR 
  },
};

export default nextConfig;
