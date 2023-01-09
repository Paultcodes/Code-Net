const router = require('express').Router();
const { User } = require('../models');
const checkIfLogged = require('../utils/checkLoggedIn');

router.get('/', checkIfLogged, async (req, res) => {
  let isHighLevel1;
  let isHighLevel2;
  let isHighLevel3;
  try {
    const getUser = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      attributes: [
        'first_name',
        'last_name',
        'user_name',
        'bio',
        'github_url',
        'level',
      ],
    });

    const user = getUser.get({ plain: true });
    if (user.level >= 3) {
      isHighLevel1 = true;
    } else {
      isHighLevel1 = false;
    }

    if (user.level >= 4) {
      isHighLevel2 = true;
    } else {
      isHighLevel2 = false;
    }

    if (user.level >= 5) {
      isHighLevel3 = true;
    } else {
      isHighLevel3 = false;
    }

    if (user)
      res.render('settings', {
        sess: req.session.user_id,
        user,
        isHighLevel1,
        isHighLevel2,
        isHighLevel3,
      });
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

router.put('/updateUser', async (req, res) => {
  try {
    const updateUserInfo = User.update(
      {
        user_name: req.body.username,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        bio: req.body.bio,
        github_url: req.body.github,
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    );
    res.status(200).json(updateUserInfo);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
