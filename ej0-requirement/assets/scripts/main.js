window.onload = function() {
    var headerSearch = document.getElementById('headerSearch');
    var headerSearchInput = document.getElementById('headerSearchInput');
    var searchApi = "https://api.mercadolibre.com/sites/MLA/search?q=";
    headerSearch.addEventListener('submit', function() {
        request(searchApi + headerSearchInput.value,
            function(res)  {
                var source = document.getElementById("entry-template").innerHTML;
                var template = Handlebars.compile(source);
                var html = template(JSON.parse(context));
                document.getElementById("test").innerHTML = html;
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