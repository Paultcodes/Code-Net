const { Language } = require('../models');

const languageData = [
  {
    language_name: 'JavaScript',
  },
  {
    language_name: 'Python',
  },
  {
    language_name: 'HTML',
  },
];

const seedLanguage = async () => await Language.bulkCreate(languageData);

module.exports = seedLanguage;
