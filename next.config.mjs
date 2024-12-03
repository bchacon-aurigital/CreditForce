/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
    domains: ['welcome.credit-force.com']
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://welcome.credit-force.com' 
    : '',
  basePath: '',
  trailingSlash: true
};

export default nextConfig;