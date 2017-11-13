/**
 * Transform permite resumir la información de la API antes de devolverla en MELI Service
 */
class Transform {

    static item(item) {
        let transformedItem = {};

        transformedItem = item;

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