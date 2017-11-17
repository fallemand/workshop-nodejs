const meliService = require('../../services/meli.service');
require('../../mocks');

describe('Test meli.service.js', () => {
    test('it should search', () => {
        return meliService.search('Tostadora').then((response) => {
            expect(response.results).toBeDefined();
            expect(response.results.length).toBeGreaterThan(2);
        });
    });

    test('it should bring search suggestions', () => {
        return meliService.suggest('Tostadora').then((response) => {
            expect(response.results).toBeDefined();
            expect(response.results.length).toEqual(6);
        });
    });

    test('it should get item', () => {
        return meliService.item('MLA123123').then((item) => {
            expect(item.id).toBeDefined();
            expect(item.category).toBeDefined();
            expect(item.thumbnail).toEqual('http://mla-s2-p.mlstatic.com/855705-MLA25074487534_092016-I.jpg');
        });
    });
});

