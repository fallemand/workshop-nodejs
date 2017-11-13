class MeliTransform {
  static results(search) {
    const results = {
      categories: search.filters[0].values[0].path_from_root.map((categ) => categ.name),
    };

    results.results = search.results.map((result) => {
      return {
        id: result.id,
        title: result.title,
        price: {
          amount: result.price,
          currency: result.currency_id,
        },
        free_shipping: result.shipping.free_shipping,
        picture: result.thumbnail,
        address: {
          city: result.address.city_name,
          state: result.address.state_name,
        },
      };
    });

    return results;
  }

  static item(item, descs, categs) {
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
      description: descs.plain_text,
      categories: categs.path_from_root.map((categ) => categ.name),
    };
  }
}

module.exports = MeliTransform;
