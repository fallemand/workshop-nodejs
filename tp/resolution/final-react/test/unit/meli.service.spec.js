const expect = require('chai').expect;
const meliService = require('../../services/meli.service');

describe('meli.service', () => {
  it('should search items', () => {
    return meliService.search('Iphone 7').then(result => {
      expect(result).has.property('results');
    })
  })

  it('should get item', () => {
    return meliService.item('MLM571268838').then(result => {
      expect(result.title).equals('Iphone 6 16gb Lte 4g Libres Nuevos Caja Sellados');
      expect(result).has.property('text');
      expect(result.text).equals('<p><img src="http://i.imgur.com/ju962cn.jpg" width="922" height="5098" /></p>');
    })
  })
})
