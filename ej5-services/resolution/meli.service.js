const request = require('./requestPromise');
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
      
      fs.writeFile('./meliService-item.txt', JSON.stringify(data[0]), (err) => {
        console.log('El archivo de item se guardó OK');
      });
      fs.writeFile('./meliService-desc.txt', JSON.stringify(data[1]), (err) => {
        console.log('El archivo de descripciones se guardó OK');
      });

      options.path= `/categories/${data[0].category_id}`;
      request(options).then((categ) => {
        fs.writeFile('./meliService-categ.txt', JSON.stringify(categ), (err) => {
          console.log('El archivo de categorias se guardó OK');
        });

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
