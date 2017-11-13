const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router');
const expReact = require('express-react-views');
const config = require('./config');

// Configure Body for post calls
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Mocks
if(config.useMocks) {
  console.log('--------- Using Mocks --------');
  require('./mocks'); // Al requerir una carpeta, ejecuta el index de la misma
}
// Configure React views
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

// Define Routes
router.init(app, __dirname);

// Start Server
app.listen(config.port, config.host, () => {
  console.log(`app listen in ${config.host}:${config.port}`);
});
