module.exports = {
  basePath: '/admin',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  serverRuntimeConfig: {
    JWT_SECRET: 'changeMe',
  },
  topLevelAwait: true,
};
