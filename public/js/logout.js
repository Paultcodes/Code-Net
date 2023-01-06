const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Post-Content': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login/user');
  } else {
    alert('Failed to log out');
  }
};

const logoutButton = document
  .querySelector('.logout-button')
  .addEventListener('click', logout);
