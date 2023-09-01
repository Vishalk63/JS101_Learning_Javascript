// Given an array of numbers find the average of all the even numbers.

let items = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let sum =0;
// let count =0;

for(i=0; i<items.length; i++)
  {
    sum = sum + items[i];
    // count++;
  }
// console.log(sum)
// console.log(count)
console.log("Avarage is "+ sum/items.length)

