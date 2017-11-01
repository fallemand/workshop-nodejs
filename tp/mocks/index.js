const nock = require('nock');
const meliNock = nock('https://api.mercadolibre.com/').persist();
const searchMock =  require('./search.json');
const suggestMock =  require('./suggest.json');
const itemMock =  require('./item.json');

// Search
meliNock
  .get()
  .query()
  .reply();

// Suggest
meliNock
  .get()
  .query()
  .reply();

// Item
meliNock
  .get()
  .query()
  .reply();
