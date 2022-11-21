document.getElementById("btn-users").addEventListener('click', getUsers);

function getUsers() {
  fetch("http://localhost:3000/users/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
}



async function fetchData(route = '', data = {}, GET) {
    const response = await fetch(`http://localhost:3000${users}`, {
      method: GET, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }




const register_form = document.getElementById("register_form");
if(register_form) register_form.addEventListener("submit", UserObject);


function UserObject(e){
    e.preventDefault();
    let firstname =((document.getElementById("first_name")||{}).value)||"";
    let lastname = ((document.getElementById("last_name")||{}).value)||"";
    let email_id = ((document.getElementById("email_id")||{}).value)||"";
    let create_password= ((document.getElementById("create_password")||{}).value)||"";
    let confirm_password= ((document.getElementById("confirm_password")||{}).value)||"";
    let note = ((document.getElementById("note")||{}).value)||"";
    const newUser = new User(firstname,lastname,email_id,create_password,confirm_password,note);
    console.log(newUser);

}



function User(firstname,lastname,email_id,create_password,confirm_password,note){
    this.firstname = firstname;
    this.lastname = lastname; 
    this.email_id = email_id; 
    this.create_password = create_password; 
    this.confirm_password = confirm_password;
    this.note = note;
}

User.prototype.getFirstName = function(){
    return this.firstname;
}

User.prototype.getLastName = function(){
    return this.lastname;
}

User.prototype.getEmail = function(){
    return this.getEmail;
}

User.prototype.getpassword = function(){
    return this.create_password;
}
User.prototype.getconfirmpassword = function(){
    return this.confirm_password;
}

User.prototype.getnote = function(){
    return this.note;
}


User.prototype.setFirstName = function(firstname){
    this.firstname = firstname;
}

User.prototype.setLastName = function(lastname){
    this.lastname = lastname;
}

User.prototype.setusername = function(email_id){
    this.email_id = email_id;
}

User.prototype.setpassword = function(create_password){
    this.create_password = create_password;
}
User.prototype.getconfirmpassword = function(confirm_password){
    this.confirm_password = confirm_password;
}

User.prototype.setnote = function(note){
    this.note = note;
}

let loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("pswd").value;
  let users1 = new User(userName, password);

  fetchData("/users/login", users1, "POST")
  .then((data) => {
    console.log(data);
    window.location.href = "bmi.html";
  })
  .catch((err) => {
    console.log(`Error!!! ${err.message}`)
  }) 

}