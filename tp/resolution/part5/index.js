const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const router = require('./routers/router');

//Define al routes
router.init(app, __dirname);

//Handlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: 'views/layouts/',
    partialsDir: 'views/partials/',
    helpers: require('./views/helpers')
}));
app.set('views', 'views/pages/');
app.set('view engine', '.hbs');

//Use mocks
if(process.env.NODE_ENV !== 'production') {
    require('./mocks');
}

//Start Application
global.port = 3000;
global.address = '0.0.0.0';
app.listen(global.port, global.address, () => {
  console.log('App started on port 3000');
});
