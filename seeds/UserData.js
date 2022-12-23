const { User } = require("../models");

const userData = [
    {
        user_name: "John",
        github_url: "https://github.com",
        password: "password",
        level: 1,
        language_id: [1, 2],
        likes: 2
    },
    {
        user_name: "Jacob",
        github_url: "https://github.com",
        password: "password",
        level: 3,
        language_id: [1],
        likes: 8
    },
    {
        user_name: "Jingleheimer",
        github_url: "https://github.com",
        password: "password",
        level: 6,
        language_id: [1, 2, 3],
        likes: 26
    },
    {
        user_name: "Schmidt",
        github_url: "https://github.com",
        password: "password",
        level: 9,
        language_id: [1, 2],
        likes: 299
    }
];

const seedUser = async () => await User.bulkCreate(userData);

module.exports = seedUser;