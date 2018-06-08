// $(document).ready(function() {
var psychicLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var youWin = 0;
var youLose = 0;
var guessesLeft = 13;
var guessedLetters = []; //Array to capture user letter input also guess what letter system is thinking about 

document.onkeyup = function(event) {
    var yourGuess = event.key; //variable to capute user guess
    guessedLetters.push(yourGuess); //this to capture letters entered by the user    
    var psychicAns = psychicLetters[Math.floor(Math.random() *    psychicLetters.length)];
    //if the guess matches the psychic guess then 
    //a point is added to the "Wins" and the guesses restarts
    if (yourGuess === psychicAns) {
      youWin++;
      guessesLeft = 10;
    }
    //if does not not match the psychic guess, number of guesses remaining are deducted
    else {
      guessesLeft--;
    }
    //if the guesses remaining = 0, you lose, an increment is added to "Losses" and the points restart
    if (guessesLeft === 0){
      youLose++;
      guessesLeft = 10;
    }
    var html =  "<p>Wins: " + youWin + "</p>" + "<p>Loses: "+ youLose + "<p>Guesses Left: " + guessesLeft + 
    "<p>Guessed Letters: " +  guessedLetters.join(', '); 
    //guessed letters
    document.querySelector("#psychicAct").innerHTML = html;
    }
    // //var html = "<h2>Try to Guess what letter the computer will select:</h2>" + "<p>Wins: " + youWin + "</p>" + 
    //  "<p>Loses: "+ youLose + "<p>Guesses Left: " + guessesLeft + "<p>Guessed Letters: " +  guessedLetters.join(', '); 