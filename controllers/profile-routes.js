const router = require('express').Router();
const {
  Post,
  User,
  Language,
  Comment,
  Like,
  UserLanguages,
} = require('../models');

//Route to get all posts and languages for user
router.get('/:id', async (req, res) => {
  try {
    const findData = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['user_name', 'level', 'likes', 'pic', 'first_name', 'last_name', 'bio', 'created_at'],

      include: [
        {
          model: Post,
          attributes: ['id', 'text', 'likes', 'created_at'],
          order: [['created_at', 'DESC']],
          include: [
            {
              model: User,
              attributes: ['user_name', 'pic'],
            },
          ],
        },
        {
          model: Language,
          attributes: ['language_name'],
        },
      ],
    });

    let highLevel = true;

    const allData = findData.get({ plain: true });
    console.log(allData);

    res.render('profile', { allData, highLevel });
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
