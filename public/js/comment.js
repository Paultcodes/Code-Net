const commentSubmitButton = document.querySelector('.submit-comment');


const submitCommentHandler = async () => {
  const commentInput = document.querySelector('.comment-input').value.trim();

  const postId = parseInt(commentSubmitButton.getAttribute('data-post'));

  const response = await fetch('/api/comment', {
    method: 'POST',
    body: JSON.stringify({ commentInput, postId }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed');
  }
};

commentSubmitButton.addEventListener('click', submitCommentHandler);
