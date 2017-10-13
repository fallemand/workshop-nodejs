const request = require('./request');

const optionsHttp = {
    protocol:'http',
    method: 'GET',
    headers: {'Content-type': 'aplication/json'},
    hostname: 'api.internal.ml.com',
    path: '/sites/MLA/search?q=iphone7'
};

const optionsHttps = {
    protocol:'https',
    method: 'GET',
    headers: {'Content-type': 'aplication/json'},
    hostname: 'api.mercadolibre.com',
    path: '/sites/MLA/search?q=iphone7'
};

const success = (data) => {
    console.log('data');
    console.log(data);
};

const error = (err) => {
    console.log('err');
    console.log(err);
};

request(optionsHttps, error, success);
request(optionsHttp, error, success);
