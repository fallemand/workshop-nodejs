const TransformService = require('../../services/transform.service');
require('../../mocks');

describe("Transform Service tests", () => {
  describe("search method", () => {
    it('should return a purged object with the necessary data to populate the view when its called with a query string', () => {
      return TransformService.search('papa').then( data => {
        expect(data.path_from_root).toBeDefined();
        expect(data.query).toBe("papa");
        expect(data.results).toBeDefined();
        expect(data.results[0].id).toBeDefined();
        expect(data.results[0].thumbnail).toBeDefined();
        expect(data.results[0].free_shipping).toBeDefined();
        expect(data.results[0].title).toBeDefined();
        expect(data.results[0].price).toBeDefined();
        expect(data.results[0].location).toBeDefined();

      });
    });
  });
  describe("item method", () => {
    it('should return a purged object with the necessary data to populate the view when its called with an item id', () => {
      return TransformService.item('MLA622544573').then( data => {
        expect(data.id).toBe('MLA622544573');
        expect(data.title).toBe('Papa Bastón Congelada - $ 32 /kg - Sin Aceite Agregado');
        expect(data.pictures).toBeDefined();
        expect(data.condition).toBeDefined();
        expect(data.currency_id).toBeDefined();
        expect(data.price).toBeDefined();
        expect(data.path_from_root).toBeDefined();
        expect(data.sold_quantity).toBeDefined();
        expect(data.description).toBeDefined();
      });
    })
  });
  describe("suggest method", () => {
    it('should return an object with suggested queries when the method is called with a partial query string', () => {
      return TransformService.suggest("pap").then( data => {
        expect(data.q).toBe("pap");
        expect(data.suggested_queries).toBeDefined();
      })
    });
  });
});
