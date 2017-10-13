/**
 * Created by cuanini on 10/13/17.
 */

const requestPromise = require('./requestPromise');

class meliService {

  static item(id) {
    const optionsHttps = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/items/${id}`
    };

    const optionsHttpsDesc = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/items/${id}/description`
    };

    const optionsHttpsCateg = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: '/categories/'
    };


    return new Promise((resolve, reject) => {
      let dataFinal;
      Promise.all([requestPromise(optionsHttps), requestPromise(optionsHttpsDesc)]).then((data) => {
        dataFinal = data[0];
        dataFinal.description = data[1];

        optionsHttpsCateg.path = '/categories/' + data[0].category_id;
        requestPromise(optionsHttpsCateg).then((data) => {
          dataFinal.category = data;
          resolve(dataFinal);
        }).catch((err) => {
          reject(err);
        })
      }).catch((err) => {
        reject(err)
      });
    });


  }

  static search(query) {
    const optionsHttps = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: '/sites/MLA/search?q=${query}'
    };

    return requestPromise(optionsHttps);
  }

  static suggest(query) {
    const optionsHttps = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/sites/MLA/autosuggest?q=${query}`
    };

    return requestPromise(optionsHttps);
  }
}

module.exports = meliService;
