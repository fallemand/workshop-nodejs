class MeliTransform {
  static results(search) {
    const data = {};

    data.categories = (search.filters.length && search.filters[0].values.length)
      ? search.filters[0].values[0].path_from_root.map((categ) => categ.name)
      : null;

    data.results = search.results.map((result) => {
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

    return data;
  }

  static suggest(results) {
    const data = {};

    data.query = results.q;

    data.results = results.suggested_queries.map((result) => result.q);

    return data;
  }

  static item(item, descs, categs) {
    const data = {};

    data.categories = categs.path_from_root.map((categ) => categ.name);

    data.item = {
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
    };

    return data;
  }
}

module.exports = MeliTransform;
