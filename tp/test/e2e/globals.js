const config = require('../../config');

module.exports = {
  'url_home': `${config.host}:${config.port}`,
  'url_item': `${config.host}:${config.port}/app/items/MLA603220932`,
  'environment': "xvfb_desktop",
  'waitForConditionPollInterval': 50,
  'waitForConditionTimeout': 5000,
  'retryAssertionTimeout': 10000,
  'screenshots': './test/e2e/screenshots/',
};