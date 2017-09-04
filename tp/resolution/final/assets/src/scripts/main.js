const suggest = require('./components/suggest.js');

window.onload = () => {
    const input = document.querySelector('[data-js="search"]');
    const container = document.querySelector('[data-js="suggest"]');
    suggest(input, container);
}
