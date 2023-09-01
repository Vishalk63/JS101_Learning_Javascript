// Write a function to check if the char is a small case or not.

let char = "z"

function checksmallcase(char){
  str="abcdefghijklmnopqrstuvwxyz"
  flag= false;
  for(i=0;i<str.length;i++){
    if(char==str[i]){
      flag=true;
      break;
    }
    
  }
  if(flag==true){
   return "Smallercase"
  }
  else{
   return "Upparcase"
  }
}
let result = checksmallcase(char);
console.log(result)