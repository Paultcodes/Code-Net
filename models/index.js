const Post = require('./Post');
const User = require('./User');
const Language = require('./Language');
const Like = require('./Like');
const Comment = require('./Comment');
const UserLanguages = require('./UserLanguage');


User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
})

Comment.belongsTo(User, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Like.belongsTo(User, {
  foreignKey: 'user_id',
});

Like.belongsTo(Post, {
  foreignKey: 'post_id',
});

Post.hasOne(Like, {
  foreignKey: 'post_id',
});

User.hasOne(Like, {
  foreignKey: 'post_id',
});

User.belongsToMany(Language, {
  through: UserLanguages,
});

Language.belongsToMany(User, {
  through: UserLanguages,
});

module.exports = { Post, User, Language, Like, UserLanguages, Comment };
