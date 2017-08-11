const express = require('express');
const app = express();
const router = require('./routers/router');

//Define al routes
router.init(app, __dirname);

//Set view engine
app.set('view engine', 'html');

//Start Application
app.listen('3000', 'localhost', () => {
  console.log('App started on port 3000');
})
