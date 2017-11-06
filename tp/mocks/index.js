const nock = require('nock');
const melinock = nock('https://api.mercadolibre.com/').persist();
const searchMock = require('./search');
const itemMock = require('./item');
const suggestMock = require('./suggest');

melinock
    .get('/sites/MLA/search')
    .query(true)
    .reply('200', searchMock);

melinock
    .get(/\/items\/.*/)
    .reply('200', itemMock)

melinock
    .get('/sites/MLA/autosuggest')
    .query(true)
    .reply('200', suggestMock);