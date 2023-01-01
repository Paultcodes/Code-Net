const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedLike = require('./LikeData');
const seedComment = require('./commentData');

const seedPost = require('./PostData');
const seedLanguage = require('./LanguageData');
const seedUserLanguage = require('./UserLanguageData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedLanguage();
  await seedUser();
  await seedPost();
  await seedComment();
  await seedLike();
  await seedUserLanguage();
  process.exit(0);
};

seedDatabase();
