const staticsServer = require('express').static;
const apiRouter = require('./api.router');
const appRouter = require('./app.router');
const authorMiddleware = require('../middlewares/author.middleware');
const errorMiddleware = require('../middlewares/error.middleware');

module.exports.init = (app, path) => {
  app.use('/api', authorMiddleware, apiRouter, errorMiddleware.apiError);
  app.use('/app', appRouter);

  app.use('/statics', staticsServer(`${path}/assets`));
};
