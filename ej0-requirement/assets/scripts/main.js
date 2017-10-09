window.onload = function() {
    var headerSearch = document.getElementById('headerSearch');
    var headerSearchInput = document.getElementById('headerSearchInput');
    var searchApi = "https://api.mercadolibre.com/sites/MLA/search?q=";
    headerSearch.addEventListener('submit', function(event) {
        event.preventDefault();
        request(searchApi + headerSearchInput.value,
            function(res)  {
                var source = document.getElementById("template").innerHTML;
                var template = Handlebars.compile(source);
                var html = template(JSON.parse(res));
                document.getElementById("content").innerHTML = html;
            },
            function(err) {
                console.error(err);
            })
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


Handlebars.registerHelper('price', function(price) {
    var price = price.toLocaleString('es-ES');
    var priceArray = price.split(',');
    return price
});