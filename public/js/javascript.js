// let apiKey = '6299fa055f9743a8aa1b9c729d55a10e';
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.querySelector('.close-button');

var postModalButton = document.getElementById('postModalButton');
var postModal = document.getElementById('postModal');
var closetBtnPost = document.querySelector('.close-button-post');

// let url =
//   'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6299fa055f9743a8aa1b9c729d55a10e';

// const getNews = async () => {
//   fetch(url)
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (news) {
//           getAll(news);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert('Unable to connect to News');
//     });
// };







modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

postModalButton.addEventListener('click', openPostModal);
closetBtnPost.addEventListener('click', closeModalAction);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

function openPostModal() {
  postModal.style.display = 'block';
}

function closeModalAction() {
  postModal.style.display = 'none';
}
