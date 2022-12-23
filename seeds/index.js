const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedLike = require('./LikeData');

const seedPost = require('./PostData');
const seedLanguage = require('./LanguageData');
const seedUserLanguage = require('./UserLanguageData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedLanguage();
  await seedUser();
  await seedPost();
  await seedLike();
  await seedUserLanguage();
  process.exit(0);
};

seedDatabase();
