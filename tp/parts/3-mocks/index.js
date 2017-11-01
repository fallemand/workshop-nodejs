const nock = require('nock');
const melinock = nock('https://api.mercadolibre.com/').persist();

// Mock exact get without queryParams
melinock
  .get('/sites/MLA/search')
  .reply(200, {search: "Buscaste Mock"});

// Mock get (regex) without queryParams
melinock
  .get(/search/)
  .reply(200, {search: "Buscaste Mock"});

// Mock get (function) without queryParams
melinock
  .get((url) => {
    if(url.indexOf('search') > -1) {
      return true;
    }
    return false;
  })
  .reply(200, {search: "Buscaste Mock"});

// Mock exact get with exact queryParams
melinock
  .get('/sites/MLA/search')
  .query({q: 'iphone'})
  .reply(200, {search: "Buscaste iphone"});

// Mock exact get with function queryParams
melinock
  .get('/sites/MLA/search')
  .query((query) => {
    if(query.q.indexOf('iphone') > -1) {
      return true;
    }
    return false;
  })
  .reply(200, {search: "Buscaste iphone"});

// Mock exact get with any queryParams
melinock
  .get('/sites/MLA/search')
  .query(true)
  .reply(200, {search: "Buscaste iphone"});


const optionsHttps = {
  protocol: 'https',
  method: 'GET',
  headers: {'Content-type': 'application/json'},
  hostname: 'api.mercadolibre.com',
  path: '/sites/MLA/search?q=iphone'
};

// Request con callback
//------------------------------------------------
const request = require('./request.service');

request(optionsHttps).then((results) => {
  console.log(results);
}).catch((err) => {
  console.log(err);
});

