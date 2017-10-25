const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');

//React
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

// Define Routes
router.init(app, __dirname);

// Start Server
app.listen('3000', 'localhost', () => {
  console.log('app listen in port 3000');
});
