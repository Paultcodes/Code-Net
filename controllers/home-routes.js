const router = require('express').Router();

const { Post, User, Language, Comment, sess } = require('../models');
const checkIfLogged = require('../utils/checkLoggedIn');

//Route for displaying the home page. Retrieves all posts and the current user's information from the database and renders the home page with the retrieved data..
router.get('/', checkIfLogged, async (req, res) => {
  try {
    const allData = await Post.findAll({
      attributes: ['id', 'text', 'likes', 'user_id', 'is_code', 'created_at'],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: User,
          attributes: [
            'id',
            'user_name',
            'level',
            'first_name',
            'last_name',
            'pic',
          ],
        },
      ],
    });

    const getUser = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      attributes: [
        'id',
        'user_name',
        'pic',
        'level',
        'github_url',
        'likes',
        'first_name',
        'last_name',
      ],
    });

    const userData = getUser.get({ plain: true });
    const data = allData.map((post) => post.get({ plain: true }));


    res.render('homepage', {
      data,
      userData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/game', async (req, res) => {
  try {
    res.render('easteregg');
  } catch (err) {
    console.log(err);
  }
});


//Route for creating a post
router.post('/create', async (req, res) => {
  try {
    const createPost = await Post.create({
      text: req.body.postInput,
      is_code: req.body.type,
      user_id: req.session.user_id,
    });
    res.status(200).json(createPost);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create post' });
  }
});

//Route for receiving a post from the modal
router.post('/create/modal', async (req, res) => {
  try {
    const createPost = await Post.create({
      text: req.body.inp,
      is_code: req.body.typePost,
      user_id: req.session.user_id,
    });
    res.status(200).json(createPost);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create post' });
  }
});


module.exports = router;
