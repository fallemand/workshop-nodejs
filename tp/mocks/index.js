var nock = require('nock');
melinock = nock('https://api.mercadolibre.com');

//Search mocks
melinock
    .get('/sites/MLA/search')
    .query({q: 'Iphone 7'})
    .reply(200, {
        results: [
            {title: 'Sitio ML 1'},
            {title: 'Sitio ML 2'}
        ]
    });

//Item mocks
melinock
    .get('/items/MLM571268838')
    .reply(200,
        {
            "id": "MLM571268838",
            "site_id": "MLM",
            "title": "Item De Testeo, Por Favor No Ofertar!"
        }
    )
    .get('/items/MLM571268838/description')
    .reply(200,
        {
            "text": "bla bla"
        }
    )
