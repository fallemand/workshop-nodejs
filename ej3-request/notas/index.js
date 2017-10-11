const https = require('https');

const options = {
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.mercadolibre.com',
    path: '/sites/MLA/search?q=iphone'
};

https.request(options, (resp) => {

    let data = '';

    // En las arrow function si es un solo parametro los () son opcionales
    resp.on('data', (chunk) => {

        data += chunk
    });

    resp.on('end', () => {

        console.log(data);
    })
}).on('error', (err) => {

    console.log(err);
}).end();

// Get simple
https.get('https://api.mercadolibre.com/sites/MLA/search?q=iphone', (resp) => {
    // El objeto resp no trae directamente la data
    // Tenemos que agarrar las porciones del mensaje que nos va trayendo

    let data = ''

    resp.on('data', chunk => {

        data += chunk;
    });

    resp.on('end', () => {

        console.log(data);
    });
}).on('error', (err) => {

    console.error(err);
}).end();