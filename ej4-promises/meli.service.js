const request = require('./request');

const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
  hostname: 'api.mercadolibre.com',
  path: '/sites/MLA/search?q=iphone7'
};

const protocol = 'https';

const success = (data) => {
  console.log(data);
};

const error = (data) => {
  console.log(data);
};

request(options, protocol)
  .then((data) => success(data))
  .catch((data) => error(data));
