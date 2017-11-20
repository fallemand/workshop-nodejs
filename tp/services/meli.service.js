const request = require('./request.service');
const  fs = require('fs');

const options = {
  protocol:'https',
  method: 'GET',
  headers: {'Content-type': 'aplication/json'},
  hostname: 'api.mercadolibre.com'
};

module.exports.item = (id) => {

  options.path = `/items/${id}`;

  const desc = {
    protocol:'https',
    method: 'GET',
    headers: {'Content-type': 'aplication/json'},
    hostname: 'api.mercadolibre.com',
    path: `/items/${id}/description`
  };
  
  return new Promise((resolve,reject) => {
    Promise.all([request(options), request(desc)]).then((data) => {

      const item = data[0];
      item.description = data[1].text || data[1].plain_text;

      options.path= `/categories/${data[0].category_id}`;
      request(options).then((categ) => {
        item.category = categ.path_from_root;
        resolve(item);

      }).catch((err) => {
        reject(err);
      });
    }).catch((err) => {
      reject(err);
    });
  });
};

module.exports.search = (query) => {
  options.path= `/sites/MLA/search?q=${query}`;
  return request(options);
};

module.exports.suggest = (query) => {
  options.path= `/sites/MLA/autosuggest?q=${query}`;
  return request(options);
};
