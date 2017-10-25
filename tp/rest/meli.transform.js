module.exports.search = (search) => {
    console.log(search)
    return {
        query: search.query,
        paging: search.paging,
        filters: search.filters,
        results: search.results.map((result) => {
            return {
                id: result.id,
                title: result.title,
                address: result.address,
                price: result.price,
                condition: result.condition,
                free_shipping: result.free_shipping,
                thumbnai: result.thumbnail
            }
        })
    }
};

module.exports.suggest = (suggest) => {
    console.log("transform" . suggest)
    return {
        query: suggest.q,
        results : suggest.suggested_queries
    }
};

module.exports.item = (result) => {

    console.log(result)

    return {
        id: result.item.id,
        title: result.item.title,
        price: {
            amount: result.item.currency_id,
            currency: result.item.price
        },
        condition: result.item.condition,
        sold_quantity: result.item.sold_quantity,
        free_shipping: result.item.shipping.shipping,
        //picture: result.item.,
        category: [],
        description: "<p>...</p>"
      }

};