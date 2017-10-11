const https = require('https')
const request = require('./request')
/*
https.get('https://api.mercadolibre.com/sites/MLA/search?q=iphone7', (resp) =>{
    let data = '';

    resp.on('data', chunck => {
        data += chunck;
    });

    resp.on('end', () =>{
        console.log(JSON.parse(data));
    })

    
}).on('error', (err) =>{
    console.log(err)
});*/

/*
const options = {
    method : 'GET',
    headers : {
        'Content-type' : 'application/json',       
    },
    hostname : 'api.mercadolibre.com',
    path : '/sites/MLA/search?q=iphone7'
}

https.request(options, (resp) =>{
    let data = '';

    resp.on('data', chunck => {
        data += chunck;
    });

    resp.on('end', () =>{
        console.log(JSON.parse(data));
    })

    
}).on('error', (err) =>{
    console.log(err)
}).end();
*/

const optionsHttps = {
    protocol : 'https',
    method : 'GET',
    headers : {
        'Content-type' : 'application/json',       
    },
    hostname : 'api.mercadolibre.com',
    path : '/sites/MLA/search?q=iphone7'
}

const optionsHttp = {
    protocol : 'http',
    method : 'GET',
    headers : {
        'Content-type' : 'application/json',       
    },
    hostname : 'api.internal.ml.com',
    path : '/sites/MLA/search?q=iphone7'
}

const success= (data) => {
    console.log(data)
}

const error= (err) => {
    console.log('Error!! panic!!')
    console.log(err)
}

request(optionsHttp, success, error)
