const btn = document.querySelectorAll('.button');
let selectedPic

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    selectedPic = btn[i].getAttribute('data-pic-name');
    changeOpacity(selectedPic);
    console.log(selectedPic)
  });
}

function changeOpacity(b) {
  for (let i = 0; i < btn.length; i++) {
    const element = btn[i].getAttribute('data-pic-name');
    if (element !== b) {
      btn[i].style.opacity = '50%';
    } else {
      btn[i].style.opacity = '100%';
    }
  }
}