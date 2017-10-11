const https = require('https');

const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
  hostname: 'api.mercadolibre.com',
  path: '/sites/MLA/search?q=iphone7'
}

https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', (chunk) => {
    data
  });
}).on('error', (err) => {
  console.log(err);
}).end();
