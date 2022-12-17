import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(first_name,last_name,email_id, create_password) {
    this.first_name=first_name;
    this.last_name=last_name;
    this.email_id = email_id;
    this.create_password = create_password;
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
let regForm = document.getElementById("registerationnform");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();
  let first_name=document.getElementById("first_name").value;
  let last_name=document.getElementById("last_name").value;
  let email_id = document.getElementById("email_id").value;
  let password = document.getElementById("password").value;
  let user = new User(first_name, last_name, email_id, password);

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