// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

// const { withSentryConfig } = require('@sentry/nextjs');

const API_URL = process.env.NEXT_PUBLIC_FRONT_API_URL
const moduleExports = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },

  async rewrites() {
    return [
      {
        source: '/proxy/clickup/:path*',
        destination: `${API_URL}/:path*`,
      },
    ];
  },

  webpack(config, options) {
    config.module.rules.push({
      // loader: '@svgr/webpack',
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false
                }
              ]
            }
          }
        },
      ],
      issuer: /\.[jt]sx?$/,
      // options: {
      // prettier: false,
      // svgo: true,
      // svgoConfig: {
      //   plugins: [{ removeViewBox: false }],
      // },
      // titleProp: true,
      // },
      test: /\.svg$/,
    });

    return config;
  },

  // sentry: {
  //   hideSourceMaps: true,
  // },
}

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
}

// module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
module.exports = moduleExports
