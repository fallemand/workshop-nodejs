const routerApi = require('./api.router');
const routerApp = require('./app.router');
const express = require('express');

exports.init = function(app, basePath) {

  //Set App routes
  app.use('/app', routerApp);

  //Set App routes
  app.use('/api', routerApi);

  //Set statics path
	app.use('/assets', express.static(basePath + '/assets'));

	//Set default url
	app.use('/*', function (req, res, next) {
	    res.send('Ruta por defecto');
	});

};
