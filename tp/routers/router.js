const static = require('express').static;
const appRouter = require('./app');
const apiRouter = require('./api');

module.exports.init = (app, dirname) => {

  app.use('/app', appRouter);
  app.use('/api', apiRouter);

  app.use('/assets', static(`${dirname}/assets`));
};

