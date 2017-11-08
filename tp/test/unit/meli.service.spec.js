const meliService = require('../../services/meli.service');

require('../../mocks');

describe('Test meli.service.js', () => {
  test('it should search', () => {
    return meliService.search('macbook').then((response) => {
      //   console.log('resultado', response);
      expect(response.results).toBeDefined();
      expect(response.results.length).toBeGreaterThan(2);
      expect(response.results[0].title).toBeDefined();
      expect(response.results[0].price).toBeDefined();
      expect(response.categories).toBeDefined();
    });
  });

  test('it should get item', () => {
    return meliService.item('MLA12345').then((item) => {
      expect(item.id).toBeDefined();
      expect(item.categories).toBeDefined();
      expect(item.categories.length).toBeGreaterThan(2);
      expect(item.picture).toEqual('http://mla-s1-p.mlstatic.com/404901-MLA20438528116_102015-O.jpg');
    });
  });
});
