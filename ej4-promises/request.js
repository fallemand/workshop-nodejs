const https = require('https');
const http = require('http');

module.exports = (options) => {
  return new Promise ( (resolve, reject) => {
    const protocol = (options.protocol === 'http') ? http : https;
    delete options.protocol;

    protocol.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        data = JSON.parse(data);
        if (res.statusCode < 200 || res.statusCode > 299) {
          reject(res.statusCode);
        }
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    }).end();
  });
};
