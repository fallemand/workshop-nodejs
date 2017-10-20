const https = require('https');
const http = require('http');

module.exports = (options) => {
  return new Promise((resolve, reject) => {
    const protocol = (options.protocol === 'http') ? http : https;
    delete options.protocol;
    protocol.request(options, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        data = JSON.parse(data);
        if(resp.statusCode < 200 || resp.statusCode > 299) {
          reject(data);
        } else {
          resolve(data);
        }
      });
    }).on('error', (err) => {
      reject({err});
    }).end();
  });
};
