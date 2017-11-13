const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');
const config = require('./config');

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

if(config.useMocks) {
  console.log('Using mocks');
  require('./mocks');
}

app.listen(config.port, config.host, () => {
  console.log(`Server up on ${config.host}:${config.port}`);
});

