const routerApi = require('./api.router');
const routerApp = require('./app.router');
const serverAssets = require('express').static;
const errorMiddleware = require('../middlewares/error.middleware');

// Si necesitara los 2 elementos del mismo require
// const {Router, static} = require('express');
// const router = Router();

module.exports.init = (app, path) => {
    
    // Set statics paths
    app.use('/api', routerApi, errorMiddleware.apiError);
    app.use('/app', routerApp, errorMiddleware.appError);
    
    app.use('/assets', serverAssets(`${path}/assets`));
    
    // Default Route
    app.use('*', (req, res, next) => {
        res.redirect('/app');
    });
};