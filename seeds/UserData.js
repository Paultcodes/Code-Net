const { User } = require('../models');

const userData = [
  {
    user_name: 'John',
    github_url: 'https://github.com',
    password: 'password',
    pic: '../images/avatar.jpg',
    level: 1,
    likes: 2,
  },
  {
    user_name: 'Jacob',
    github_url: 'https://github.com',
    password: 'password',
    pic: '../images/avatar.jpg',
    level: 3,
    likes: 8,
  },
  {
    user_name: 'Jingleheimer',
    github_url: 'https://github.com',
    password: 'password',
    pic: '../images/avatar.jpg',
    level: 6,
    likes: 26,
  },
  {
    user_name: 'Schmidt',
    github_url: 'https://github.com',
    password: 'password',
    pic: '../images/avatar.jpg',
    level: 9,
    likes: 299,
  },
];

const seedUser = async () => await User.bulkCreate(userData);

module.exports = seedUser;
