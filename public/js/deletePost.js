const allDeleteButtons = document.querySelectorAll('.delete-button');

for (let i = 0; i < allDeleteButtons.length; i++) {
  allDeleteButtons[i].addEventListener('click', async function (event) {
    event.preventDefault();
    const id = parseInt(allDeleteButtons[i].getAttribute('data-post-id'));

    const response = await fetch(`/api/posts/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      console.log('Failed to delete');
    }
  });
}
