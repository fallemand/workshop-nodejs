const request = require('../ej4-promises/request');
const transform = require('./meli.transform');

const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
  hostname: 'api.mercadolibre.com',
  path: ''
};
const protocol = 'https';

class MeliService {
  static search(query, callback) {
    options.path = `/sites/MLA/search?q=${query}`;

    return new Promise((resolve, reject) => {
      return request(options, protocol)
        .then((res) => resolve(transform.results(res)))
        .catch((err) => reject(err));
    });
  }

  static suggest(query, callback) {
    options.hostname = 'http2.mlstatic.com';
    options.path = `/resources/sites/MLA/autosuggest?q=${query}`;

    return request(options, protocol);
  }

  // TODO: calls to Currency and User.
  static item(id, callback) {
    let data;

    const getItem = (id) => {
      options.path = `/items/${id}`;

      return request(options, protocol);
    };

    const getDesc = (id) => {
      options.path = `/items/${id}/description`;

      return request(options, protocol);
    };

    const getCateg = (id) => {
      options.path = `/categories/${id}`;

      return request(options, protocol);
    };

    return Promise.all([
      getItem(id),
      getDesc(id)
    ])
    .then(
      (ItemAndDescRes) => getCateg(ItemAndDescRes[0].category_id)
        .then((CategRes) => transform.item(ItemAndDescRes[0], ItemAndDescRes[1], CategRes))
        .catch((err) => err)
      )
    .catch((err) => err);
  }
}

module.exports = MeliService;
