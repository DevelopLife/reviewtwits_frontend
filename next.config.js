/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // figma의 image.png 사용을 위해서 임시적으로 작성
  images: {
    domains: ['reviewtwits.mcv.kr'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
