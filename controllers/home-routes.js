const router = require('express').Router();
const { Post, User, Language, Comment } = require('../models');

//Route to get all posts

// router.get('/', async (req, res) => {
//   try {
//     res.render('profile');
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const getPost = await Post.findOne({
//       where: {
//         id: 1,
//       },

//       include: [
//         {
//           model: Comment,
//           attributes: ['text'],
//         },
//       ],
//     });

//     const post = getPost.get({ plain: true });
//     console.log(post);
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['user_name', 'level'],
//         },
//       ],
//     });

//     const posts = postData.map((post) => post.get({ plain: true }));
//     console.log(posts)
//     res.render('homepage', { posts });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const createPost = await Post.create({
//       text: req.body.postText,
//       is_code: false,
//       user_id: req.session.id,
//     });
//     res.status(200).json(createPost);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to create post' });
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const findUsers = await User.findOne({
//       where: {
//         id: 1,
//       },
//     });

//     console.log(findUsers);
//   } catch (err) {
//     console.log(err)
//   }
// });




module.exports = router;
