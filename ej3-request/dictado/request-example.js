const https = require('https');

const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    hostname: 'api.mercadolibre.com',
    path : '/sites/MLA/search?q=iphone7'
};

https.request(options, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        console.log(data);
    });
}).on('error', (err) => {
    console.log(err);
}).end();
