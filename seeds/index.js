const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await require('./LanguageData')();
  await require('./UserData')();
  await require('./PostData')();
  await require('./commentData')();
  await require('./LikeData')();
  
  process.exit(0);
};

seedDatabase();
