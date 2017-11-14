const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');
const config = require('./config');
const helmet = require('helmet');

//Helmet - For Security
app.use(helmet());

// React
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

// Use Mocks
if(config.useMocks) {
  console.log('---- Using Mocks ----');
  require('./mocks');
}

// Define al routes
router.init(app, __dirname);

// Start Application
app.listen(config.port, config.host, () => {
  console.log(`App started: ${config.host}:${config.port}`);
});
