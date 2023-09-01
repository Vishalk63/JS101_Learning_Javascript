// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let start =1;
let end =100;
let sum =0;
let count =0;
let avarage =0;

while( start <= end)
  {
    if(start % 2 == 0)
    {
      sum = sum+start;
      count++;
    }
    start++;
  }
 avarage =sum/count;
console.log("The avarage value of "+end+ " is " +avarage);