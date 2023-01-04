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

router.get('/:id', async (req, res) => {
  try {
    const singlePost = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['text', 'likes', 'is_code', 'user_id'],
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        {
          model: Comment,
          attributes: ['text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['user_name'],
          },
        },
      ],
    });

    const post = singlePost.get({ plain: true });
    res.render('singlePost', { post });
  } catch (err) {
    res.status(500).json({ message: 'Unable to find this post' });
  }
});

module.exports = router;
