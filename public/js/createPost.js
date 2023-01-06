const submitPost = document.querySelectorAll('.submit-post');
let postType;
let type;

const submitPostHandler = async () => {
  if (postType === 'text') {
    type = false;
  } else {
    type = true;
  }

  const postInput = document.querySelector('.post-input').value.trim();

  if (postInput) {
    const response = await fetch('/create', {
      method: 'POST',
      body: JSON.stringify({ postInput, type }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
    }
  }
};

for (let i = 0; i < submitPost.length; i++) {
  submitPost[i].addEventListener('click', function () {
    postType = submitPost[i].getAttribute('data-type');
    submitPostHandler();
  });
}

//like button is clicked
//Update Like table = Need id of post that is liked and id of user that liked it (req.session.user_id)
//Update Post table = Need id of post that was liked and increment the likes by 1 in the post table
//Update User table = Need id of the user that wrote the post that was liked and increment their total likes by 1

const allLikeButtons = document.querySelectorAll('.like-button');
var likes = document.querySelectorAll('.post-total-likes')

for (let i = 0; i < allLikeButtons.length; i++) {
  allLikeButtons[i].addEventListener('click', async function (event) {
    event.preventDefault();
    const userId = parseInt(allLikeButtons[i].getAttribute('data-user-id'));
    const postId = parseInt(allLikeButtons[i].getAttribute('data-post-id'));
    console.log(typeof userId + ' ' + userId);
    console.log(typeof postId + ' ' + postId);

    const response = await fetch('/api/likes/like', {
      method: 'POST',
      body: JSON.stringify({ userId, postId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // document.location.reload();
      likes += 1 
      allLikeButtons[i].disable = 'disabled'
    } else {
      alert('Failed to like post...');
    }
  });
}
