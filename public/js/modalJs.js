const submitModalButton = document.querySelectorAll('#modal-submit-button');
let post;
let typePost;

const modalEvent = async () => {
    if (post === 'text') {
      typePost = false;
    } else {
      typePost = true;
    }
  
    const inp = document.getElementById('modal-textarea').value.trim();
  
    if (inp) {
      const response = await fetch('/create/modal', {
        method: 'POST',
        body: JSON.stringify({ inp, typePost }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        
      }
    }
  };
  
  for (let i = 0; i < submitModalButton.length; i++) {
    submitModalButton[i].addEventListener('click', function () {
      post = submitModalButton[i].getAttribute('data-type');
      modalEvent();
    });
  }