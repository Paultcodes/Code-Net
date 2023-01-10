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

//Route for displaying a user's profile page. Retrieves the specified user's information and their posts from the database and renders the profile page with the retrieved data. 
//Passes the current user's session information to the page for reference.
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
        'github_url',
        'bio',
        'created_at',
        'header',
        'border_glow'
      ],

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


    const allData = findData.get({ plain: true });
    console.log(allData);

    res.render('profile', {
      allData,
      proPosts,
      ses: req.session.user_id,
      profile: true
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
