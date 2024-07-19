//player 1 dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImg = "dice" + randomNumber1 + ".png"

let randomImgSrc = "images/" + randomDiceImg;

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSrc);

//player 2 dice

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

let img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}
