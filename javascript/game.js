// the following object will keep track of the user score 

var wins = 0;
var losses = 0;
var currentScore = 0;
var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#targetScore").innerhtml(targetScore); // this inserts our target score random number into a div
console.log(targetScore)


// the following will set the random value for each of our gems


var ruby = Math.floor(Math.random() * 20);
var sapphire = Math.floor(Math.random() * 20);
var amber = Math.floor(Math.random() * 20);
var diamond = Math.floor(Math.random() * 20);
		

// the following will compare the targetScore to the currentScore. If the two are equal the user wins!

if (currentScore === targetScore) {
	wins ++

}




