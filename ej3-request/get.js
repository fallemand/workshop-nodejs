/**
 * Created by cuanini on 10/11/17.
 */

const https = require('https');

https.get('https://api.mercadolibre.com/sites/MLA/search?q=iphone7', (resp) => {
    let data = '';

    resp.on('data', chunk => {
        data += chunk;
    });

    resp.on('end', () => {
        console.log(data)
    });

}).on('error', (err) => {
    console.log('error: ')
    console.log(err);
});