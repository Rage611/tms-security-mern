const { join } = require('path');

/**
 * Puppeteer local cache configuration.
 * Stores the Chrome binary inside the project's .cache directory
 * so it is found correctly on Vercel's build environment.
 */
module.exports = {
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
