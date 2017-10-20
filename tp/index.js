const app = require('express')();
const router = require('./routers/main.router');

/**
 * Router
 */

router.init(app, __dirname);

/**
 * Server
 */

app.listen('3000', 'localhost', () => console.log('App started on port 3000.'));
