const https = require('https');
const url = 'https://api.mercadolibre.com/sites/MLA/search?q=iphone7';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', (chunk) => {
    data
  });
}).on('error', (err) => {
  console.log(err);
});
