const nock = require('nock');
const melinock = nock('https://api.mercadolibre.com/').persist();
const searchMock = require('./search');
const itemMock = require('./item');
const descriptionMock = require('./description')
const suggestMock = require('./suggest');
const categoryMock = require('./category');

melinock
    .get(/\/items\/.*\/description/)
    .reply('200', descriptionMock)
    .get(/\/items\/.*/)
    .reply('200', itemMock)
    .get(/\/categories\/.*/)
    .reply('200', categoryMock);

melinock
    .get('/sites/MLA/search')
    .query(true)
    .reply('200', searchMock);

melinock
    .get('/sites/MLA/autosuggest')
    .query(true)
    .reply('200', suggestMock);