const staticsServer = require('express').static;
const apiRouter = require('./api.router');
const appRouter = require('./app.router');

module.exports.init = function (app, path) {
  app.use('/api', apiRouter);
  app.use('/app', appRouter);

  app.use('/statics', staticsServer(`${path}/assets`));
};
