const isPrime = require("./isPrime.js"); // importing the Isprime funciton...

const numbers = [2, 10, 17, 21, 29];

numbers.forEach((el)=>{
    
    if(isPrime(el)){
        console.log(`${el} is a Prime`);
    }
    else{
        console.log(`${el} is not a Prime num.`);
    }
    
});

