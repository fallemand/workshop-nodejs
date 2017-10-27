const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');

//React
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

//Define al routes
router.init(app, __dirname);

//Use mocks
console.info('--- Using Mocks ---');
require('./mocks');

//Start Application
global.port = 3000;
global.address = '0.0.0.0';
app.listen(global.port, global.address, () => {
  console.log('App started on port 3000');
});
