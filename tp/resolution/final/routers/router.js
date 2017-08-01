const routerApi = require('./api.router');
const routerApp = require('./app.router');
const express = require('express');
const errorManager = require('../services/errors.middleware');
const author = require('../services/author.middleware');

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
