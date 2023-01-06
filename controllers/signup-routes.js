const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('signuppage');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
