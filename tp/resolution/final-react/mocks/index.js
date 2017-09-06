const nock = require('nock');
const searchMock = require('./search.json');
const itemMock = require('./item.json');
const itemDescriptionMock = require('./item-description.json');
const categoryMock = require('./category.json');

const melinock = nock('https://api.mercadolibre.com/').persist();

// Search mocks
melinock
  .get('/sites/MLA/search')
  .query(true)
  .reply(200, searchMock);

// Item mocks
melinock
  .get(/\/items\/.*\/description/)
  .reply(200, itemDescriptionMock)
  .get(/\/items\/.*/)
  .reply(200, itemMock)
  .get(/\/categories\/.*/)
  .reply(200, categoryMock);
