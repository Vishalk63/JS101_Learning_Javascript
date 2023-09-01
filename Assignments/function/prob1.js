 // Create a function to check if a number is Prime or Not

function checkPrime(num){

  let count=0;
  for(i=1;i<=num;i++){
    if(num%i==0){
      count++;
    }
  }
  if(count==2){
    console.log(num,"is a Prime")
  }
  else{
    console.log(num,"is a Not Prime")
  }
  
}
checkPrime(6);