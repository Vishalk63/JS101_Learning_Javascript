 // Use the same function to print Non-Primes from 2 to a given limit


function checkprime(num){
  let count=0;
  for(i=1;i<=num;i++){
    if(num%i==0){
      count++
    }
  }
  if(count!=2){
    console.log(num,"is not prime")
  }

}
start=2;
end=10;

for(let j=start;j<=end;j++){
 let num = j
  checkprime(num)
  
}
