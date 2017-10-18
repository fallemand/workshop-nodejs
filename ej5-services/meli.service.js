const req = require('./request');

class MeliService {
  item(id) {
    return new Promise( (resolve, reject) => {
      let result;
      const itemOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/items/${id}`
      };

      const descriptionOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/items/${id}/description`
      };

      Promise.all([
        req(itemOptions),
        req(descriptionOptions)
      ]).then((data) => {

        result = data[0];
        result.description = data[1];

        const categoryOptions = {
          protocol: 'https',
          method: 'GET',
          headers: {'Content-type': 'application/json'},
          hostname: 'api.mercadolibre.com',
          path: `/categories/${data[0].category_id}`
        };

        req(categoryOptions)
          .then((data) => {
            result.category = data;
            resolve(result);
          }).catch((err) => {
          reject(err);
        });
      }).catch((err) => {
        reject(err);
      })
    });
  }

  search (query) {
      const queryOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/search?q=${query}`
      };

      return req(queryOptions);
  }

  suggest(query) {
      const suggestOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/autosuggest?q=${query}`
      };

      return req(suggestOptions);
  }
}

module.exports = new MeliService();
