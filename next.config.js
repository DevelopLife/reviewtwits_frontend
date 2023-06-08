/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // figma의 image.png 사용을 위해서 임시적으로 작성
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reviewtwits.mcv.kr',
        port: '',
        pathname: '/request-images/**',
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.coupangcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    exclude: ['error'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  ...nextConfig,
};
