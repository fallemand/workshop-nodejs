const transform = require('../../services/meli.transform');
const searchMock = require('../../mocks/search');
const suggestMock = require('../../mocks/suggest');
const itemMock = require('../../mocks/item');
const descMock = require('../../mocks/desc');
const categsMock = require('../../mocks/categs');

describe('MeliTransform', () => {
  const search = transform.search(searchMock);
  const suggest = transform.suggest(suggestMock);
  const item = transform.item(itemMock, descMock, categsMock);

  test('Should return basic structure for search', () => {
    expect(search.categories).toBeDefined();
    expect(search.results).toBeDefined();
  });

  test('Should return basic structure for suggest', () => {
    expect(suggest.query).toBeDefined();
    expect(suggest.results).toBeDefined();
  });

  test('Should return basic structure for item', () => {
    expect(item.categories).toBeDefined();
    expect(item.item).toBeDefined();
  });
});
