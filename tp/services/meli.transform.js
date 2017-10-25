class Transformer {
  item(data) {
    let itemObj = {};

    if (data.itemData.error) {
      itemObj = {
        message: data.itemData.message,
        error: data.itemData.error,
      };
    } else {
      itemObj = {
        id: data.itemData.id,
        title: data.itemData.title,
        price: data.itemData.price,
        pictures: data.itemData.pictures,
      };
    }
    return itemObj;
  }

  search(data) {
    data = JSON.parse(data);
    return {
      query: data.query,
      paging: data.paging,
      filters: data.filters,
      results: data.results.map((product) => {
        return {
          id: product.id,
          permalink: product.permalink,
          thumbnail: product.thumbnail,
          title: product.title,
          price: product.price,
          free_shipping: product.shipping.free_shipping,
          city_name: product.address.city_name,
        };
      }),
    };
  }

  suggest(data) {
    data = JSON.parse(data);
    return {
      query: data.q,
      results: data.suggested_queries.map((suggestion) => {
        return suggestion.q;
      }),
    };
  }
}

module.exports = new Transformer();
