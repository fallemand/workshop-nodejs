const request = require('./requestPromise');
class MeliService {

  static item(id, response) {
    let item = {};
    const itemOptions = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/items/${id}`
    };
    const descriptionOptions = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/items/${id}/description`
    };

    Promise.all([request(itemOptions), request(descriptionOptions)]).then((data) => {
      item = data[0];
      item.description = data[1];
      const categoryOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/categories/${data[0].category_id}`
      };
      request(categoryOptions).then((data) => {
        item.category = data;
        response(JSON.stringify(item));
      }).catch((err) => {
        response(JSON.stringify(err));
      })
    }).catch((err) => {
      response(JSON.stringify(err));
    })
  }

  static search(query, site, response) {
    const options = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/sites/${site}/search?q=${query}`
    };

    request(options).then((data) => {
      response(JSON.stringify(data));
    }).catch((err) => {
      response(JSON.stringify(err));
    });
  }

  static suggest(query, site, response) {
    const options = {
      protocol: 'http',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: 'http2.mlstatic.com',
      path: `/resources/sites/${site}/autosuggest?q=${query}`
    };

    request(options).then((data) => {
      response(JSON.stringify(data));
    }).catch((err) => {
      response(JSON.stringify(err));
    });
  }

  static itemWithPromise(id) {
    let item = {};
    const itemOptions = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/items/${id}`
    };
    const descriptionOptions = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/items/${id}/description`
    };

    return new Promise((resolve, reject) => Promise.all([request(itemOptions), request(descriptionOptions)]).then((data) => {
      item = data[0];
      item.description = data[1];
      const categoryOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/categories/${data[0].category_id}`
      };
      request(categoryOptions).then((data) => {
        item.category = data;
        resolve(JSON.stringify(item));
      }).catch((err) => {
        reject(JSON.stringify(err));
      })
    }).catch((err) => {
        reject(JSON.stringify(err));
    }))
  }

  static searchWithPromise(query, site) {
    const options = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/sites/${site}/search?q=${query}`
    };

    return request(options);
  }

  static suggestWithPromise(query, site) {
    const options = {
      protocol: 'http',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: 'http2.mlstatic.com',
      path: `/resources/sites/${site}/autosuggest?q=${query}`
    };

    return request(options);
  }
}

module.exports = MeliService;
