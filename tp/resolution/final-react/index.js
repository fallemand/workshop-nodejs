const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const router = require('./routers/router');
const helmet = require('helmet');
const expReact = require('express-react-views');

//Helmet - For Security
app.use(helmet());

//Handlebards
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

//Use mocks
if (process.env.NODE_ENV !== 'production') {
  console.info('--- Using Mocks ---');
  require('./mocks');
}

//Define al routes
router.init(app, __dirname);

//Start
global.port = process.env.PORT || 3000;
global.address = process.env.IP || '0.0.0.0';
app.listen(global.port, global.address, () => {
  console.log("Listening on " + global.address + ", port " + global.port)
});
