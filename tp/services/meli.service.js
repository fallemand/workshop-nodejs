const request = require('./request.service');
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

  return new Promise((resolve,reject) => {
    let itemData, descriptionData, itemResponse, categ = '';

    Promise.all([
      request(item), // Busco itemData
      request(desc) // Busco descriptionData
    ])
    .then((data) => {
      itemData = data[0];
      descriptionData = data[1];
      itemResponse = {
        itemData,
        descriptionData,
      };

      categ = {
        protocol:'https',
        method: 'GET',
        headers: {'Content-type': 'aplication/json'},
        hostname: 'api.mercadolibre.com',
        path: `/categories/${itemData.category_id}`
      };

      request(categ) // Busco categoryData
    
      .then((categoryData)=> {
        itemResponse.categoryData = categoryData;
        
        resolve(itemResponse);// Devuelvo lo buscado
      })
      .catch((err) => {
        reject(err);
      });
    })
    .catch((err) => {
      reject(err);
    });
  });
}

module.exports.search = (query) => {
  return request({
    protocol:'https',
    method: 'GET',
    headers: {'Content-type': 'aplication/json'},
    hostname: 'api.mercadolibre.com',
    path: `/sites/MLA/search?q=${query}`
  });
};

module.exports.suggest = (query) => {
  return request({
    protocol:'https',
    method: 'GET',
    headers: {'Content-type': 'aplication/json'},
    hostname: 'api.mercadolibre.com',
    path: `/sites/MLA/autosuggest?q=${query}`
  });
};
