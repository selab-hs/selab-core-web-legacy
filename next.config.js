/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  suffix: '.html',
  trailingSlash: true,
};

module.exports = nextConfig;
