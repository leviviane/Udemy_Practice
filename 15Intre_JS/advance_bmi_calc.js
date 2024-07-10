function bmiCalculator (weight, height) {

    let bmi = weight / Math.pow(height, 2);
    // let message;

    if (bmi < 18.5) {
        message = "Your BMI is " + bmi + ", so you are underweight."
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Your BMI is " + bmi + ", so you have a normal weight."
    } else {
        message = "Your BMI is " + bmi + ", so you are overweight."
    }

    return message;
}

console.log(bmiCalculator(100, 180))
