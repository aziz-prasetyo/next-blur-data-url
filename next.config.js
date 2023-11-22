/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.gta5-mods.com',
        port: '',
        pathname: '/q95/images/**'
      }
    ]
  }
};

module.exports = nextConfig;
