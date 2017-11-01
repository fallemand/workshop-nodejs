const nock = require('nock');
const meliNock = nock('https://api.mercadolibre.com').persist();
const searchMock = require('./search.json');
const suggestMock = require('./suggest.json');
const itemMock = require('./item.json');
const descMock = require('./desc.json');
const categsMock = require('./categs.json');

meliNock
  .get('/sites/MLA/search')
  .query(true)
  .reply(200, searchMock);

meliNock
  .get('/sites/MLA/autosuggest')
  .query(true)
  .reply(200, suggestMock);

meliNock
  .get(/\/items\/.*\/description/)
  .reply(200, descMock)
  .get(/\/items\/.*/)
  .reply(200, itemMock)
  .get(/\/categories\/.*/)
  .reply(200, categsMock);
