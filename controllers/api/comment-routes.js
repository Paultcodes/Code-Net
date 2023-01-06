const router = require('express').Router();

const { Post, User, Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const createComment = await Comment.create({
      text: req.body.commentInput,
      post_id: req.body.postId,
      user_id: req.session.user_id,
    });

    res.status(200).json(createComment);
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router;
