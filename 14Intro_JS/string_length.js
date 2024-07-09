var tweet = prompt("What is your tweet?")

//! length example
// var tweetCount = tweet.length
// var wordCount = 280;
// var countLeft = wordCount - tweetCount;

// alert("You have written " + tweetCount + ", you have " + countLeft + " left.")

//! slice example
// var sliceTweet = tweet(0, 280);
// alert(sliceTweet);

//! capitalize first letter of name
var name = prompt("What is your name?")

var firstLetter = name.slice(0,1)
var capFirstLetter = firstLetter.toUppercase()
var restOfName = name.slice(1, name.length).toLowerCase()
var combineName = capFirstLetter + restOfName
alert("Hello " + combineName)
