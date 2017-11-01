const serveAssets = require('express').static;
const routerHome = require('./routerHome');
const routerApi = require('./routerApi');
const routerApp = require('./routerApp');
const errorMiddleware = require('../middlewares/error.middleware');
const authorMiddleware = require('../middlewares/author.middleware');

module.exports.init = (app, path) => {
  // Set routers
  app.use('/', routerHome);
  app.use('/api', authorMiddleware, routerApi, errorMiddleware.apiError);
  app.use('/app', routerApp, errorMiddleware.appError);

  // Set static path
  app.use('/assets', serveAssets(`${path}/assets`));

  app.use('/*', (req, res) => {
    res.send('Default route 404');
  });
};
