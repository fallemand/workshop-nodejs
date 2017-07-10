window.onload = function() {
    var form = document.querySelector('[data-js="form"]');

    var sourceBreadcrumb   = document.querySelector("#breadcrumb-template").innerHTML;
    var templateBreadcrumb = Handlebars.compile(sourceBreadcrumb);
    var breadcrumbContent = document.querySelector('.breadcrumb-container');

    var sourceSearchItem   = document.querySelector("#search-item-template").innerHTML;
    var templateSearchItem = Handlebars.compile(sourceSearchItem);
    var mainContent = document.querySelector('.main__content');

    Handlebars.registerHelper('quote', function(data) {
      return '"'+ data + '"';
    });
    Handlebars.registerHelper('price', function(price) {
      return price
    });


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var query = form.querySelector('[data-js="search"]').value;
        var parameters = {
            url: 'https://api.mercadolibre.com/sites/MLA/search?q=' + encodeURIComponent(query),
            callback: function(data) {
                var itemsHtml = templateSearchItem(JSON.parse(data));
                mainContent.innerHTML = itemsHtml;
                console.log(JSON.parse(data));

                var breadcrumbHTML = templateBreadcrumb(JSON.parse(data));
                breadcrumbContent.innerHTML = breadcrumbHTML;
            },
            error: function(err) {
                console.log(err);
            }
        }
        request(parameters.url, parameters.callback, parameters.error);
    })
}

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
