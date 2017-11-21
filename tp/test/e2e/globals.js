const config = require('../../config');

module.exports = {
  'to_test_search': `${config.host}:${config.port}`,
  'to_test_items': `${config.host}:${config.port}/app/items/MLA123456789`,
  'environment': "xvfb_desktop",
  'waitForConditionPollInterval': 50,
  'waitForConditionTimeout': 5000,
  'retryAssertionTimeout': 10000,
  'screenshots': './test/e2e/screenshots/',
};