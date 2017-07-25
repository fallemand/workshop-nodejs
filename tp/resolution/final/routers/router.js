var routerApi = require('./api.router');
var routerApp = require('./app.router');
var express = require('express');
var errorManager = require('../services/errors.middleware');
var author = require('../services/author.middleware');

exports.init = function(app, basePath) {

    //Set App routes
    app.use('/app', author, routerApp);
    app.use('/app', errorManager.appErrors);

    //Set App routes
    app.use('/api', author, routerApi);
    app.use('/api', errorManager.apiErrors);

    //Set statics path
	app.use('/assets', express.static(basePath + '/assets'));

	//Set default url
	app.use('/*', function (req, res, next) {
	    res.render('index');
	});
}
