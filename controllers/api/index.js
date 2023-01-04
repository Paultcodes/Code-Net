const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const likeRoutes = require('./like-routes');
const signUpRoutes = require('./signup-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/likes', likeRoutes);
router.use('/signup', signUpRoutes);

module.exports = router;
