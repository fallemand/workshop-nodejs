const request = require('./request.service');

const options = {
  method: 'GET',
  headers: {'Content-type': 'application/json'},
};

exports.itemSync = (id) => {
  options.hostname = 'api.mercadolibre.com';
  options.path = `/items/${id}`;
  return new Promise((resolve, reject) => {
    request(options).then((item) => {
      options.path = `/items/${id}/description`;
      request(options).then((response) => {
        item.text = response.text;
        options.path = `/categories/${item.category_id}`;
        request(options).then((category) => {
          item.path_from_root = category.path_from_root;
          resolve(item);
        });
      });
    }).catch((err) => {
      reject(err);
    });
  });
};

exports.item = (id) => {
  options.hostname = 'api.mercadolibre.com';
  options.path = `/items/${id}`;
  const promiseItem = request(options);

  options.path = `/items/${id}/description`;
  const promiseItemDescription = request(options);

  return new Promise((resolve, reject) => {
    Promise.all([promiseItem, promiseItemDescription]).then((data) => {
      const item = data[0];
      const itemDescription = data[1].text || data[1].plain_text;
      item.text = itemDescription;

      options.path = `/categories/${item.category_id}`;
      request(options).then((category) => {
        item.path_from_root = category.path_from_root;
        resolve(item);
      }).catch((err) => {
        reject(err);
      });
    }).catch((err) => {
      reject(err);
    });
  });
};

exports.search = (query) => {
  options.hostname = 'api.mercadolibre.com';
  options.path = `/sites/MLA/search?limit=6&q=${escape(query)}`;
  return request(options);
};

exports.suggest = (query) => {
  options.hostname = 'api.mercadolibre.com';
  options.path = `/sites/MLA/autosuggest?q=${escape(query)}&v=1`;
  return request(options);
};
