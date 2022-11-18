<<<<<<< HEAD

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

=======

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

>>>>>>> b51f686 (project)
