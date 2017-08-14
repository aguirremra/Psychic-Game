var randomLetter, maxGuesses, guessesLeft, wins, losses, roundOver, roundCount, keyPress;

maxGuesses = 3;

resetVariables();
setVariables();

function resetVariables(){	
	wins = 0;
	losses = 0;
	roundCount = 0;
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	document.getElementById("maxGuesses").innerHTML = "Max Guesses: " + maxGuesses;
	document.getElementById("guessesSoFar").innerHTML += " " + keyPress;		
}

function setVariables(){
	randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
	keyPress = "";
	guessesLeft = 3;
	roundOver = false;
	document.getElementById("randomLetter").innerHTML = "The random letter is " + randomLetter;
	document.getElementById("guessesSoFar").innerHTML = "Your guesses so far:";
	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;	
}	

document.onkeyup=function(event){
	document.getElementById("message").innerHTML = "reset.";
	console.log("Round: " + roundCount);
	if(!roundOver && roundCount < 6){
    keyPress = event.key;
    console.log(keyPress);
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
	if(guessesLeft > 0){
		if(randomLetter === keyPress){			
			wins++;
			document.getElementById("wins").innerHTML = "Wins: " + wins;
			document.getElementById("message").innerHTML = "You won this round. Press another key to continue.";
			roundOver = true;
			roundCount++;
			document.getElementById("roundCount").innerHTML = "Round Count: " + roundCount;
			setVariables();
		}
	}
	else if(guessesLeft == 0){
		losses++;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		document.getElementById("message").innerHTML = "You lost this round. Press another key to continue.";
		roundCount++;
		document.getElementById("roundCount").innerHTML = "Round Count: " + roundCount;
		roundOver = true;
		setVariables();
	}	
	document.getElementById("guessesSoFar").innerHTML += " " + keyPress;
	guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}




