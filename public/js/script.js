var userlogin;


var response = confirm("Hey there, do you want to learn more about JavaScript?");  
alert("Your response was: " + response);
    

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')

  .then((response) => response.json())
  .then((data) => console.log(data));

 
