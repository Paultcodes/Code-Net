const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const checkIfLogged = require('../../utils/checkLoggedIn');

//Route for displaying a single post and its comments. 
//Retrieves the current user's information and the post's information from the database, 
//including the post creator's information and the comments on the post with their respective commenter's information. 
//Renders the post page with the retrieved data.
router.get('/:id', checkIfLogged, async (req, res) => {
  try {
    const getCurrentUser = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      attributes: [
        'first_name',
        'last_name',
        'user_name',
        'pic',
        'level',
        'likes',
      ],
    });

    const currentUser = getCurrentUser.get({ plain: true });
    const getPost = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'text', 'is_code', 'user_id', 'created_at'],

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
        {
          model: Comment,
          attributes: ['text', 'created_at'],
          include: {
            model: User,
            attributes: [
              'user_name',
              'level',
              'first_name',
              'last_name',
              'pic',
            ],
          },
        },
      ],
    });
    const postData = getPost.get({ plain: true });
    console.log(postData);
    res.render('postpage', {
      postData,
      currentUser,
      sess: req.session.user_id,
    });
    // res.status(200).json(getPost);
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;
