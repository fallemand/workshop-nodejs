window.onload = function() {
    let searchUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=';
    const form = document.querySelector("[data-js=form]");
    let inputEntry = document.querySelector("[data-js=search]")
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        searchUrl += inputEntry.value;
        request(searchUrl, listResult, logError);
    });
}

function listResult(data) {
    data = JSON.parse(data);
    
    const breadcrumbContainer = document.querySelector("[data-js=breadcrumb-container]");
    const breadcrumbList = document.getElementById("breadcrumb");
    const breadcrumbTemplate = Handlebars.compile(breadcrumbList.innerHTML);

    const mainContent = document.querySelector("[data-js=main-content]");
    const productList = document.getElementById("product-list");
    const productTemplate = Handlebars.compile(productList.innerHTML);
    let productModel = {};
    let breadcrumbModel = {};
 
    if (data.results.length > 0) {
        breadcrumbModel = { breadCrumbList: data.filters[0].values[0].path_from_root };
        productModel = { products: data.results };
    }

    breadcrumbContainer.innerHTML = breadcrumbTemplate(breadcrumbModel);
    mainContent.innerHTML = productTemplate(productModel);
}

function logError(error) {
    console.log("Error: ", error);
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
