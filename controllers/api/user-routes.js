const router = require('express').Router();
const { User } = require('../../models');

//Route for creating a new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      user_name: req.body.userName,
      pic: req.body.picName,
      password: req.body.password,
      github_url: req.body.github,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      (req.session.user_name = dbUserData.user_name),
        (req.session.loggedIn = true);
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route for logging in
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        user_name: req.body.username,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      req.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      (req.session.user_name = dbUserData.user_name),
        (req.session.loggedIn = true);
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//Route for logging out
router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
