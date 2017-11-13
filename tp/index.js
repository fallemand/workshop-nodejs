const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router');
const expReact = require('express-react-views');
const config = require('./config');

app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

// Configure Body for post calls
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define Routes
router.init(app, __dirname);

//Mocks
// proccess.env ingresa a las variables de entorno
if(process.env.NODE_ENV != 'production') {
    require('./mocks');
}

// Start Server
app.listen(config.port, config.host, () => {
  console.log(`App started: ${config.host}:${config.port}`);
});
