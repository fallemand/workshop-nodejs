const args = require('minimist')(process.argv);

const site = args["site"] || "caca";

environment = args["e"] || "xvfb_desktop";
module.exports = {
  'site': 'localhost:3000/app',
  'environment': environment,
  'waitForConditionPollInterval': 50,
  'waitForConditionTimeout': 5000,
  'retryAssertionTimeout': 10000,
  'screenshots': './test/e2e/screenshots/',
};
