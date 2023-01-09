const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/signup/user');
  } else {
    next();
  }
};

module.exports = withAuth;
