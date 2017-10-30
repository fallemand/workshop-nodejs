const serverAssets = require('express').static;
const routerApi = require('./api.router');
const routerApp = require('./app.router');
const errorMiddleware = require('../middlewares/error.middleware');
const author = require('../middlewares/author.middleware');

module.exports.init = (app, path) => {

  // Set routers
  app.use('/api', author, routerApi, errorMiddleware.apiError);
  app.use('/app', routerApp, errorMiddleware.appError);

  // Set statics path
  app.use('/assets', serverAssets(`${path}/assets`));

  // Default Route
  app.use('*', (req, res, next) => {
    res.send('Default route 404');
  })

};
