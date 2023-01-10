const sequelize = require('../config/connection');
const {User, Post, Like, Language, Comment} = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  await User.bulkCreate(require('./UserData'));
  await Post.bulkCreate(require('./PostData'));
  await Comment.bulkCreate(require('./commentData'));
  await Like.bulkCreate(require('./LikeData'));
  await Language.bulkCreate(require('./LanguageData'))

  process.exit(0);
};

seedDatabase();
