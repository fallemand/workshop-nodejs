const nock = require('nock');
const melinock = nock('https://api.mercadolibre.com').persist();
const searchMock = require('./search.json');
const itemMock = require('./item.json');
const itemDescriptionMock = require('./item-description.json');
const categoryMock = require('./category.json');

//Search mocks
melinock
    .get('/sites/MLA/search')
    .query(true)
    .reply(200, searchMock);

//Item mocks
melinock
    .get(/\/items\/.*/)
    .reply(200, itemMock)
    .get(/\/items\/.*\/description/)
    .reply(200, itemDescriptionMock)
    .get(/\/categories\/.*/)
    .reply(200, categoryMock);
