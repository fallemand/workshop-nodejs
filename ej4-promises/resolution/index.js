const requestPromise = require('./requestPromise');

const optionsHttps = {
  protocol: 'https',
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
  hostname: 'api.mercadolibre.com',
  path: '/sites/MLA/search?q=iphone7'
};

const optionsHttp = {
  protocol: 'http',
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
  hostname: 'api.internal.ml.com',
  path: '/sites/MLA/search?q=iphone7'
};

requestPromise(optionsHttps).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
