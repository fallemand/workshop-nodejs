const meliTransform = require('../../services/meli.transform');
const searchMock = require('../../mocks/search');
const searchTransformedMock = require('../../mocks/searchTransformed');
const itemMock = require('../../mocks/item');
const itemTransformedMock = require('../../mocks/itemTransformed');
const suggestMock = require('../../mocks/suggest');
const suggestTransformedMock = require('../../mocks/suggestTransformed');

describe('Test meli.transform.js', () => {
    test('it should transform search response', () => {
        const transformedData = meliTransform.search(searchMock);
        expect(transformedData).toEqual(searchTransformedMock);
    });

    test('it should transform suggest response', () => {
        const transformedData = meliTransform.suggest(suggestMock);
        expect(transformedData).toEqual(suggestTransformedMock);
    });

    // test('it should transform item response', () => {
    //     const transformedData = meliTransform.item(itemMock);
    //     expect(transformedData).toEqual(itemTransformedMock);
    // });
});
