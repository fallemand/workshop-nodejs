var expect = require('chai').expect;
var nock = require('nock');
var mocks = require('./meli.service.mocks');

var meliService = require('../services/meli.service');

describe('meli.service', () => {
	it('should search items', () => {
		return meliService.items('Iphone 7').then(result => {
             expect(result).has.property('results');
        })
    })

    it('should get item', () => {
        return meliService.item('MLM571268838').then(result => {
            expect(result.title).equals('Item De Testeo, Por Favor No Ofertar!');
            expect(result).has.property('text');
            expect(result.text).equals('Descripción del item');
        })
    })
})
