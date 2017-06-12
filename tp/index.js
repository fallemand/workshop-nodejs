const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const router = require('./routers/router');
const helmet = require('helmet');

//Helmet - For Security
app.use(helmet());

//Handlebards
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
// if(process.env.NODE_ENV !== 'production') {
//     require('./mocks');
// }

//Define al routes
router.init(app, __dirname);

//Start
app.listen(3000, () => {
	console.log('servidor escuchando el 3000');
});
global.port = listener.address().port;
global.address = listener.address().address;
