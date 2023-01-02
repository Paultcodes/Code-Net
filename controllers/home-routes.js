const router = require('express').Router();
const { Post, User, Language, Comment } = require('../models');

//Route to get all posts

router.get('/', async (req, res) => {
  try {
    const allData = await Post.findAll({
      attributes: ['id', 'text', 'likes', 'user_id', 'is_code'],
      include: [
        {
          model: User,
          attributes: ['id', 'user_name', 'level'],
        },
      ],
    });

    const data = allData.map((post) => post.get({ plain: true }));

    console.log(data);
    res.render('homepage', { data });
  } catch (err) {
    console.log(err);
  }
});

router.post('/create', async (req, res) => {
  try {
    const createPost = await Post.create({
      text: req.body.postInput,
      is_code: true,
      user_id: 2,
    });
    res.status(200).json(createPost);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create post' });
  }
});

module.exports = router;
