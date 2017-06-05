var request = require('./request.js').request;
var template = require('../../../../views/partials/suggest.hbs');

export var suggest = (input, container) => {

    //Define Callbacks
    //-------------------------------------------------------------
    var success = (data) => {
        container.innerHTML = template(JSON.parse(data));
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
