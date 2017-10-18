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

const success = (data) => {
    console.log(data);
};

const error = (err) => {
    console.log('error! panic!');
    console.log(err);
};

request(optionsHttps, success, error);
