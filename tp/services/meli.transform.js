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
// console.log(Transform.suggest({"q":"iph","suggested_queries":[{"q":"iphone 6","match_start":0,"match_end":3},{"q":"iphone 5s","match_start":0,"match_end":3},{"q":"iphone 7","match_start":0,"match_end":3},{"q":"iphone 6s","match_start":0,"match_end":3},{"q":"celular iphone","match_start":8,"match_end":11},{"q":"carregador iphone","match_start":11,"match_end":14}],"author":{"name":"Emiliano Kohmann","mail":"emikohmann@live.com"}}));