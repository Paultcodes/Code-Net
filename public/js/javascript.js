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

const newsSection = document.querySelector('.news');

function getAll(n) {
  console.log(n);

  for (let i = 0; i < n.articles.length - 8; i++) {
    const element = n.articles[i];
    const a = document.createElement('a');
    a.textContent = element.title;
    a.href = element.url;
    const img = document.createElement('img');
    img.classList.add('news-image');
    img.src = element.urlToImage;
    newsSection.appendChild(a);
    newsSection.appendChild(img);
  }
}

getNews();

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
