// https://www.safaribooksonline.com/library/view/html5-canvas/9781449308032/ch01s09.html
//http://coderdojosv.github.io/javascript-browser-game/
var guessCount, randomLetter, maxGuesses, guessesLeft, wins, losses, roundOver, roundCount, keyPress;

resetVariables();
setVariables();

function resetVariables(){
	randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
	wins = 0;
	losses = 0;
	roundCount = 0;	
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	document.getElementById("maxGuesses").innerHTML = "Max Guesses: " + maxGuesses;
	document.getElementById("message").innerHTML = "";
}

function setVariables(){
	guessCount = 0;
	keyPress = "";	
	maxGuesses = 3;
	guessesLeft = 3;
	roundOver = false;
	document.getElementById("randomLetter").innerHTML = "The random letter is " + randomLetter;
	document.getElementById("guessesSoFar").innerHTML = "Your guesses so far:";
	document.getElementById("guessesLeft").innerHTML = "Guesses Left:";
	document.getElementById("guessCount").innerHTML = "Guess Count:";
	document.getElementById("roundCount").innerHTML = "Round Count:";
}	

document.onkeyup=function(event){
	if(!roundOver && roundCount <= 5){
    keyPress = event.key;
    document.getElementById("guessesSoFar").innerHTML += " " + keyPress;
    checkGuess(keyPress);
     }
     else{
     	document.getElementById("message").innerHTML = "Game Over!! Press another key to restart game.";
     	setVariables();
		resetVariables();
		return;
     }	
}

function checkGuess(keyPress){	
	if(randomLetter === keyPress){
		document.getElementById("message").innerHTML = "You won this round. Press another key to continue.";
		wins += 1;
		roundOver = true;
		roundCount += 1;
		setVariables();
	}
	else{
		//do nothing here
	}
	guessCount += 1;
	guessesLeft -= 1;

	if(guessCount > maxGuesses){
	document.getElementById("message").innerHTML = "You lost this round. Press another key to continue.";
	roundOver = true;
	losses += 1;
	roundCount += 1;
	setVariables();
	}
	
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
	document.getElementById("maxGuesses").innerHTML = "Max Guesses: " + maxGuesses;
	document.getElementById("guessCount").innerHTML = "Guess Count: " + guessCount;	
	document.getElementById("roundCount").innerHTML = "Round Count: " + roundCount;
}




