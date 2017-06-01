var routerApi = require('./api.router');
var routerApp = require('./app.router');
var express = require('express');
var middleware = require('../services/middleware.service');

exports.init = function(app, basePath) {

    //Set App routes
    app.use('/app', middleware.author, routerApp);
    app.use('/app', middleware.appErrors);

    //Set App routes
    app.use('/api', middleware.author, routerApi);
    app.use('/api', middleware.apiErrors);

    //Set statics path
	app.use('/assets', express.static(basePath + '/assets'));

	//Set default url
	app.use('/*', function (req, res, next) {
	    res.render('index');
	});
}
