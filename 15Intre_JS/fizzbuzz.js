//create a fizzbuzz for numbers divided by 3,5, and both

//while loop
let output = [];
let count = 1;

function fizzBuzz() {
    while(count <= 100) { //this will print fizzBuzz 100 times
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz")
        }
        else if (count % 3 === 0) {
            output.push("Fizz")
        }
        else if (count % 5 === 0) {
            output.push("Buzz")
        } else {
            output.push(count)
        }
        count++; //removing this will have the while loop run infinitely
        console.log(output)
    }
}

fizzBuzz()


//for loop
function fizzBuzz() {
    for(let count = 1; count < 101; count++) { //this will print fizzBuzz 100 times
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz")
        }
        else if (count % 3 === 0) {
            output.push("Fizz")
        }
        else if (count % 5 === 0) {
            output.push("Buzz")
        } else {
            output.push(count)
        }
        console.log(output)
    }
}

fizzBuzz()
