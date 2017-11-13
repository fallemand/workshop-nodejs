const express = require('express');
const app = express();
const router = express.Router();
const route = require('./routers/router');
const expReact = require('express-react-views');
const config = require('./config');

app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

route.init(app, __dirname);

if (process.env.NODE_ENV !== 'production') {
  console.log('----------Using Mocks----------');
  require('./mocks');
}

router.get('/', (req, res) => {
  res.send('Dentro de la app');
});

app.listen(config.port, config.host, () => {
  console.log(`Server started at port ${config.host}:${config.port}`);
});
