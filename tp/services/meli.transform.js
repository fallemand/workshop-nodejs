/**
 * Transform permite resumir la información de la API antes de devolverla en MELI Service
 */
class Transform {

    static item(item) {
        let transformedItem = {
            title: item.title,
            price: item.price,
            sold_quantity: item.sold_quantity,
            free_shipping: item.shipping.free_shipping,
            thumbnail: item.thumbnail,
            state_name: item.seller_address.state.name,
            category: {
                path_from_root: item.category.path_from_root,
            },
            pictures: item.pictures,
            description: {
                text: item.description.text,
                plain_text: item.description.plain_text,
            },
        };

        return transformedItem;
    };

    static search(search) {

        let transformedSearch = {

            categories: search.filters.length > 0
            && search.filters[0].values.length > 0
            && search.filters[0].values[0].path_from_root,

            query: search.query,
            results: search.results,
        };

        return transformedSearch;
    };

    static suggest(suggest) {

        let transformedSuggest = {};
        let suggestions = [];

        const suggested_queries = suggest['suggested_queries'];
        suggested_queries.forEach((sq, index) =>
        {
            suggestions.push(sq.q);
        });

        transformedSuggest.query = suggest['q'];
        transformedSuggest.suggestions = suggestions;

        return transformedSuggest;
    };
}

module.exports = Transform;