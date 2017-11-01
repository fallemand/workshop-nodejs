const request = require('./request.service');
const nock = require('nock');
const melinock = nock('https://api.mercadolibre.com/').persist();

melinock
    //.get(/get/)// Tambien se pueden usar expresiones regulares
    .get((url) => {
        return true;
    })
    //.get('/sites/MLA/search')
    .query((query) => { // implementacion con funcion para validar algunas otras cosas
        if(query.q === 'iphone') {
            return true;
        }
        return false;
        // q: 'iphone' // q: true para interceptar cualquier llamada con cualquier query
        
    })
    .reply(200, {
        message: 'mock search'
    });

const optionsHttps = {
    protocol: 'https',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.mercadolibre.com',
    path: '/sites/MLA/search?q=iphone'
};

// Request con callback
// ---------------

request(optionsHttps).then((results) => {
    console.log(results);
}).catch((err) => {
    console.log(err);
});