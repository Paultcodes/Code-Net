const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('settings', { sess: req.session.user_id });
  } catch (err) {
    console.log(err);
  }
});

router.put('/updatePic', async (req, res) => {
  try {
    const updatePic = await User.update(
      {
        pic: req.body.picSet,
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    );

    res.status(200).json(updatePic);
  } catch (err) {
    console.log(err);
  }
});

router.put('/updateHeader', async (req, res) => {
  try {
    const updateHeader = await User.update(
      {
        header: req.body.headerSet,
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    );

    res.status(200).json(updateHeader);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
