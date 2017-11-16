let searchInput = document.querySelector('[data-js="search"]');
let apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=';

window.onload = function() {
    let searchForm = document.querySelector('[data-js="form"]');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        apiUrl += searchInput.value;
        request(apiUrl, productsList, errorCall)
    });
};

function productsList(data) {
    data = JSON.parse(data);
    searchInput.value = '';
    apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=';

    const breadcrumbContainer = document.querySelector("[data-js=breadcrumb-container]");
    const breadcrumbTemplate = document.getElementById("breadcrumb-template");
    const pTemplate = Handlebars.compile(breadcrumbTemplate.innerHTML);

    const searchContent = document.querySelector("[data-js=main-content]");
    const searchTemplate = document.getElementById("search-template");
    const sTemplate = Handlebars.compile(searchTemplate.innerHTML);

    let searchItems = {};
    let listItems = {};

    if (data.results.length > 0) {
        if (data.filters[0]) 
            listItems = { listItems: data.filters[0].values[0].path_from_root };
        else 
            listItems = { listItems: [{name: 'Categorias varias' }]};
        
        searchItems = { searchItems: data.results };
    }

    breadcrumbContainer.innerHTML = pTemplate(listItems);
    searchContent.innerHTML = sTemplate(searchItems);
}

function errorCall(error) {
    console.log('Hubo un error: '+error);
}

//Use this method to make request to the API
function request(url, callback, error) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                error(xhr.statusText)
                searchContent.innerHTML = xhr.statusText;
            }
        }
    };
    xhr.onerror = function(e) {
        error(xhr.statusText);
        searchContent.innerHTML = xhr.statusText;
    };
    xhr.send(null);
}

Handlebars.registerHelper('formatPrice', function(num) {
    var price = num.toLocaleString('de-DE');
    var priceArray = price.split(',');
    if (priceArray[1]) 
        price = new Handlebars.SafeString("<strong>$" + priceArray[0] + "<sup>" + priceArray[1] + "</sup></strong>");
    else
        price = new Handlebars.SafeString("<strong>$" + priceArray[0] + "<sup>00</sup></strong>");
      
    return price
});
