const nock = require('nock');
const melinock = nock('https://api.mercadolibre.com/').persist();
const searchMock = require('./search');
const itemMock = require('./item');
const descriptionMock = require('./description');
const categoryMock = require('./category');
const suggestMock = require('./suggest');

melinock
    .get('/sites/MLA/search')
    .query(true)
    .reply('200', searchMock);

melinock
    .get(/\/items\/.*\/description/)
    .reply('200', descriptionMock)
    .get(/\/items\/.*/)
    .reply('200', itemMock)
    .get(/\/categories\/.*/)
    .reply('200', categoryMock);

// melinock
//     .get('/items')
//     .reply('200', itemMock);

// melinock
//     .get('/items')
//     .reply('200', itemMock);

melinock
    .get(/\/sites\/(.+)*\/autosuggest/)
    .reply('200', suggestMock);


