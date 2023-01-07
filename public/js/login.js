const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('.username-input').value.trim();
  const password = document.querySelector('.password-input').value.trim();
  console.log(username);

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(response.status)
    }
  }
};

const submitLogin = document
  .querySelector('.submit-login')
  .addEventListener('click', loginFormHandler);

console.log('hello');
