// Problem 2 : Given a character in lower case print the upper case character
let str = "vishal";

// str = str.toUpperCase();

// console.log(str)


let lower="abcdefghijklmnopqrstuvwxyz"
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let bag=""
for(i=0;i<str.length;i++){
  for(j=0;j<lower.length;j++){
    if(str[i]===lower[j]){
      bag=bag+upper[j];
    }
  }
}
console.log(bag)
