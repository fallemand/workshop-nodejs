const nock = require('nock');
const melinock = nock('https://api.mercadolibre.com/').persist();
const searchMock = require('./search.json')
const suggestMock = require('./suggest.json')
const descriptionMock = require('./description.json')
const itemMock = require('./item.json')
const categoryMock = require('./categories.json')


// Mock Suggest  
melinock
  .get('/sites/MLA/autosuggest')
  .query(true)
  .reply(200, suggestMock);


// Mock Search
melinock
  .get('/sites/MLA/search')
  .query(true)
  .reply(200, searchMock);

  // Mock Item
  melinock
  .get(/\/items\/.*\/description/)
  .reply(200, descriptionMock)
  .get(/\/items\/.*/)
  .reply(200, itemMock)
  .get(/\/categories\/.*/)
  .reply(200, categoryMock)




