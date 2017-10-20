const http = require('http');
const https = require('https');

function request(options, protocol) {
  return new Promise((resolve, reject) => {
    return ((protocol === 'https') ? https : http).request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => data += chunk);
      res.on('end', (chunk) => {
        data = JSON.parse(data);

        (res.statusCode > 200 || res.statusCode < 299)
          ? resolve(data)
          : reject(data);
      });
    })
    .on('error', (data) => reject({ error: data }))
    .end();
  });
}

module.exports = request;
