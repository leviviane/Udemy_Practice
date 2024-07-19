let numOfDrumsButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numOfDrumsButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!")
    })
}






