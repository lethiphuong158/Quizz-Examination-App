/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en-US', 'vi'],
    defaultLocale: 'vi',
  },
}

module.exports = nextConfig
