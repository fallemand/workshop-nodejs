const request = require('./request').request;

const options = {
    protocol: 'https',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.mercadolibre.com',
    path: '/sites/MLA/search?q=iphone'
};

request(options, (data) => {
    console.log('Success!');
    console.log(data);
}, (error) => {
    console.log('Error!');
    console.log(error);
});