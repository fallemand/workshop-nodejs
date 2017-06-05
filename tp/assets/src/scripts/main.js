var suggest = require('./components/suggest.js').suggest;

window.onload = () => {
    var input = document.querySelector('[data-js="search"]');
    var container = document.querySelector('[data-js="suggest"]');
    suggest(input, container);
}
