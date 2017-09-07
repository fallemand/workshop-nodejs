const express = require('express');
const app = express();
const router = require('./routers/router');

//Define al routes
router.init(app, __dirname);

//Set view engine
app.set('view engine', 'html');

//Start Application
global.port = 3000
global.address = '0.0.0.0'
app.listen(global.port, global.address, () => {
  console.log('App started on port 3000');
})
