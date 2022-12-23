const { Post } = require("../models");

const postData = [
    {
        text: "Hello",
        likes: 1,
        user_id: 1
    },
    {
        text: "Hello, world",
        likes: 2,
        user_id: 2
    },
    {
        text: "Hello, hello world",
        likes: 3,
        user_id: 3
    },
    {
        text: "Hello hi world",
        likes: 4,
        user_id: 4
    }
];

const seedPost = async () => await Post.bulkCreate(postData);

module.exports = seedPost;