const app = require('express')();
const config = require('./config');
const router = require('./routers/main.router');
const reactViews = require('express-react-views');

// Configure React views
app.engine('jsx', reactViews.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');


/**
 * Mocks
 */

if (config.useMocks) {
  require('./mocks');
  console.log('App is using mocks');
}

/**
 * Router
 */

router.init(app, __dirname);

/**
 * Server
 */

app.listen(config.port, config.host, () => console.log(
  `App started on port ${config.host}:${config.port}`
));
