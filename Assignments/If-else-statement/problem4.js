// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
// data
let data_username = "Vishal";
let data_password = 12345;

let username = "Vishal";
let password = 12345;

if(data_username === username){
   if(data_password === password){
    console.log("Congratulation You are Successfully Login")
   }
  else{
    console.log("Wrong Password")
  }
}
else{
  console.log("You are Unable to Login")
}