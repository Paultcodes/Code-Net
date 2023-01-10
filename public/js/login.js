const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('.username-input').value.trim();
  const password = document.querySelector('.password-input').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      (document.querySelector('.warning-text').textContent =
        'Wrong username or password');
    }
  }
};

const submitLogin = document
  .querySelector('.submit-login')
  .addEventListener('click', loginFormHandler);
