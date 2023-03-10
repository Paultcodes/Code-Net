const router = require('express').Router();
const { User } = require('../../models');


//Creates a new user using the provided form data and sets the user's session information. 
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      user_name: req.body.userName,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      bio: req.body.bio,
      pic: req.body.selectedPic,
      password: req.body.password,
      github_url: req.body.github,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      (req.session.user_name = dbUserData.user_name),
        (req.session.pic = dbUserData.pic),
        (req.session.loggedIn = true);
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route for handling a user logging in. 
//Finds the user with the provided username in the database and checks if the provided password is valid for that user. 
//If the username and password are valid. 
//If the username or password is invalid, sends a message indicating this.
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
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      (req.session.user_name = dbUserData.user_name),
        (req.session.pic = dbUserData.pic),
        (req.session.loggedIn = true);
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
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
