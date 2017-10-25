const requestPromise = require('./requestPromise');

class MeliService {
  /**
  * This function returns an Object with all the info of
  * the item searched, including description and category path.
  * @param {String} query
  */
  item(query) {
    const itemOptions = {
      protocol: 'https',
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      hostname: 'api.mercadolibre.com',
      path: `/items/${query}`,
    };

    const descriptionOptions = {
      protocol: 'https',
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      hostname: 'api.mercadolibre.com',
      path: `/items/${query}/description`,
    };

    return new Promise((resolve, reject) => {
      Promise.all([
        // Search for item
        requestPromise(itemOptions),
        // Search for description
        requestPromise(descriptionOptions),
      ])
        .then((data) => {
          const itemData = JSON.parse(data[0]);
          const descriptionData = JSON.parse(data[1]);
          const completeResponse = {
            itemData,
            descriptionData,
          };

          const categoryOptions = {
            protocol: 'https',
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
            hostname: 'api.mercadolibre.com',
            path: `/categories/${itemData.category_id}`,
          };

          // Search for category
          requestPromise(categoryOptions)
            .then((catData) => {
              // console.log('catdataaa', catData);
              completeResponse.categoryData = catData;
              // Resolves (return) the complete object
              resolve(completeResponse);
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

  /**
   * This function returns an object with the results of a
   * searched item.
   * @param {String} query
   */
  search(query) {
    const searchOptions = {
      protocol: 'https',
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      hostname: 'api.mercadolibre.com',
      path: `/sites/MLA/search?q=${query}`,
    };

    return requestPromise(searchOptions);
  }

  /**
   * This function returns an object with the suggestion
   * based on the searched term
   * @param {String} query
   */
  suggest(query) {
    const suggestOptions = {
      protocol: 'https',
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      hostname: 'api.mercadolibre.com',
      path: `/sites/MLA/autosuggest?q=${query}`,
    };

    return requestPromise(suggestOptions);
  }
}

module.exports = new MeliService();
