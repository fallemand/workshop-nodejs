/**
 * Created by cuanini on 10/20/17.
 */

const {Router, static} = require('express');
const routerApp = require('./app.router');
const routerApi = require('./api.router');
const author = require('../middlewares/author.middleware')

module.exports.init = (app, path) => {


  app.use('/app', routerApp);
  app.use('/api', author, routerApi);

  app.use('/assets', static(`${path}/assets`));

  app.use('*', (req, res) => {
   res.send("Default route");
  })
}
