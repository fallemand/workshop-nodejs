module.exports.item = (item) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      amount: item.price,
      currency: item.currency_id,
    },
    condition: item.condition,
    sold_quantity: item.sold_quantity,
    free_shipping: item.shipping.free_shipping,
    picture: item.pictures[0] && item.pictures[0].url,
    category: item.category.path_from_root,
    description: item.description,
  }
};

module.exports.search = (search) => {
  return {
    query : search.query,
    paging: search.paging,
    filters: search.filters,
    category: search.filters.length > 0
              && search.filters[0].values.length > 0
              && search.filters[0].values[0].path_from_root,
    results: search.results.map((result) => {
      return {
        id: result.id,
        title: result.title,
        address: result.address,
        price: {
          amount: result.price,
          currency: result.currency_id,
        },
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
        thumbnail: result.thumbnail
      }
    })
  }
};

module.exports.suggest = (results) => {
  return {
    query: results.q,
    results: results.suggested_queries.map((result) => {
      return result.q;
    })
  };
};
