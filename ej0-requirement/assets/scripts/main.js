window.onload = function() {

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

Handlebars.registerHelper('price', function(price) {
  var price = price.toLocaleString('es-ES');
  var priceArray = price.split(',');
  return price
});
