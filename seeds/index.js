const sequelize = require("../config/connection");
const seedUser = require("./UserData");
const seedLike = require("./LikeData");
const seedPost = require("./PostData");
const seedLanguage = require("./LanguageData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();
  await seedLike();
  await seedLanguage();
  process.exit(0);
};

seedDatabase();
