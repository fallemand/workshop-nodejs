var routerApi = require('./api.router');
var routerApp = require('./app.router');
var express = require('express');
var middleware = require('../services/middleware.service');

exports.init = function(app, basePath) {

    //Set App routes
    app.use('/app', middleware, routerApp);
    app.use('/app', (err, req, res, next) => {
        res.render('error', {message : JSON.stringify(err, null, 4)});
    });

    //Set App routes
    app.use('/api', middleware, routerApi);
    app.use('/api', (err, req, res, next) => {
        res.json(err);
    });

    //Set statics path
	app.use('/assets', express.static(basePath + '/assets'));

	//Set default url
	app.use('/*', function (req, res, next) {
	    res.render('index');
	});
}
