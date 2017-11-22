const meliService = require('../../../services/meli.service');
require('../../../mocks');

describe('Test meli.service.js', () => {

    test('It should search ', () => {
        return meliService.searchWithPromise('Tostadora', 'MLA').then((response) => {

            expect(response.results).toBeDefined();
            expect(response.results.length).toBeGreaterThan(0);
            expect(response.results[0].title).toBeDefined();
            expect(response.results[0].price).toBeDefined();
            expect(response.categories).toBeDefined();
        })
    });

    test('It should item', () => {
        return meliService.itemWithPromise('MLA12312334').then((item) => {

            expect(item.title).toBeDefined();
            expect(item.price).toBeDefined();
            expect(item.sold_quantity).toBeDefined();
            expect(item.thumbnail).toBeDefined();
            expect(item.state_name).toBeDefined();
            expect(item.category).toBeDefined();
            expect(item.category.path_from_root.length).toBeGreaterThan(0);
            expect(item.pictures.length).toBeGreaterThan(0);
        })
    });
});
