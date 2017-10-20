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
        let cleanItemData = {};
        cleanItemData.id = item.id;
        cleanItemData.site_id = item.site_id;
        cleanItemData.title = item.title;
        cleanItemData.price = item.price;
        cleanItemData.currency_id = item.currency_id;
        cleanItemData.sold_quantity = item.sold_quantity;
        cleanItemData.condition = item.condition;
        cleanItemData.pictures = item.pictures;
        cleanItemData.free_shipping = item.shipping.free_shipping;
        cleanItemData.description = {};
        cleanItemData.description.text = item.description.text;
        cleanItemData.description.plain_text = item.description.plain_text;
        cleanItemData.category = {};
        cleanItemData.category.id = item.category.id;
        cleanItemData.category.name = item.category.name;
        cleanItemData.category.path_from_root = item.category.path_from_root;
        console.log(cleanItemData);
        resolve(JSON.stringify(cleanItemData));
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

    return new Promise ((resolve, reject) => {
      request(options).then((data) => {
        let cleanData = {};
        let cleanResults = [];
        cleanData.site_id = data.site_id;
        cleanData.path_from_root = data.filters[0].values[0].path_from_root;
        const results = data.results;
        results.forEach((result) => {
          let res = {};
          res.id = result.id;
          res.title = result.title;
          res.price = result.price;
          res.currency_id = result.currency_id;
          res.free_shipping = result.shipping.free_shipping;
          res.state_name = result.address.state_name;
          res.thumbnail = result.thumbnail;
          res.permalink = result.permalink;
          cleanResults.push(res);
        });
        cleanData.results = cleanResults;
        resolve(cleanData);
      }).catch((err) => {
        reject(err);
      })
    })
  }

  static suggestWithPromise(query, site) {
    const options = {
      protocol: 'http',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: 'http2.mlstatic.com',
      path: `/resources/sites/${site}/autosuggest?q=${query}`
    };

    return new Promise((resolve, reject) => {
      request(options).then((data) => {
        const suggestedQueries = data['suggested_queries'];
        let cleanData = {};
        let suggestions = [];
        suggestedQueries.forEach((suggestion) => {
          suggestions.push(suggestion.q);
        });
        cleanData.suggestions = suggestions;
        resolve(cleanData);
      }).catch((err) => {
        reject(err);
      })
    })
  }

  cleanItemData(data) {

  }
}

module.exports = MeliService;
