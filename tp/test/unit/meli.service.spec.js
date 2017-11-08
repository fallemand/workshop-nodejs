const meliService = require('../../servicies/meli.service');
require('../../mocks');

describe('Test meli.service.js', () => {
  test('it should search', () => {
    return meliService.search('Tostadora').then((response) => {
      expect(response.results).toBeDefined();
      expect(response.results.length).toBeGreaterThan(4);
      expect(response.results[0].title).toBeDefined();
      expect(response.results[0].price).toBeDefined();
      expect(response.category).toBeDefined();
    })
  })

  test('it should get item', () => {
    return meliService.item('MLA123123123').then((item) => {
      expect(item.id).toBeDefined();
    })
  })
})

//hacer unit test meli service suggest, testear transform los tres metodos
