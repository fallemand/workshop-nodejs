const nock = require('nock');
const meliNock = nock('https://api.mercadolibre.com/').persist();
const searchMock = require('./search.json');
const suggestMock = require('./suggest.json');
const itemMock = require('./item.json');
const categoryMock = require('./category.json');
const descriptionMock = require('./description.json');

meliNock
  .get('/sites/MLA/search')
  .query(true)
  .reply('200', searchMock);

meliNock
  .get('/sites/MLA/autosuggest')
  .query(true)
  .reply('200', suggestMock);

meliNock
  .get(/items\/.+\/description/)
  .reply('200', descriptionMock)
  .get(/items\/\w+/)
  .reply('200', itemMock)
  .get(/categories\/.+/)
  .reply('200', categoryMock);




// https://api.mercadolibre.com/items/MLA632591345
//   endpoint description: https://api.mercadolibre.com/items/MLA632591345/description
//   endpoint categoría: https://api.mercadolibre.com/categories/MLA352542
