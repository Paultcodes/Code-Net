const { UserLanguages } = require('../models');

const languageData = [
  {
    userId: 1,
    languageId: 2,
  },
  {
    userId: 3,
    languageId: 1,
  },
  {
    userId: 2,
    languageId: 2,
  },
];

const seedUserLanguage = async () =>
  await UserLanguages.bulkCreate(languageData);

module.exports = seedUserLanguage;
