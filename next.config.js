module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  env: {
    STRAPI_URI: process.env.STRAPI_URI,
  },
};
