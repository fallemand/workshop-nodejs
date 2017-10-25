const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router');

// Configure Body for post calls
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define Routes
router.init(app, __dirname);

// Start Server
app.listen('3000', 'localhost', () => {
  console.log('app listen in port 3000');
});
