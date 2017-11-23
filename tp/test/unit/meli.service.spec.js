const MeliService = require('../../services/meli.service');
require('../../mocks');

describe("Meli Service tests", () => {
  describe("search method", () => {
    it('should return an object with search results when the method is called with a query as a parameter', () => {
      return MeliService.search('papa').then( data => {
        expect(data.site_id).toBeDefined();
        expect(data.query).toBe("papa");
        expect(data.results).toBeDefined();
      });
    });
  });
  describe("item method", () => {
    it('should return an object with description, category, and item info when the method is called with an item id', () => {
      return MeliService.item('MLA622544573').then( data => {
        expect(data.id).toBe('MLA622544573');
        expect(data.title).toBe('Papa Bastón Congelada - $ 32 /kg - Sin Aceite Agregado');
        expect(data.pictures).toBeDefined();
        expect(data.condition).toBeDefined();
        expect(data.price).toBeDefined();
        expect(data.category).toBeDefined();
        expect(data.description).toBeDefined();
      });
    })
  });
  describe("suggest method", () => {
    it('should return an object with suggested queries when the method is called with a partial query string', () => {
      return MeliService.suggest("pap").then( data => {
        expect(data.q).toBe("pap");
        expect(data.suggested_queries).toBeDefined();
      })
    });
  });
});
