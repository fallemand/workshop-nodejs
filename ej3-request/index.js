const req = require('./request');

const options = {
    protocol: 'https',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.mercadolibre.com',
    path: '/sites/MLA/search?q=iphone7'
};

const error = {
    protocol: 'https',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'dont',
    path: '/exist'
};

req(error)
    .then( (data) => {
        console.log(data);
    }).catch( (err) => {
        console.log(err.toString());
});

