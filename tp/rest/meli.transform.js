module.exports.search = (search) => {

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

    return {
        query: suggest.q,
        results: suggest.suggested_queries
    }
};

module.exports.item = (result) => {

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
        picture: result.item.pictures[0],
        category: result.category,
        description: result.description
    }

};