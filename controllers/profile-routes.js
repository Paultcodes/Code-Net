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
      attributes: ['user_name', 'level', 'likes', 'pic'],

      include: [
        {
          model: Post,
          attributes: ['text', 'likes'],
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

module.exports = router;
