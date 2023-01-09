//grabbing all the avatar class buttons
const btn = document.querySelectorAll('.avatar');
let selectedPic;

//function to loop through all the buttons after one is selected
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function (event) {
    event.preventDefault();
    selectedPic = btn[i].getAttribute('data-avatar');
    changeOpacity(selectedPic);
    console.log(selectedPic);
  });
}
//function to change the opacity of the buttons when one is selected
function changeOpacity(b) {
  for (let i = 0; i < btn.length; i++) {
    const element = btn[i].getAttribute('data-avatar');
    if (element !== selectedPic) {
      btn[i].style.opacity = '50%';
    } else {
      btn[i].style.opacity = '100%';
    }
  }
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('.userName').value.trim();
  const password = document.querySelector('.password').value.trim();
  const firstName = document.querySelector('.firstName').value.trim();
  const lastName = document.querySelector('.lastName').value.trim();
  const bio = document.querySelector('.bio').value.trim();
  const github = document.querySelector('.github').value.trim();

  console.log(userName);

  if (
    userName &&
    password &&
    firstName &&
    lastName &&
    bio &&
    github &&
    selectedPic
  ) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        password,
        bio,
        github,
        userName,
        firstName,
        lastName,
        selectedPic,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      document.querySelector('.signup-warning').textContent =
        'Failed to signup';
      console.log('FAILED');
    }
  } else {
    document.querySelector('.signup-warning').textContent =
      'Please fill out all fields';
  }
};

const submitSignupLogin = document
  .querySelector('.form__button')
  .addEventListener('click', signupFormHandler);

console.log('hello');
