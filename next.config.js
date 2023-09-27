// const path = require('path');

// module.exports = {
//   webpack: (config) => {
//     config.resolve.alias['@'] = path.resolve(__dirname);
//     return config;
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
