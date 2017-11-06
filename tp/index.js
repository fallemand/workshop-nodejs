const express = require('express');
const app = express();
const router = express.Router();
const route = require('./routers/router');
const expReact = require('express-react-views');

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

app.listen('3000', 'localhost', () => {
  console.log('Server started at port 3000');
});
