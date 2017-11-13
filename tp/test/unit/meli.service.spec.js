const meliService = require('../../services/meli.service');

require('../../mocks');

describe('Test meli.service.js', () => {
  test('it should search', () => {
    return meliService.search('macbook').then((response) => {
      response = JSON.parse(response);
      expect(response.results).toBeDefined();
      expect(response.results.length).toBeGreaterThan(2);
      expect(response.results[0].title).toBeDefined();
      expect(response.results[0].price).toBeDefined();
      expect(response.filters).toBeDefined();
    });
  });

  test('it should get item', () => {
    return meliService.item('MLA12345').then((item) => {
      expect(item.itemData.id).toBeDefined();
      expect(item.categoryData).toBeDefined();
      expect(item.categoryData.path_from_root.length).toBeGreaterThan(2);
      expect(item.itemData.pictures[0].url).toEqual('http://mla-s1-p.mlstatic.com/643519-MLA25984606227_092017-O.jpg');
    });
  });
});
