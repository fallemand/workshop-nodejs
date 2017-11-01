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
        price: {
          amount: data.itemData.price,
          currency: data.itemData.currency_id,
        },
        condition: data.itemData.condition,
        sold_quantity: data.itemData.sold_quantity,
        free_shipping: data.itemData.shipping.free_shipping,
        picture: data.itemData.pictures.length ? data.itemData.pictures[0].url : false,
        description: data.descriptionData.text ? data.descriptionData.text : data.descriptionData.plain_text,
        categories: data.categoryData.path_from_root,
      };
      // itemObj = data;
    }
    return itemObj;
  }

  search(data) {
    data = JSON.parse(data);
    return {
      query: data.query,
      paging: data.paging,
      filters: data.filters,
      categories:
        data.filters.length > 0 && data.filters[0].values.length > 0 && data.filters[0].values[0].path_from_root,
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
