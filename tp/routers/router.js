const serverAssets = require('express').static
const routerApi = require('./api.router')
const routerApp = require('./app.router')

module.exports.init = (app, path) =>{

   app.use('/api', routerApi);
   app.use('/app', routerApp);
        
    //Set statatic path
    app.use('/assets', serverAssets(`${path}/assets`)); 
    
    //Default Route
    app.use('*', (req, res, next) => {
        res.send('Default route 404!');
    });
}