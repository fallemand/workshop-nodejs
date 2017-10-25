const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');

/* routes
  path: /api/search, accepts query param 'q'. Returns JSON.
  path: /api/suggest, accepts query param 'q'. Returns JSON.
  path: /api/items/:id, has path param. Returns JSON.
  path: /app/search, accepts query param 'search'. Returns HTML.
  path: /app/items/:id, has path param. Returns HTML.
*/

// Configure React Views
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

router.init(app, __dirname);

app.listen('3000', 'localhost', () => {
  console.log('Server up on localhost:3000');
});

