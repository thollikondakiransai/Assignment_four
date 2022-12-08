const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email_id VARCHAR(255) NOT NULL UNIQUE,
    create_password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

// grabbing all users in database
async function getAllUsers() {
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users)
}

// Create  User - Registering
async function register(user) {
  let cUser = await getUser(user);
  if(cUser.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO users (first_name, last_name, email_id, create_password)
    VALUES ("${user.first_name}","${user.last_name}","${user.email_id}", "${user.create_password}");
  `
  await con.query(sql);
  return await login(user);
}

// Read User -- login user
async function login(user) { // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(user); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

// Update User function
async function editUser(user) {
  let sql = `UPDATE users 
    SET first_name = "${user.first_name}"
    WHERE userID = ${user.userID}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

// Delete User function
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}

// Useful Functions
async function getUser(user) {
  let sql;

  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE email_id = "${user.email_id}"
  `;
  }
  return await con.query(sql);  
}

/*
let cathy = {
  userID: 5,
  userName: "cathy123",
  password: "icecream"
}; 

login(cathy);
*/

module.exports = { getAllUsers, login, register, editUser, deleteUser};