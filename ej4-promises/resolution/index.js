const optionsHttps = {
    protocol: 'https',
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    hostname: 'api.mercadolibre.com',
    path : '/sites/MLA/search?q=iphone7'
};

// Request con callback
//------------------------------------------------
const request = require('./request');

request(optionsHttps).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log('error! panic!');
  console.log(err);
});
