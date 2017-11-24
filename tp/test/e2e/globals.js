const config = require('../../config');

module.exports = {
  site: `${config.host}:${config.port}/app/`,
  environment: 'xvfb_desktop',
  waitForConditionPollInterval: 50,
  waitForConditionTimeout: 5000,
  retryAssertionTimeout: 10000,
  screenshots: './test/e2e/screenshots/',
};
