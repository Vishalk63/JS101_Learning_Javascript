// Write a function to replace spaces in a given string with 

let str = "masai school"

function replace(str){
  let bag =""
  for(i=0;i<str.length;i++){
    if(str[i]==" "){
      bag = bag + "-";
    }
    else{
      bag = bag +str[i];
    }
  }
  console.log(bag)
  
}

replace(str);