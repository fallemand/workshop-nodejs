const https = require('https');
const http = require('http');

module.exports = (options, transform) => {

    const protocol = (options.protocol == 'http') ? http : https;
    delete options.protocol;

    return new Promise((resolve, reject) => {
      protocol.request(options, response => {
        let result = '';

        response.on('data', chunk => {
          result += chunk;
        });

        response.on('end', () => {
          result = JSON.parse(result);
          // Handle http errors
          if (response.statusCode >= 200 || response.statusCode <= 299) {
            if (transform) {
              result = transform(result);
            }
            resolve(result);
          }
          else {
            reject(result);
          }
        })

      }).on('error', function(err) {
        reject(err);
      }).end();
    });
};
