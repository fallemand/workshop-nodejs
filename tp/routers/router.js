const assetsServer = require('express').static;
const routerApi = require('./api.router');
const routerApp = require('./app.router');
const authorMiddleware = require('../middlewares/author.middleware');
const errorMiddleware = require('../middlewares/error.middleware');

module.exports.init = (app, path) => {
  app.use('/api', authorMiddleware, routerApi, errorMiddleware.apiError);
  app.use('/app', routerApp, errorMiddleware.appError);

  //Set statics path
  app.use('/assets', assetsServer(`${path}/assets`));

  app.use('*', (req, res) => {
    //res.send('Default route 404');
    res.redirect('/app');
  });
};
