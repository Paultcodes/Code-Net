const router = require('express').Router();
const { Session, Store } = require('express-session');

const { Post, User, Language, Comment, sess } = require('../models');
const checkIfLogged = require('../utils/checkLoggedIn');

//Route to get all posts
//Route to get all posts

router.get('/', checkIfLogged, async (req, res) => {
  let highLevel;
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
        'likes',
        'first_name',
        'last_name',
      ],
    });

    const userData = getUser.get({ plain: true });
    const data = allData.map((post) => post.get({ plain: true }));

    if (userData.level >= 2) {
      highLevel = true;
    } else if (userData.level >= 3) {
      let secondLevel = true;
    }

    res.render('homepage', {
      data,
      userData,
      loggedIn: req.session.loggedIn,
      highLevel,
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

// router.get('/:id', async (req, res) => {
//   try {
//     const singlePost = await Post.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: ['text', 'likes', 'is_code', 'user_id'],
//       include: [
//         {
//           model: User,
//           attributes: ['user_name'],
//         },
//         {
//           model: Comment,
//           attributes: ['text', 'post_id', 'user_id', 'created_at'],
//           include: {
//             model: User,
//             attributes: ['user_name'],
//           },
//         },
//       ],
//     });

//     const post = singlePost.get({ plain: true });
//     res.render('singlePost', { post });
//   } catch (err) {
//     res.status(500).json({ message: 'Unable to find this post' });
//   }
// });

module.exports = router;
