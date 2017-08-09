const request = require('./request.js');
const React = require('react');
const Suggest = require('../../../../views/components/Suggest.jsx');
const render = require('react-dom').render;

module.exports = (input, container) => {

    //Define Callbacks
    //-------------------------------------------------------------
    var success = (data) => {
        render(<Suggest suggested_queries={JSON.parse(data).suggested_queries} />, container);
        body.addEventListener('click', hideMenuListener);
    }
    var err = (err) => {
        console.log(err);
    }

    //Define Events
    //-------------------------------------------------------------
    var body = document.body;
    var hideMenuListener = function (event) {
        container.innerHTML = '';
        body.removeEventListener('click', hideMenuListener);
    };

    //Click on suggested
    container.addEventListener('click', (event) => {
        if(event.target.className.indexOf('suggest__item') > -1) {
            input.value = event.target.innerText;
            input.form.submit();
        }
        hideMenuListener();
    })

    //Suggest on every key
    input.addEventListener('keyup', () => {
        if(input.value.length > 2) {
            var url = '/api/suggest?q=' + input.value + '&v=1';
            request(url, success, err);
        }
    })
}
