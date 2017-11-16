exports.item = (item) => {
  return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price
      },
      condition: item.condition,
      sold_quantity: item.sold_quantity,
      free_shipping: item.shipping ? item.shipping.free_shipping : false,
      picture: item.pictures ? item.pictures[0] && item.pictures[0].url : false,
      description: item.description,
      category: item.category
  }
};

exports.search = (search) => {
  return {
    query : search.query,
    paging: search.paging,
    category: search.filters.length > 0 && search.filters[0].values.length > 0 && search.filters[0].values[0].path_from_root,
    results: search.results.map((result) => {
      return {
        id: result.id,
        title: result.title,
        address: {
          state_id: result.address.state_id,
          state_name: result.address.state_name,
          city_id: result.address.city_id,
          city_name: result.address.city_name
        },
        price: {
          amount: result.price,
          currency: result.currency_id
        },
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
        picture: result.thumbnail
      }
    })
  }
};

exports.suggest = (results) => {
  return {
    query: results.q,
    results: results.suggested_queries.map((result) => {
      return result.q;
    })
  };
};