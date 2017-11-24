const service = require('../../services/meli.service');
require('../../mocks');

describe('MeliService', () => {
  const query = 'macbook';
  const itemId = 'MLA680256068';

  test('Should search and return at least 1 result', () => {
    service.search(query)
      .then((response) => {
        expect(response.results).toBeDefined();
        expect(response.results.length).toBeGreaterThanOrEqual(1);
      });
  });

  test('Should search and return at least 1 category', () => {
    service.search(query)
      .then((response) => {
        expect(response.categories).toBeDefined();
        expect(response.categories.length).toBeGreaterThanOrEqual(1);
      });
  });

  test('Should suggest and return at least 1 result', () => {
    service.suggest(query)
      .then((response) => {
        expect(response.results).toBeDefined();
        expect(response.results.length).toBeGreaterThanOrEqual(1);
      });
  });

  test('Should suggest and return the searched query', () => {
    service.suggest(query)
      .then((response) => {
        expect(response.query).toBeDefined();
        expect(response.query).toEqual(query);
      });
  });

  test('Should return the requested item', () => {
    service.item(itemId)
      .then((response) => {
        expect(response.item).toBeDefined();
        expect(response.item.id).toEqual(itemId);
      });
  });

  test('Should return categories for the requested item', () => {
    service.item(itemId)
      .then((response) => {
        expect(response.categories).toBeDefined();
        expect(response.categories.length).toBeGreaterThanOrEqual(1);
      });
  });
});
