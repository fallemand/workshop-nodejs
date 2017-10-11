const http = require('http');
const https = require('https');

function request(options, protocol, success, error) {
  ((protocol === 'http') ? http : https).request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => data += chunk);
    res.on('end', (chunk) => {
      data = JSON.parse(data);

      (res.statusCode < 200 || res.statusCode > 299)
        ? success(data)
        : error(data);
    });
  })
  .on('error', (data) => {
    error({ error: data });
  })
  .end();
}

module.exports = request;
