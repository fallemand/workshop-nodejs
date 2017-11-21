const meliService = require('../../services/meli.service');
const meliTransform = require('../../services/meli.transform');
require('../../mocks');

describe('meli.transform', () => {
  it('should transform items', () => {
    return meliService.search('Anillos').then(result => {
        let coolResult = meliTransform.search(result);
        expect(coolResult.query).toBeDefined();
        expect(coolResult.query).toEqual('anillos');
        expect(coolResult.results).toBeDefined();
        expect(coolResult.results.length).toBeGreaterThan(2);
        expect(coolResult.results[0].title).toBeDefined();
        expect(coolResult.results[0].price).toBeDefined();
        expect(coolResult.results[0].free_shipping).toBeDefined();
    })
  });

  it('should transform item', () => {
    return meliService.item('MLA640761245').then(item => {
        let coolItem = meliTransform.item(item);
        expect(coolItem.id).toBeDefined();
        expect(coolItem.title).toEqual('Anillos Acero Quirurgico Combo X Mayor Lote 12 Unidades');
        expect(coolItem.category).toBeDefined();
        expect(coolItem.description).toBeDefined();
        expect(coolItem.price.amount).toEqual(440);
    })
  });

  it('should transform suggest', () => {
    return meliService.suggest('anil').then(item => {
        let coolItem = meliTransform.suggest(item);
        expect(coolItem.query).toBeDefined();
        expect(coolItem.query).toEqual('anil');
        expect(coolItem.results).toBeDefined();
        expect(coolItem.results.length).toBeGreaterThan(2);
    })
  });
});