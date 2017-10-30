window.onload = function () {

  // Render breadcrums and productlist as soon as the page is loaded
  renderBreadCrums();
  renderProductList();
};

// Variables declaration
var elSearchForm = document.querySelector("[data-js=form]");
var elSearchInput = document.querySelector(
  "[data-js=form] .header__search-input"
);
var rootSearchUrl = "https://api.mercadolibre.com/sites/MLA/search?q=";

//Use this method to make request to the API
function request(url, callback, error) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        error(xhr.statusText)
      }
    }
  };
  xhr.onerror = function (e) {
    error(xhr.statusText);
  };
  xhr.send(null);
}
