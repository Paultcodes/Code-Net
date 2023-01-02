const router = require('express').Router();
const { Like, Post, User } = require('../../models');

//Route for liking a post
router.post('/like', async (req, res) => {
  try {
    const checkLikes = await Like.findOne({
      where: {
        //!User id needs to be req.session.id
        user_id: req.body.userId,
        post_id: req.body.postId,
      },
    });

    if (checkLikes) {
      console.log(checkLikes);
      res.json({ message: 'You have already liked this post!' });
      return;
    } else {
      await Like.create({
        //!user id needs to be req.session.id
        user_id: req.body.userId,
        post_id: req.body.postId,
      });

      const userData = await User.findOne({
        where: {
          id: req.body.userId,
        },
      });

      await userData.increment('likes');

      const postData = await Post.findOne({
        where: {
          id: req.body.postId,
        },
      });

      await postData.increment('likes');
      res.status(200).json(postData);
    }
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
