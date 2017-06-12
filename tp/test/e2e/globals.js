var args = require('minimist')(process.argv),
    site = args["site"] || "caca";
    environment = args["e"] || "xvfb_desktop";
module.exports = {
    'site': 'localhost:3000',
    'environment': environment,
    'waitForConditionPollInterval': 50,
    'waitForConditionTimeout':5000,
    'retryAssertionTimeout': 10000,
    'screenshots': './test/e2e/screenshots/',
};
