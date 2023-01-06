const btn = document.querySelectorAll('.avatar');
let selectedPic


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function (event) {
    event.preventDefault();
    selectedPic = btn[i].getAttribute('data-avatar');
    changeOpacity(selectedPic);
    console.log(selectedPic)
  });
}

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

