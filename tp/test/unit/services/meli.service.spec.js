const meliService = require('../../../services/meli.service');
require('../../../mocks');

describe('Test meli.service.js', () => {

    test('It should search ', () => {

        return meliService.searchWithPromise('Tostadora', 'MLA').then((response) => {

            expect(response.results).toBeDefined();
            expect(response.results.length).toBeGreaterThan();
            expect(response.results[0].title).toBeDefined();
            expect(response.results[0].price).toBeDefined();
            expect(response.category).toBeDefined();
        })
    });

    test('It should item', () => {

        return meliService.itemWithPromise('MLA12312334').then((item) => {

            expect(item.id).toBeDefined();
            expect(item.category).toBeDefined();
            expect(item.category.length).toBeGreaterThan(2);
            expect(item.picture).toEqual('url..');
        })
    });


    // testear breadcrumb, meli service, suggest, transform
});