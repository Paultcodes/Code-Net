const { User } = require('../models');

const userData = [
  {
    user_name: 'jonCoder523',
    first_name: 'John',
    last_name: 'Smith',
    bio: 'Full Stack Software Engineer',
    github_url: 'https://github.com',
    password: 'password',
    pic: '/images/avatar1.png',
    level: 1,
    likes: 2,
  },
  {
    user_name: 'jc333',
    first_name: 'Jacob',
    last_name: 'Green',
    bio: 'My own posts',
    github_url: 'https://github.com',
    password: 'password',
    pic: '/images/avatar2.png',
    header: '/images/header.jpg',
    level: 3,
    likes: 8,
  },
  {
    user_name: 'Jingleheimer333',
    first_name: 'Jen',
    last_name: 'Ray',
    bio: 'I love cats',
    github_url: 'https://github.com',
    password: 'password',
    pic: '/images/avatar3.png',
    header: '/images/header.jpg',
    level: 6,
    likes: 26,
  },
  {
    user_name: 'topcoder452',
    first_name: 'Jake',
    last_name: 'Cook',
    bio: 'I am the best',
    github_url: 'https://github.com',
    password: 'password',
    pic: '/images/avatar4.png',
    header: '/images/header.jpg',
    level: 9,
    likes: 299,
  },
];

module.exports = async () => 
  await User.bulkCreate(userData);
