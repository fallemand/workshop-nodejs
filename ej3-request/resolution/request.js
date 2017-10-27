const https = require('https');
const http = require('http');

module.exports = (options, success, error) => {

  const protocol = (options.protocol == 'http') ? http : https;
  delete options.protocol;

  protocol.request(options, response => {
    let result = '';

    response.on('data', chunk => {
      result += chunk;
    });

    response.on('end', () => {
      result = JSON.parse(result);
      // Handle http errors
      if (response.statusCode >= 200 && response.statusCode <= 299) {
        success(result);
      }
      else {
        error(result);
      }
    })

  }).on('error', function (err) {
    error(err);
  }).end();
};
