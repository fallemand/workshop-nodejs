exports.item = (item) => {
  const toWork = item.itemData;
    let itemTransformed = {};

    itemTransformed = {
      id: toWork.id,
      title: toWork.title,
      price: {
        currency: toWork.currency_id,
        amount: toWork.price
      },
      condition: toWork.condition,
      sold_quantity: toWork.sold_quantity,
      free_shipping: toWork.shipping.free_shipping,
      picture: toWork.pictures.length ? toWork.pictures[0] && toWork.pictures[0].url : false,
      description: item.descriptionData.text ? item.descriptionData.text : item.descriptionData.plain_text,
      category: item.categoryData.path_from_root,
    };
    
    return itemTransformed;
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
        address: result.address,
        price: result.price,
        condition: result.condition,
        free_shipping: result.free_shipping,
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
