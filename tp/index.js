const app = require('express')();
const router = require('./routers/main.router');
const reactViews = require('express-react-views');

// Configure React views
app.engine('jsx', reactViews.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');


/**
 * Mocks
 */

if (process.env.NODE_ENV !== 'production') {
  require('./mocks');
}

/**
 * Router
 */

router.init(app, __dirname);

/**
 * Server
 */

app.listen('3000', 'localhost', () => console.log(
  'App started on port localhost:3000.'
));
