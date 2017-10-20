const express = require('express');
const app = express();
const router = require('./routers/router')

router.init(app, __dirname);

app.listen('3000', 'localhost', () =>{
    console.log('app listen in port 3000');
});


