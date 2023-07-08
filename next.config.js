// /** @type {import('next').NextConfig} */

// const settings = {
//   devIndicators: {
//     autoPrerender: false,
//   },
//   pwa: {
//     dest: "public",
//   },
// };

// module.exports =
//   process.env.NODE_ENV === "development" ? settings : withPWA(settings);

/** @type {import('next').NextConfig} */

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});
const nextConfig = withPWA({
    // next config
});

module.exports = nextConfig;
