const request = require('./request');
const transform = require('./meli.transform');

const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
  hostname: 'api.mercadolibre.com',
  path: '',
};
const protocol = 'https';

class MeliService {
  static search(query) {
    options.path = `/sites/MLA/search?q=${query}`;

    return new Promise((resolve, reject) => {
      request(options, protocol)
        .then((res) => resolve(transform.search(res)))
        .catch((err) => reject(err));
    });
  }

  static suggest(query) {
    options.path = `/sites/MLA/autosuggest?q=${query}`;

    return new Promise((resolve, reject) => {
      request(options, protocol)
        .then((res) => resolve(transform.suggest(res)))
        .catch((err) => reject(err));
    });
  }

  static item(id) {
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
      getDesc(id),
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
