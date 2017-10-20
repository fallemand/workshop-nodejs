const serveAssets = require('express').static;
const routerHome = require('./routerHome');
const routerApi = require('./routerApi');
const routerApp = require('./routerApp');

module.exports.init = (app, path) => {
  // Set routers
  app.use('/', routerHome);
  app.use('/api', routerApi);
  app.use('/app', routerApp);

  // Set static path
  app.use('/assets', serveAssets(`${path}/assets`));

  app.use('/*', (req, res) => {
    res.send('Default route!');
  });
};
