const meliService = require('../../servicies/meli.service');
require('../../mocks');

describe('Test meli.service.js', () => {
  it('it should search', () => {
    return meliService.search('Tostadora').then((response) => {
      expect(response.results).toBeDefined();
      expect(response.results.length).toBeGreaterThan(4);
      expect(response.results[0].title).toBeDefined();
      expect(response.results[0].price).toBeDefined();
    })
  });

  it('it should get item', () => {
    return meliService.item('MLA123123123').then((item) => {
      expect(item.id).toBeDefined();
      expect(item.title).toBeDefined();
    })
  });

  it('it should suggest item', () => {
    return meliService.suggest('Iph').then((response) => {
      expect(response.suggested_queries).toBeDefined();
      expect(response.suggested_queries[0].q).toBeDefined();
    })
  })
})

//testear transform los tres metodos
