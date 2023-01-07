//grabbing all the avatar class buttons
const btn = document.querySelectorAll('.avatar');
let selectedPic

//function to loop through all the buttons after one is selected
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function (event) {
    event.preventDefault();
    selectedPic = btn[i].getAttribute('data-avatar');
    changeOpacity(selectedPic);
    console.log(selectedPic)
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
};

fetch('http://localhost:3001/signup/user?'), {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'user',
  })
}
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'));