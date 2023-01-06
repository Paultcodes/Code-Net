const { Post } = require('../models');

const postData = [
  {
    text: 'Hello',
    likes: 1,
    user_id: 1,
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nesciunt quam, esse expedita veniam natus. Aperiam nisi excepturi corporis molestiae aut iste nihil assumenda. Minus tenetur vitae explicabo laudantium esse.',
    likes: 2,
    user_id: 2,
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nesciunt quam, esse expedita veniam natus. Aperiam nisi excepturi corporis molestiae aut iste nihil assumenda. Minus tenetur vitae explicabo laudantium esse.',
    likes: 3,
    user_id: 3,
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nesciunt quam, esse expedita veniam natus. Aperiam nisi excepturi corporis molestiae aut iste nihil assumenda. Minus tenetur vitae explicabo laudantium esse.',
    likes: 4,
    user_id: 4,
  },
  {
    text: `function sayHi(){
            console.log("Hello")
        }`,
    likes: 4,
    user_id: 4,
    is_code: true,
  },
];

const seedPost = async () => await Post.bulkCreate(postData);

module.exports = seedPost;
