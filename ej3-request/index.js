const optionsHttp = {
    protocol: 'http',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.internal.com',
    path: '/sites/MLA/search?q=iphone7'
};

const optionsHttps = {
    protocol: 'https',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.mercadolibre.com',
    path: '/sites/MLA/search?q=iphone7'
};

// Request con callback
// -------------------------------------------------------

// const request = require('./request');

// const success = (data) => {
//     console.log(data);
// };

// const error = (err) => {
//     console.log('error!');
//     console.log(err);
// };

// request(options, success, error);

// Request con promise
// -------------------------------------------------------

const requestPromise = require('./requestPromise');

requestPromise(optionsHttps).then(data => {
    console.log(data);
}).catch(err => {
    console.log('error!');
    console.log(err);
});