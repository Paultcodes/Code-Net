const router = require('express').Router();
const { Like, Post, User } = require('../../models');

//Route for handling a user liking a post. 
//If the post has already been liked by the current user, 
//return a message indicating this. Otherwise, create a like in the database, 
//increment the number of likes on the post, and, if the post's creator has not liked their own post, 
//increment their like count and potentially their level.
router.post('/like', async (req, res) => {
  try {
    const checkLikes = await Like.findOne({
      where: {
        //!User id needs to be req.session.id
        user_id: req.session.user_id,
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
        user_id: req.session.user_id,
        post_id: req.body.postId,
      });

      const postData = await Post.findOne({
        where: {
          id: req.body.postId,
        },
      });

      await postData.increment('likes');

      if (req.body.userId === req.session.user_id) {
        return;
      } else {
        const userData = await User.findOne({
          where: {
            id: req.body.userId,
          },
        });

        await userData.increment('likes');

        if (userData.likes >= 3) {
          userData.increment('level');
        }
      }

      res.status(200).json(postData);
    }
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
