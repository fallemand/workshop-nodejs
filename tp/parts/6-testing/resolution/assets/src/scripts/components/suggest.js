const request = require('./request.js');
const template = require('../../../../views/partials/suggest.hbs');

module.exports = (input, container) => {

    //Define Callbacks
    //-------------------------------------------------------------
    const success = (data) => {
        container.innerHTML = template(JSON.parse(data));
        body.addEventListener('click', hideMenuListener);
    }
    const err = (err) => {
        console.log(err);
    }

    //Define Events
    //-------------------------------------------------------------
    const body = document.body;
    const hideMenuListener = function (event) {
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
            const url = '/api/suggest?q=' + input.value + '&v=1';
            request(url, success, err);
        }
    })
}
