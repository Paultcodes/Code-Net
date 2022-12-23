const { Language } = require("../models");

const languageData = [
    {
        language_name: "JavaScript",
        user_id: 1
    },
    {
        language_name: "Python",
        user_id: 2
    },
    {
        language_name: "HTML",
        user_id: 3
    }
];

const seedLanguage = async () => await Language.bulkCreate(languageData);

module.exports = seedLanguage;