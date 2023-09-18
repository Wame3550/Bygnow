module.exports = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: [
      'www.api.wheelific.com',
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require('./src/scripts/generate-sitemaps');
  //   }

  //   config.experiments = { topLevelAwait: true, layers: true };
  //   return config;
  // },
};
