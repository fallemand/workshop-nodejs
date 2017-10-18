conts https = require('https');

https.get('https://api.mercadolibre.com/sites/MLA/search?q=iphone7',(resp) => {
    let data = '';

    resp.on('data', chunk => {
        data += chunk;
    });

    resp.on('end', (err) => {
        console.log(JSON.parse(data));
        console.log(err)
    });
});