import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(email_id, password) {
    this.email_id = email_id;
    this.password = password;
   // this.fullName = fullName;
  }

  getUsername() {
    return this.email_id;
  }
}

// login functionality
let loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let email_id = document.getElementById("email_id").value;
  let password = document.getElementById("password").value;
  let user = new User(email_id, password);

  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "Assignment2_three.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
 
// register functionality
let regForm = document.getElementById("register_form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  let email_id = document.getElementById("email_id").value;
  let password = document.getElementById("password").value;
  let user = new User(email_id, password);

  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "Assignment2_two.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}