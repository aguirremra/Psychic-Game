var charCode, keyPress, wins, losses, guessesSoFar, guessesLeft, message, winsCount, lossesCount, guessesCount, letter, arr;

arr = "";

//get elements
wins = document.getElementById("wins");
losses = document.getElementById("losses");
guessesSoFar = document.getElementById("guessesSoFar");
randomLetter = document.getElementById("randomLetter");
guessesLeft = document.getElementById("guessesLeft");
message = document.getElementById("message");


resetVariables();
setVariables();

function setVariables(){
	letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));	
	keyCode = "";
	keyPress = "";
	guessesCount = 10;
	getGuessesSoFar();
	arr = [];

}
function resetVariables(){	
	winsCount = 0;
	lossesCount = 0;
	getWinsCount();
	getLossesCount();
}

function getWinsCount(){
	wins.innerHTML = "Wins: " + winsCount; 
}
function getLossesCount(){
	losses.innerHTML = "Losses: " + lossesCount;
}
function getGuessesSoFar(){
	guessesSoFar.innerHTML = "Letters so far: " + arr;
}
function getGuessesCount(){
	guessesLeft.innerHTML = "Guesses Left: " + guessesCount;
}	

document.onkeyup=function(event){
    keyPress = event.key;
    keyCode = event.keyCode;
    if(validateKeys(keyCode)){
    	arr.push(keyPress);
    	getGuessesSoFar();
	    	if(checkWinsLosses(keyPress)){
		    	getWinsCount();
		    	setVariables();
	    	}else{
		    	guessesCount--;
		    	getGuessesCount();
		    	checkGuesses(guessesCount);
	    	} 	
    } else{
    	setVariables();
    }  
}
function checkGuesses(count){
		if(count === 0){
			lossesCount++;
			getLossesCount();
			getGuessesCount();
			setVariables();
		}
}

function checkWinsLosses(keyPress){
	if(letter === keyPress){			
		winsCount++;
		return true;
	}else{
		return false;
	}
}
function validateKeys(keyCode){
	if(keyCode > 64 && keyCode < 91){
		return true;
    } else{
    	return false;
    }
}