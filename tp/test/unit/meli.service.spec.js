const meliService = require('../../services/meli.service');
require('../../mocks');

describe('Test meli.service.js',() => {
    test ('It should search',() => {
        return meliService.search('Anillos').then((response) => {
            expect(response.results).toBeDefined();
            expect(response.results.length).toBeGreaterThan(4);
            expect(response.results[0].title).toBeDefined();
            expect(response.results[0].price).toBeDefined();
            expect(response.category).toBeDefined();
        });
    });

    test ('It should get item',() => {
        return meliService.item('MLA 12819239119').then((item) => {
            expect(item.id).toBeDefined();
            expect(item.category).toBeDefined();
            expect(item.results.length).toBeGreaterThan(2);
            expect(item.picture).toEqual('url');
        });
    });
});