const meliService = require('../../../services/meli.service');
require('../../../mocks');

describe('meli.service', () => {
  it('should search items', () => {
    return meliService.search('Iphone 7').then(result => {
      expect(result.results).toBeDefined();
    })
  });

  it('should get item', () => {
    return meliService.item('MLM571268838').then(result => {
      expect(result.title).toEqual('Iphone 6 16gb Lte 4g Libres Nuevos Caja Sellados');
      expect(result.description).toBeDefined();
      expect(result.description).toEqual('<p><img src="http://i.imgur.com/ju962cn.jpg" width="922" height="5098" /></p>');
    })
  });
});
