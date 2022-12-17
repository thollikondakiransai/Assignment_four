import { getCurrentUser, fetchData, removeCurrentUser, setCurrentUser} from "./main.js";

let user = getCurrentUser(); 
if(!user) window.location.href = "Assignment2_two.html";

console.log(user);

let Email_ID = user.email_id; 
console.log(Email_ID);

let deleteBtn = document.getElementById("delete-account");
if(deleteBtn) deleteBtn.addEventListener('click', deleteAccount);

function deleteAccount() {

  if(confirm("Are you sure you want to delete your account???")) {
    fetchData("/users/delete", user, "DELETE")
    .then((data) => {
      removeCurrentUser();
    })
    .catch((err) => {
      console.log(err)
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
  } 
}

let editForm = document.getElementById("edit-form");
if(editForm) editForm.addEventListener('submit', editUser);

function editUser(e) {
  e.preventDefault();

  let email_id = document.getElementById('email_id').value;
  user.email_id = email_id;

  fetchData("/users/edit", user, "PUT")
  .then((data) => {
    console.log(data);
    setCurrentUser(data)
    window.location.href = "profile.html"
  })
  .catch((err)=>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}