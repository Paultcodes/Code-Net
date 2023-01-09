const router = require('express').Router();
const {
  Post,
  User,
  Language,
  Comment,
  Like,
  UserLanguages,
} = require('../models');
const checkIfLogged = require('../utils/checkLoggedIn');

//Route to get all posts and languages for user
router.get('/:id', checkIfLogged, async (req, res) => {
  try {
    const findData = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        'user_name',
        'level',
        'likes',
        'pic',
        'first_name',
        'last_name',
        'bio',
        'created_at',
        'header',
      ],

      // include: [
      //   {
      //     model: Post,
      //     attributes: ['id', 'text', 'likes', 'created_at'],
      //     order: [['created_at', 'DESC']],
      //     include: [
      //       {
      //         model: User,
      //         attributes: ['user_name', 'pic', 'first_name', 'last_name'],
      //       },
      //     ],
      //   },
      //   {
      //     model: Language,
      //     attributes: ['language_name'],
      //   },
      // ],
    });

    const findPosts = await Post.findAll({
      where: {
        user_id: req.params.id,
      },
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

    const proPosts = findPosts.map((post) => post.get({ plain: true }));

    let highLevel = true;

    const allData = findData.get({ plain: true });
    console.log(allData);

    res.render('profile', {
      allData,
      highLevel,
      proPosts,
      ses: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
  }
});

//!Test route for recommending random user to friend
// router.get('/yes/ok', async (req, res) => {
//   try {
//     const getAllUser = await User.findAll({
//       attributes: ['user_name', 'pic'],
//     });

//     const parsed = getAllUser.map((user) => user.get({ plain: true }));
//     const getUser = await User.findOne({
//       where: {
//         id: Math.floor(Math.random() * parsed.length + 1),
//       },
//     });
//     const parseUser = getUser.get({ plain: true });
//     console.log(parseUser)
//     res.status(200).json(getAllUser);
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
