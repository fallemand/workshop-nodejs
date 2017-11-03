const nock = require('nock');
const melinock = nock('https://api.mercadolibre.com/').persist();
const searchMock = require('./search');
const suggestMock = require('./suggest');
const itemMock = require('./item');
const categoryMock = require('./category');
const itemDescriptionMock = require('./itemDescription');

// Search
melinock
  .get(/\/sites\/(.+)*\/search/)
  .query(true)
  .reply(200, searchMock)

// Suggest
melinock
  .get(/\/sites\/(.+)*\/suggest/)
  .query(true)
  .reply(200, suggestMock)

// Item
melinock
  .get(/\/items\/(.+)*\/description/)
  .reply(200, itemDescriptionMock)
  .get(/\/items\/(.+)*/)
  .reply(200, itemMock)
  .get(/\/categories\/(.+)*/)
  .reply(200, categoryMock)
