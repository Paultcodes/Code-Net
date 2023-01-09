const allLikeButtons = document.querySelectorAll('.like-button');


//Event listener for the like buttons. 
//When a button is clicked, the 'userId' and 'postId' of the corresponding post are retrieved from the data attributes of the button and passed in a POST request to the server. 
//If the request is successful, the page is reloaded. Otherwise, an alert is displayed.
for (let i = 0; i < allLikeButtons.length; i++) {
  allLikeButtons[i].addEventListener('click', async function (event) {
    event.preventDefault();
    const userId = parseInt(allLikeButtons[i].getAttribute('data-user-id'));
    const postId = parseInt(allLikeButtons[i].getAttribute('data-post-id'));

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