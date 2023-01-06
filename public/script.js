const login = document.getElementById('login');
const termButton = document.getElementById('term-btn');

const getlogin = () =>
  fetch('/api/login', {
    method: 'GET',
  })
    .then((res) => res.json())
    console.log("wrong login information")
    .then((data) => data);

 
alert("Your response was: " + response);
    

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')

  .then((response) => response.json())
  .then((data) => console.log(data));


  const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


// Helper function that accepts a `review` object, sends a POST request and returns the result
const postReview = (review) =>
  // Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
  fetch('/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

