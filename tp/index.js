const express = require('express');

const app = express();
const router = require('./routers/router.js');
const expReact = require('express-react-views');

// Configure react views
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

// Define routes
router.init(app, __dirname);

// Start server
// ---------------------------------------------
app.listen('3000', 'localhost', () => {
  console.log('app listen in port 3000');
});
