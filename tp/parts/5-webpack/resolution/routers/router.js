const routerApi = require('./api.router');
const routerApp = require('./app.router');
const express = require('express');
const errorManager = require('../middlewares/errors.middleware');
const author = require('../middlewares/author.middleware');

exports.init = function (app, basePath) {

  //Set App routes
  app.use('/app', routerApp, errorManager.appErrors);

  //Set App routes
  app.use('/api', author, routerApi, errorManager.apiErrors);

  //Set statics path
  app.use('/assets', express.static(basePath + '/assets'));

  //Set default url
  app.use('/*', function (req, res, next) {
    res.render('index');
  });
};
