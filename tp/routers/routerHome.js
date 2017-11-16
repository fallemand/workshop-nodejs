const router = require('express').Router();

/**
 * Home
 */
router.get('/', (req, res) => {
  res.redirect('/app')
});
module.exports = router;
