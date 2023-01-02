const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

//Route for creating a post
router.get('/:id', async (req, res) => {
  try {
    const getPost = await Post.findOne({
      where: {
        id: req.params.id,
      },

      include: [
        {
          model: User,
          attributes: ['user_name', 'level'],
        },
        {
          model: Comment,
          attributes: ['text'],
          include: {
            model: User,
            attributes: ['user_name'],
          },
        },
      ],
    });
  } catch (err) {}
});

module.exports = router;
