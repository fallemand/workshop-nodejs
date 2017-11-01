const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router');
const expReact = require('express-react-views');

// Configure Body for post calls
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Mocks
require('./mocks'); // Al requerir una carpeta, ejecuta el index de la misma

// Configure React views
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

// Define Routes
router.init(app, __dirname);

// Start Server
app.listen('3000', 'localhost', () => {
  console.log('app listen in port 3000');
});
