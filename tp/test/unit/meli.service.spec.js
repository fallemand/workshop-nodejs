const meliService = require('../../services/meli.transform');
require('../../mocks');

describe('Test meli.service.js', () => {

  test('it should search', () => {
    return meliService.searchWithPromise('Iphone').then((response) => {
      expect(response.results).toBeDefined();
    })
  });

  test('it should get item', () => {
    return meliService.itemWithPromise('MLA123212').then((item) => {
      expect(item.id).toBeDefined();
      expect(item.category).toBeDefined();
      expect(item.category.path_from_root.length).toBeGreaterThan(2);
    })
  })

});
