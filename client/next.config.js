// next.config.js
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  distDir: "../.next/",
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'pages', 'components')
    return config;
  }
  /* config options here */
});
