import { fetchData, getCurrentUser } from './main.js'

// user class
class Note {
  constructor(noteContent, userID) {
    this.noteContent = noteContent;
    this.userID = userID;
  }
}

// login functionality
let noteForm = document.getElementById("usernote");
if(noteForm) noteForm.addEventListener('submit', saveNote);

let userone=getCurrentUser();
//console.log("user",user1)
function saveNote(e) {
  e.preventDefault();
  
  let userID=userone.userID;
  let noteContent = document.getElementById("note").value;
  let note = new Note(noteContent,userID);

  fetchData("/notes/newnote", note, "POST")
  .then((note) => {
    window.location.replace = "Assignment2_three.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}