const request = require('../ej4-promises/request');

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

    return request(options, protocol);
  }

  static suggest(query, callback) {
    options.hostname = 'http2.mlstatic.com';
    options.path = `/resources/sites/MLA/autosuggest?q=${query}`;

    return request(options, protocol);
  }

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
    ]).then((res) => {
      data = res;

      return getCateg(data[0].category_id).then((res) => {
          let item = data[0];
          item.descriptions_data = data[1];
          item.categories_data = res;

          return item;
        }).catch((err) => err);
    }).catch((err) => err);
  }
}

module.exports = MeliService;
