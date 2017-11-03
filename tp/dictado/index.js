const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');

// React
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

// Use Mocks
if(process.env.NODE_ENV !== 'production') {
  console.log('---- Using Mocks ----');
  require('./mocks');
}

// Define al routes
router.init(app, __dirname);

// Start Application
global.port = 3000;
global.address = '0.0.0.0';
app.listen(global.port, global.address, () => {
  console.log('App started on port 3000');
});
