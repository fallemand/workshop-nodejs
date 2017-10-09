window.onload = function() {
    document.getElementsByClassName('header__search-input')[0].addEventListener('change', function (e) {
        var text = this.value;
        request('https://api.mercadolibre.com/sites/MLA/search?q=' + text, 
            function(data) {

                // https://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes

                var source   = document.getElementById("entry-template").innerHTML;
                var template = Handlebars.compile(source);
                var compiledHtml    = template(JSON.parse(data));

                console.log(compiledHtml);

                document.getElementsByClassName('main__content')[0].innerHTML = compiledHtml;
            }, 
            function(e) {
                alert(e);
            }
        );
    });
};

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
