//create an output of days, weeks, and months left til you are 90 years old

function lifeInWeeks(age) {
    var yearsLeft = 90 - age;
    var days = yearsLeft * 365;
    var weeks = yearsLeft * 52
    var months = yearsLeft * 12

    console.log("You have " + days + " days," + weeks + " weeks, and " + months + " months left.")
}
