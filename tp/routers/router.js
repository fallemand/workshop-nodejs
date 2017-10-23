const serverAssets = require('express').static
const routerApi = require('./api.router')
const routerApp = require('./app.router')
const middlewareInfo = require('../middlewares/info.middleware')
const middlewareError = require('../middlewares/error.middleware')

module.exports.init = (app, path) =>{

   
   app.use('/api', middlewareInfo, routerApi, middlewareError.apiError);
   app.use('/app', routerApp, middlewareError.appError);
   
        
    //Set statatic path
    app.use('/assets', serverAssets(`${path}/assets`)); 
    
    //Default Route
    app.use('*', (req, res, next) => {
        res.send('Default route 404!');
    });
}