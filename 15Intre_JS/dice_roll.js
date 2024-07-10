//Math.random() will generate a random number to the 16th decimal from 0 to 0.99999999 to the 16th decimal and never reaches 1

let n = Math.random();
n = n * 6; //will give us a dice roll up to 6
n = Math.floor(n) + 1; // +1 will make sure the number reaches between 1-6

console.log(n);
