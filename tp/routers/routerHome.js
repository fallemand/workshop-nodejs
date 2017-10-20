const router = require('express').Router();

/**
 * Home
 */
router.get('/', (req, res) => {
  res.send('Home');
});
module.exports = router;
