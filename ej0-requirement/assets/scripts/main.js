window.onload = function() {
  elSearchForm.addEventListener("submit", searchTerm);
};

var elSearchForm = document.querySelector("[data-js=form]");
var elSearchInput = document.querySelector(
  "[data-js=form] .header__search-input"
);
var rootSearchUrl = "https://api.mercadolibre.com/sites/MLA/search?q=";

//Use this method to make request to the API
function request(url, callback, error) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function(e) {
    error(xhr.statusText);
  };
  xhr.send(null);
}

function renderData(data) {
  data = JSON.parse(data);

  renderBreadCrums(data);
  renderProductList(data);
}

function renderBreadCrums(data) {
  var breadcrumbsListWrapper = document.getElementById("breadcrumb-wrapper");
  var breadcrumbTemplate = document.getElementById("breadcrumb-template");
  var template = Handlebars.compile(breadcrumbTemplate.innerHTML);

  var context = { products: data.results };
  breadcrumbsListWrapper.innerHTML = template(context);
}

function renderProductList(data) {
  var productListWrapper = document.getElementById("products-list-wrapper");
  var prodTemplate = document.getElementById("product-list-template");
  var template = Handlebars.compile(prodTemplate.innerHTML);

  var context = { products: data.results };
  productListWrapper.innerHTML = template(context);
}

function searchTerm(e) {
  var searchUrl = rootSearchUrl + elSearchInput.value;
  e.preventDefault();

  request(searchUrl, success, error);

  function success(data) {
    renderData(data);
    elSearchInput.value = "";
  }

  function error(err) {
    console.log("Error: ", err);
  }
}
