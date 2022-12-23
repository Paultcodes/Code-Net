const Post = require('./Post');
const User = require('./User');
const Language = require('./Language');
const Like = require('./Like');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.hasOne(User, {
  foreignKey: 'user_id',
});

Like.belongsTo(User, {
  foreignKey: 'user_id',
});

Like.belongsTo(Post, {
  foreignKey: 'post_id',
});

Post.hasOne(Like,{
  foreignKey: 'post_id',
});

  User.hasOne(Like, {
    foreignKey: 'post_id',
  });

User.belongsToMany(Language,{
  through: 'User_Languages'
});

Language.belongsToMany(User,{
  through:'User_Languages'
});


module.exports = { Post, User, Language, Like };
