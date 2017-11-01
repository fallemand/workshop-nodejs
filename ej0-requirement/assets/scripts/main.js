window.onload = function() {
    document.getElementsByClassName('header__search')[0].addEventListener('submit', function(e) {
      e.preventDefault();
        var search = document.getElementsByClassName('header__search-input')[0].value;
        request('https://api.mercadolibre.com/sites/MLA/search?q=' + search, renderView, error);
    });
};

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

var renderView = function (data) {
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(JSON.parse(data));
    document.getElementsByClassName("main")[0].innerHTML = html;
};

var error = function (error) {
    alert(error);
};

Handlebars.registerHelper('formatPrice', function(price) {
    price = price.toLocaleString('de-DE');
    var splittedPrice = price.split(",");
    price = splittedPrice[0] ? splittedPrice[0] : price;
    var cents = splittedPrice[1] ? splittedPrice[1] : '00';
    price = new Handlebars.SafeString('\$' + price + '<sup>'+cents+'</sup>');
    return price;
});
