const meliTransform = require('../../servicies/meli.transform');
const meliService = require('../../servicies/meli.service');
require('../../mocks');

describe('Test meli.tranform.js', () => {
  it('it should search', () => {
    return meliTransform.search('Tostadora').then((response) => {
      expect(response.results).toBeDefined();
      expect(response.results.length).toBeGreaterThan(4);
      expect(response.results[0].title).toBeDefined();
      expect(response.results[0].price).toBeDefined();
      expect(response.results[0].thumbnail).toBeDefined();
      expect(response.category).toBeDefined();
    });
  });

  it('it should get item', () => {
    meliService.item('MLA123123123').then((data) => {
      return meliTransform.item(data).then((tranformedItem) => {
        expect(tranformedItem.id).toBeDefined();
        expect(tranformedItem.title).toBeDefined();
        expect(tranformedItem.pictures).toBeGreaterThan(1);
      });
    });
  });

  it('it should suggest', () => {
    return meliTransform.suggest('Iph').then((response) => {
      expect(response.suggestions).toBeDefined();
    });
  });
})
