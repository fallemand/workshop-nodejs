// En jest expect.html estan todas las assertions podemos hacer.
// Acá no usamos snapshot, esperamos que traiga determinados resultados.

const meliService = require('../../services/meli.service');
require('../../mocks');

describe('test meli.service',() => {

    test('it should search', () => {
        return meliService.search('Tostadora').then((response) => {
            expect(response.results).toBeDefined();
            expect(response.results.length).toBeGreaterThan(2);
            expect(response.results[0].title).toBeDefined();
            expect(response.results[0].price).toBeDefined();
            expect(response.results[0].price).toBeDefined();
            expect(response.category).toBeDefined();
        });
    });

    test('it should get item', () => {
        return meliService.items('MLA123456789').then((item) => {
            expect(item.id).toBeDefined();
            expect(item.category).toBeDefined();
            expect(item.category.length).toBeGreaterThan(2);
        });
    });

    // Tener el breadcrumb terminado.

    // Testear el meliService y el suggest.

    // en el Transform definir que deberia recibir y el resultado ese json transformado.

});