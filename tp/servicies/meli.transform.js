/**
 * Created by cuanini on 10/13/17.
 */

const requestPromise = require('./requestPromise');

class meliTransform {

  // static item(id) {
  //   const optionsHttps = {
  //     protocol: 'https',
  //     method: 'GET',
  //     headers: {'Content-type': 'application/json'},
  //     hostname: 'api.mercadolibre.com',
  //     path: `/items/${id}`
  //   };
  //
  //   const optionsHttpsDesc = {
  //     protocol: 'https',
  //     method: 'GET',
  //     headers: {'Content-type': 'application/json'},
  //     hostname: 'api.mercadolibre.com',
  //     path: `/items/${id}/description`
  //   };
  //
  //   const optionsHttpsCateg = {
  //     protocol: 'https',
  //     method: 'GET',
  //     headers: {'Content-type': 'application/json'},
  //     hostname: 'api.mercadolibre.com',
  //     path: '/categories/'
  //   };
  //
  //
  //   return new Promise((resolve, reject) => {
  //     let dataFinal;
  //     Promise.all([requestPromise(optionsHttps), requestPromise(optionsHttpsDesc)]).then((data) => {
  //       dataFinal = {};
  //       dataFinal.id = data[0].id;
  //       dataFinal.site_id = data[0].site_id;
  //       dataFinal.title = data[0].title;
  //       dataFinal.price = data[0].price;
  //       dataFinal.currency_id = data[0].currency_id;
  //       dataFinal.sold_quantity = data[0].sold_quantity;
  //       dataFinal.condition = data[0].condition;
  //       dataFinal.pictures = data[0].pictures;
  //       dataFinal.free_shipping = data[0].shipping.free_shipping;
  //       dataFinal.description = {};
  //       dataFinal.description.text = data[1].text;
  //       dataFinal.description.plain_text = data[1].plain_text;
  //
  //       optionsHttpsCateg.path = '/categories/' + data[0].category_id;
  //       requestPromise(optionsHttpsCateg).then((data) => {
  //         dataFinal.category = {};
  //         dataFinal.category.id = data.id;
  //         dataFinal.category.name = data.name;
  //         dataFinal.category.path_from_root = data.path_from_root;
  //         resolve(dataFinal);
  //       }).catch((err) => {
  //         reject(err);
  //       })
  //     }).catch((err) => {
  //       reject(err)
  //     });
  //   });
  //
  //
  // }

  static item(data) {
    let dataFinal;
    dataFinal = {};
    dataFinal.id = data.id;
    dataFinal.site_id = data.site_id;
    dataFinal.title = data.title;
    dataFinal.price = data.price;
    dataFinal.currency_id = data.currency_id;
    dataFinal.sold_quantity = data.sold_quantity;
    dataFinal.condition = data.condition;
    dataFinal.pictures = data.pictures;
    dataFinal.free_shipping = data.shipping.free_shipping;
    dataFinal.description = {};
    dataFinal.description.text = data.description.text;
    dataFinal.description.plain_text = data.description.plain_text;
    dataFinal.category = {};
    dataFinal.category.id = data.category.id;
    dataFinal.category.name = data.category.name;
    dataFinal.category.path_from_root = data.category.path_from_root;
    return dataFinal;
  }

  static search(query) {
    const optionsHttps = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/sites/MLA/search?q=${query}`
    };

    return new Promise((resolve, reject) => {
      requestPromise(optionsHttps).then((data) => {
        const finalData = {};
        finalData.site_id = data.site_id;
        finalData.category = data.filters.length > 0 && data.filters[0].values.length > 0
          && data.filters[0].values[0].path_from_root;
        finalData.query = data.query;
        const results = data.results;
        let results1 = [];
        results.forEach((result) => {
          let finalResult = {};
          finalResult.title = result.title;
          finalResult.id = result.id;
          finalResult.price = result.price;
          finalResult.currency_id = result.currency_id;
          finalResult.free_shipping = result.shipping.free_shipping;
          finalResult.state = result.address.state_name;
          finalResult.thumbnail = result.thumbnail;
          finalResult.permalink = result.permalink;
          results1.push(finalResult);
        });
        finalData.results = results1;
        resolve(finalData);
      }).catch((err) => {
        reject(err)
      });
    });
  }

  static suggest(query) {
    const optionsHttps = {
      protocol: 'https',
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      hostname: 'api.mercadolibre.com',
      path: `/sites/MLA/autosuggest?q=${query}`
    };

    return new Promise((resolve, reject) => {
      requestPromise(optionsHttps).then((data) => {
        let finalData = {};
        let suggestions = [];
        const suggested_queries = data['suggested_queries'];
        suggested_queries.forEach((sq, index) =>
        {
          suggestions.push(sq.q);
        });
        finalData.suggestions = suggestions;
        resolve(finalData);
        }).catch((err) => {
        reject(err);
      });
    });
  }
}

module.exports = meliTransform;
