window.onload = function () {

    let contenedor = document.getElementsByClassName('main__content')[0];
    let element = document.getElementsByClassName('header__search')[0];

    element.addEventListener('keyup', getItems);
}

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

function setItems(req) {
    let res = JSON.parse(req);




    // templateItem ()


    res.results.map(items)

    // console.log(res);
}

function items(item) {
    console.log(item);


    let templateItemSource = document.getElementById('entry-template');
    let templateItem = Handlebars.compile(templateItemSource);
    let htmlItem = templateItem(item);
}



function error(e) {
    console.log(e)
}

function getItems(e) {
    let query = document.getElementsByClassName('header__search-input')[0].value;
    let url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query;
    request(url, setItems, error);
}
