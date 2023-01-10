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

module.exports = async () => 
  await Language.bulkCreate(languageData);

