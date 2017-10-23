const routerApi = require('./api.router');
const routerApp = require('./app.router');
const serverAssets = require('express').static;

// Si necesitara los 2 elementos del mismo require
// const {Router, static} = require('express');
// const router = Router();

module.exports.init = (app, path) => {
    
    // Set statics paths
    app.use('/api', routerApi);
    app.use('/app', routerApp);
    
    app.use('/assets', serverAssets(`${path}/assets`));
    
    // Default Route
    app.use('*', (req, res, next) => {
        res.redirect('/app');
    });
};