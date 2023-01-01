const { Comment } = require('../models');

const commentData = [
  {
    text: 'This is my comment',
    post_id: 1,
    user_id: 1,
  },
  {
    text: 'Another comment',
    post_id: 1,
    user_id: 2,
  },
];

const seedComment = async () => await Comment.bulkCreate(commentData);
module.exports = seedComment;
