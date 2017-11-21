const serverAssets = require('express').static;
const routerApi = require('./api.router');
const routerApp = require('./app.router');
const author = require('../middlewares/author.middleware');
const error = require('../middlewares/error.middleware');

module.exports.init = (app, path) => {

  // Set routers
  app.use('/api', author, routerApi);
  app.use('/app', routerApp, error.appError);

  // Set statics path
  app.use('/assets', serverAssets(`${path}/assets`));

  // Default Route
  app.use('*', (req, res, next) => {
    res.render('Index');
  })

};
