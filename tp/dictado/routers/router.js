const serverAssets = require('express').static;
const routerApi = require('./api.router');
const routerApp = require('./app.router');

module.exports.init = (app, path) => {

  // Set routers
  app.use('/api', routerApi);
  app.use('/app', routerApp);

  // Set statics path
  app.use('/assets', serverAssets(`${path}/assets`));

  // Default Route
  app.use('*', (req, res, next) => {
    res.send('Default route 404');
  })

};
