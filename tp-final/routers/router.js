var routerApi = require('./api.router');
var routerApp = require('./app.router');
var express = require('express');

exports.init = function(app, basePath) {
    app.use('/app', routerApp);
    app.use('/api', routerApi);

    //Set statics path
	app.use("/assets", express.static(basePath + '/assets'));

	//Set default url
	app.use('/*', function (req, res, next) {
	    res.render('index');
	});
}
