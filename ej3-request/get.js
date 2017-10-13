//get responde con chunks - pedazos de respuesta que va enviando a medida que la va obteniendo
//nosotros debemos ir acumulando cada uno de ellos
const https = require('https');

https.get('https://api.mercadolibre.com/sites/MLA/search?q=iphone7', (resp) => {
    let data = '';

    resp.on('data', chunk => {
        data += chunk;
    });

    resp.on('end', chunk => {
        console.log(JSON.parse(data));
    });

}).on('error', chunk => {
    console.log('error: ');
    console.log(err);
});

//Ejemplo usando request

https.request(options, (resp) => {
    let data = '';

    resp.on('data', chunk => {
        data += chunk;
    });

    resp.on('end', chunk => {
        console.log(JSON.parse(data));
    });

}).on('error', chunk => {
    console.log('error: ');
    console.log(err);
}).end();
