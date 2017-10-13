const requestPromise = require('./requestPromise');

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

requestPromise(optionsHttps).then(data => {
    console.log(data);
}).catch(err => {
    console.log('Error: ');
    console.log(err);
});

requestPromise(optionsHttp).then(data => {
    console.log(data);
}).catch(err => {
    console.log('Error: ');
    console.log(err);
});
