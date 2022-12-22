const Post = require('./Post');
const User = require('./User');
const Language = require('./Language');
const Like = require('./Like');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Like.belongsTo(User, {
  foreignKey: 'user_id',
});

Like.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { Post, User, Language, Like };
