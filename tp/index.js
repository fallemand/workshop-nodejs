const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');
const config =  require('./config');

app.engine('jsx',  expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

//Use mocks
if (config.useMocks) {
  console.log('------ USING MOCKS -------');
  require('./mocks');
}

router.init(app, __dirname);

app.listen(config.port, config.host, () => {
  console.log(`app started: ${config.host}:${config.port}`);
});

