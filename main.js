
const register_form = document.getElementById("register_form");
if(register_form) register_form.addEventListener("submit", UserObject);


function UserObject(e){
    e.preventDefault();
    let firstname = document.getElementById("first_name").value;
    let lastname = document.getElementById("last_name").value;
    let email_id = document.getElementById("email_id").value;
    // let Create_password = document.getElementById("Create_password").value;
    let Confirm_password = document.getElementById("confirm_password").value;
    let note = ""; //document.getElementById("note").value;
    const newUser = new User(firstname,lastname,email_id,Create_password,Confirm_password,note);
    console.log(newUser);
    // console.log(`firstname = ${firstname}`)
    // console.log(`lastname = ${lastname}`) 
    // console.log(`username = ${username}`)
    // console.log(`note = ${note}`) 
}



function User(firstname="",lastname="",email_id,Create_password,Confirm_password,note=""){
    this.firstname = firstname;
    this.lastname = lastname; //document.getElementById("lastname").value;
    this.email_id = email_id; //document.getElementById("username").value;
    this.Create_password = Create_password; //document.getElementById("password").value;
    this.Confirm_password= Confirm_password;
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
    return this.Create_password;
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

//User.prototype.setpassword = function(Create_password){
  //  this.Create_password = Create_password;
// }

User.prototype.setnote = function(note){
    this.note = note;
}

// let user = new UserObject();
// //user.setFirstName("Becky");
// console.log(user.getFirstName());
// console.log(user.getLastName());
// console.log(user.getusername());
//console.log(user.getpassword());

// const userobject = new User("Bhargavi","Yannavarapu","bhargavi.y","password123");
// userobject.setFirstName("susheel");
// userobject.setLastName("reddy");
// let naam = userobject.getFirstName();
// userobject.setusername(naam);
// console.log(userobject);