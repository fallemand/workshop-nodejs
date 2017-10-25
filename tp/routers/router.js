const static = require('express').static;
const appRouter = require('./app');
const apiRouter = require('./api');
const author = require('../middlewares/author');
const error = require('../middlewares/error');

module.exports.init = (app, dirname) => {

  app.use('/app', appRouter, error.appError);
  app.use('/api',  author.author, apiRouter, error.apiError);

  app.use('/assets', static(`${dirname}/assets`));
};

