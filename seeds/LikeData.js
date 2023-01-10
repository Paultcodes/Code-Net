const { Like } = require("../models");

const likeData = [
    {
        post_id: 1,
        user_id: 1
    },
    {
        post_id: 2,
        user_id: 2
    },
    {
        post_id: 3,
        user_id: 3
    },
    {
        post_id: 4,
        user_id: 4
    }
];

module.exports = async () => 
  await Like.bulkCreate(likeData);

