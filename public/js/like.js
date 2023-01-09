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
      // document.location.reload();
    } else {
      alert('Failed to like post...');
    }
  });
}