const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');
const helmet = require('helmet');

//Helmet - For Security
app.use(helmet());

//React
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

//Define al routes
router.init(app, __dirname);

//Use mocks
if (process.env.NODE_ENV !== 'production') {
  console.info('--- Using Mocks ---');
  require('./mocks');
}

//Start Application
global.port = process.env.PORT || 3000;
global.address = process.env.IP || '0.0.0.0';
app.listen(global.port, global.address, () => {
  console.log("Listening on " + global.address + ", port " + global.port)
});
