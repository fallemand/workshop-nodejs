const request = require('./request');

const optionsHttps = {
    protocol: 'https',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.mercadolibre.com',
    path: '/sites/MLA/search?q=iphone7'
};

const optionsHttp = {
    protocol: 'http',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.internal.ml.com',
    path: '/sites/MLA/search?q=iphone7'
};

const success = (data) => {
    console.log(data);
};

const error = (err) => {
    console.log(err);
};

request(optionsHttps, success, error);
