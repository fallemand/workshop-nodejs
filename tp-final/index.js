var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var router = require('./routers/router');
var helmet = require('helmet');

//Helmet - For Security
app.use(helmet());

//Handlebards
app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	helpers: require('./views/helpers')
}));
app.set('view engine', '.hbs');

//Define al routes
router.init(app, __dirname);

//Start
app.listen(3000, () => {
	console.log('servidor escuchando el 3000');
})
