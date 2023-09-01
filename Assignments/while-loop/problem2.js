// Print the odd numbers from 0 till the given limit

let start =0;
let end =10;
let total =0;

while(start <= end)
  {
    if(start % 2 != 0)
    {
      console.log(start + " is a Odd number")
      total = total+start;
    }
    start++;
  }
console.log("The total of Odd numbers is " +total);

