const nock = require('nock');
const meliNock = nock('https://api.mercadolibre.com/').persist();
const searchMock =  require('./search.json');
const suggestMock =  require('./suggest.json');
const itemMock =  require('./item.json');
const descriptionMock =  require('./description.json');
const categoriesMock =  require('./categories.json');

// Search --> localhost:3000/api/search?q=XBOX
meliNock
  .get('/sites/MLA/search')
  .query(true)
  .reply(200, searchMock);

// Suggest --> localhost:3000/api/suggest?q=XB
meliNock
  .get('/sites/MLA/autosuggest')
  .query(true)
  .reply(200, suggestMock);

// Item --> localhost:3000/api/items/MLB632591345
meliNock
  .get(/\/items\/.*\/description/)
  .reply(200, descriptionMock)
  .get(/\/items\/.*/)
  .reply(200, itemMock)
  .get(/\/categories\/.*/)
  .reply(200, categoriesMock);
