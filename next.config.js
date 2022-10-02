/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n : {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // images: {
  //   domains: ['sisijemimah.com','pbs.twimg.com','wallpapercave.com','netstorage-sportsbrief.akamaized.net','scontent-los2-1.xx.fbcdn.net']
  // }
}

module.exports = nextConfig
