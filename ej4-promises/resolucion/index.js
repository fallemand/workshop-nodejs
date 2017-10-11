const requestPromise = require('./requestPromise');

const options = {
    protocol: 'https',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.mercadolibre.com',
    path: '/sites/MLA/search?q=iphone'
};

requestPromise(options)
    .then((data) => {
        console.log('Success!');
        console.log(data);
    })
    .catch((err) => {
        console.log('Error!');
        console.log(err);
    });