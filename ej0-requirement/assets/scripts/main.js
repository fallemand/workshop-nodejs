window.onload = function() {
    Handlebars.registerHelper('formatMoney', function(options) {
        //TODO: Ver una forma de independizar el formateo de la localización.
        var formattedMoney = options.hash.amount.toLocaleString( options.hash.locale,
            {
                style: 'currency',
                currency: options.hash.currency_id,
                currencyDisplay: 'symbol',
                useGrouping: options.hash.grouping,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        return new Handlebars.SafeString(
            '<span class="currency-symbol">' + formattedMoney[0] + '</span>' +
            '<span class="amount">' + formattedMoney.slice(1,-3) + '</span>' +
            '<sup class="fractional">' + formattedMoney.substr(-2,2) + '</sup>'
        );
    });
    var form = document.querySelector('[data-js="form"]');
    var input = form.querySelector('[data-js="search"]');
    form.addEventListener(
        'submit',
        function(){
            event.preventDefault();
            request("https://api.mercadolibre.com/sites/MLA/search?q=" + input.value,
                function(responseText){
                    //TODO: Hacer un refactor para crear un template de hbs.
                    var response = JSON.parse(responseText);
                    var breadcrumbsSource = document.querySelector('#breadcrumbs').innerHTML;
                    var breadcrumbsTemplate = Handlebars.compile(breadcrumbsSource);
                    if ( response.filters.length > 0 ){
                        var breadcrumbsContext = {
                            breadcrumbs: response.filters[0].values[0].path_from_root,
                            query: input.value
                        };
                    } else {
                        var breadcrumbsContext = {
                            breadcrumbs: "",
                            query: input.value
                        };
                    }
                    var breadcrumbsHTML = breadcrumbsTemplate(breadcrumbsContext);
                    var itemListSource = document.querySelector("#item-list").innerHTML;
                    var itemListTemplate = Handlebars.compile(itemListSource);
                    var itemListContext = {
                        items: response.results
                    };
                    var itemListHTML = itemListTemplate(itemListContext);
                    document.querySelector("main").innerHTML = breadcrumbsHTML + itemListHTML;
        },
        function (e) {
            console.log(e);
            document.querySelector("main").innerHTML = "<p>Ups, algo salió mal</p>";
        });
    });
}

//Use this method to make request to the API
function request(url, callback, error) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                error(xhr.statusText)
            }
        }
    };
    xhr.onerror = function(e) {
        error(xhr.statusText);
    };
    xhr.send(null);
}
