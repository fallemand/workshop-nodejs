const serverAssets = require('express').static;

const routerApi = require('./api.router.js');
const routerApp = require('./app.router.js');

const authorMiddleware = require('./../middlewares/author.middleware.js');
const errorMiddleware = require('./../middlewares/error.middleware.js');


module.exports.init = (app, path) => {
  // Set static path
  app.use('/assets', serverAssets(`${path}/assets`));

  // Use author middleware
  app.use(authorMiddleware);

  // Set routers
  app.use('/api', routerApi, errorMiddleware.api);
  app.use('/app', routerApp);

  // Set default route
  app.use('*', (req, res, next) => {
    res.send('Default route');
    next();
  });
};
