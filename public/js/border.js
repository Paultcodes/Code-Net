const borderButton = document.querySelectorAll('.levelborder');
const submitBorder = document.querySelector('.submit-border');
let borderSet;


//Event listener for border selection buttons. 
//When a button is clicked, the selected border option is stored in the 'borderSet' variable and the opacity of the other buttons is adjusted to indicate which option is currently selected. 
//The 'changeOp' function is called with the selected border option as an argument.
for (let i = 0; i < borderButton.length; i++) {
  borderButton[i].addEventListener('click', function () {
    borderSet = borderButton[i].getAttribute('data-border');
    changeOp(borderSet);
    console.log(borderSet);
  });
}

function changeOp(bordbtn) {
  for (let i = 0; i < borderButton.length; i++) {
    const bord = borderButton[i].getAttribute('data-border');
    if (bord !== bordbtn) {
      borderButton[i].style.opacity = '50%';
    } else {
      borderButton[i].style.opacity = '100%';
    }
  }
}

submitBorder.addEventListener('click', async function () {
  const response = await fetch('/settings/updateBorder', {
    method: 'PUT',
    body: JSON.stringify({ borderSet }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.querySelector('.border-update').textContent =
      'Updated Profile Border';
  } else {
    document.querySelector('.border-update').textContent =
      'Failed to update border';
  }
});
