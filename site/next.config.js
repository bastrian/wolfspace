/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Wolf Spacehub',
    description: 'Storage for Wolf Docker Stuff.',
    icon: '/img/logo.svg',
    listUrl: 'https://bastrian.github.com/wolfspace/',
    contactUrl: 'https://github.com/bastrian/wolfspace/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/wolfspace/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
