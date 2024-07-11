//if statements following flow chart
function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year";
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year."
    }
}


var output = [];
var count = 1;

function fizzBuzz() {
    output.push(count);
    count++;
    console.log(output)
}
