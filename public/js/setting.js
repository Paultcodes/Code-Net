const btnSet = document.querySelectorAll('.avatar');
const headerBtn = document.querySelectorAll('.set-header');
let picSet;
let headerSet;

const updateUserInfo = async (event) => {
  event.preventDefault();
  const firstName = document.getElementById('first').value.trim();
  const lastName = document.getElementById('last').value.trim();
  const username = document.getElementById('setting-username').value.trim();
  const bio = document.getElementById('setting-bio').value.trim();
  const github = document.getElementById('setting-github').value.trim();

  console.log(firstName)

  if (firstName && lastName && username && bio && github) {
    const response = await fetch('/settings/updateUser', {
      method: 'PUT',
      body: JSON.stringify({ firstName, lastName, username, bio, github }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Updated');
    } else {
      alert('failed');
    }
  }
};

for (let i = 0; i < btnSet.length; i++) {
  btnSet[i].addEventListener('click', function () {
    picSet = btnSet[i].getAttribute('data-avatar');
    changeProOpacity(picSet);
    console.log(picSet);
  });
}

function changeProOpacity(btnn) {
  for (let i = 0; i < btnSet.length; i++) {
    const element = btnSet[i].getAttribute('data-avatar');
    if (element !== btnn) {
      btnSet[i].style.opacity = '50%';
    } else {
      btnSet[i].style.opacity = '100%';
    }
  }
}

for (let i = 0; i < headerBtn.length; i++) {
  headerBtn[i].addEventListener('click', function () {
    headerSet = headerBtn[i].getAttribute('data-header-name');
    changeOpacity(headerSet);
    console.log(headerSet);
  });
}

function changeOpacity(b) {
  for (let i = 0; i < headerBtn.length; i++) {
    const element = headerBtn[i].getAttribute('data-header-name');
    if (element !== b) {
      headerBtn[i].style.opacity = '50%';
    } else {
      headerBtn[i].style.opacity = '100%';
    }
  }
}

const updateProfilePic = async (event) => {
  event.preventDefault();
  const response = await fetch('/settings/updatePic', {
    method: 'PUT',
    body: JSON.stringify({ picSet }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const confirm = document.querySelector('.updated-text');
    confirm.textContent = 'Updated profile picture';
  } else {
    alert('failed');
  }
};

const updateHeaderHandler = async () => {
  const response = await fetch('/settings/updateHeader', {
    method: 'PUT',
    body: JSON.stringify({ headerSet }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const headerAlert = document.querySelector('.update-header-alert');
    headerAlert.textContent = 'Updated header';
  } else {
    alert('failed');
  }
};



const updateUserButton = document.querySelector('.update-user-button');
const btnn = document.querySelector('.setting-pic-button');
const headerButtonSubmit = document.querySelector('.submit-header');

updateUserButton.addEventListener('click', updateUserInfo);

headerButtonSubmit.addEventListener('click', updateHeaderHandler);
btnn.addEventListener('click', updateProfilePic);
