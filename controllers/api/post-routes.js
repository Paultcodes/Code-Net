const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

//Route for getting one post
router.get('/:id', async (req, res) => {
  try {
    const getPost = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'text', 'is_code', 'user_id'],

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
    const postData = getPost.get({ plain: true });
    console.log(postData);
    res.status(200).json(getPost);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deletePost);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
