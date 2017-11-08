const meliService = require('../../services/meli.service');
require('../../mocks');

describe('Test meli.service.js', () => {
  test('It should search', () => {
    return meliService.search('Tostadora').then((response) => {
      expect(response.results).toBeDefined();
      expect(response.results.length).toBeGreaterThan(2);
      expect(response.results[0].title).toBeDefined();
      expect(response.results[0].price).toBeDefined();
      expect(response.category).toBeDefined();
    });
  });

  test('it should get item', () => {
    return meliService.item('MLA12312334').then((item) => {
      expect(item.id).toBeDefined();
      expect(item.category).toBeDefined();
      expect(item.category.length).toBeGreaterThan(2);
    });
  });
});
