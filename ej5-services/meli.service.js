const request = require('./requestPromise');
const  fs = require('fs');

module.exports.item = (id) => {
  const item = {
    protocol:'https',
    method: 'GET',
    headers: {'Content-type': 'aplication/json'},
    hostname: 'api.mercadolibre.com',
    path: `/items/${id}`
  };

  const desc = {
    protocol:'https',
    method: 'GET',
    headers: {'Content-type': 'aplication/json'},
    hostname: 'api.mercadolibre.com',
    path: `/items/${id}/description`
  };

  Promise.all([request(item), request(desc)]).then((data) => {
    request({
      protocol:'https',
      method: 'GET',
      headers: {'Content-type': 'aplication/json'},
      hostname: 'api.mercadolibre.com',
      path: `/categories/${data[0].category_id}`
    });
    fs.writeFile('./meliService-item.txt', JSON.stringify(data[0]), (err) => {
      console.log('El archivo se guardó OK');
    });
  });
};

module.exports.search = (query) => {
  return request({
    protocol:'https',
    method: 'GET',
    headers: {'Content-type': 'aplication/json'},
    hostname: 'api.mercadolibre.com',
    path: `/sites/MLA/search?q=${id}`
  });
};

module.exports.suggest = (query) => {
  return request({
    protocol:'http',
    method: 'GET',
    headers: {'Content-type': 'aplication/json'},
    hostname: 'http2.mlstatic.com',
    path: `/resources/sites/MLA/autosugest?q=${query}`
  });
};
