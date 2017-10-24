const express = require('express');

const app = express();
const router = require('./routers/router.js');

router.init(app, __dirname);

// Start server
// ---------------------------------------------
app.listen('3000', 'localhost', () => {
  console.log('app listen in port 3000');
});
