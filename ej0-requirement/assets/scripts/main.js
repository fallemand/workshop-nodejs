window.onload = function() {
    document.getElementsByClassName('header__search')[0].addEventListener('submit', function(e) {
        e.preventDefault();
        var text = document.getElementsByClassName('header__search-input')[0].value;
        request('https://api.mercadolibre.com/sites/MLA/search?q=' + text, function(context) {
            var source   = document.getElementById("entry-template").innerHTML;
            var template = Handlebars.compile(source);
            var html    = template(JSON.parse(context));
            document.getElementById("test").innerHTML = html;
        }, function(e) {
            alert(e);
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

Handlebars.registerHelper('price', function(price) {
  var price = price.toLocaleString('de-DE');
  var priceArray = price.split(',');
  if (priceArray[1]) {
    price = new Handlebars.SafeString(priceArray[0] + " <span style='vertical-align: super; font-size: 18px'>" + priceArray[1] + "</span>");
  }
  return price
});
