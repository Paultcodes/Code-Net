const submitPostHandler = async (event) => {
  event.preventDefault();

  const postInput = document.querySelector('.post-input').value.trim();

  if (postInput) {
    const response = await fetch('/create', {
      method: 'POST',
      body: JSON.stringify({ postInput }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
    }
  }
};

const submitPost = document
  .querySelector('.submit-post')
  .addEventListener('click', submitPostHandler);

//like button is clicked
//Update Like table = Need id of post that is liked and id of user that liked it (req.session.user_id)
//Update Post table = Need id of post that was liked and increment the likes by 1 in the post table
//Update User table = Need id of the user that wrote the post that was liked and increment their total likes by 1

const allLikeButtons = document.querySelectorAll('.like-button');

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
      document.location.reload();
    } else {
      alert('Failed to like post...');
    }
  });
}
