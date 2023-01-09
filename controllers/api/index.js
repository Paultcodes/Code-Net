const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const likeRoutes = require('./like-routes');
const commentRoutes = require('./comment-routes');
const gameRoutes = require('./game-routes');

router.use('/comment', commentRoutes);
router.use('/makeGame', gameRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/likes', likeRoutes);

module.exports = router;
