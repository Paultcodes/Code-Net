const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const profileRoutes = require('./profile-routes');
const singUpRoutes = require('./signup-routes');
const loginRoutes = require('./login');
const settingRoutes = require('./setting-routes');

router.use('/api', apiRoutes);
router.use('/settings', settingRoutes);
router.use('/login/user', loginRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/signup/user', singUpRoutes);

module.exports = router;
