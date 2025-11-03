var POSSIBLE_WORDS = ["obdurate", "verisimilitude",
    "defenestrate", "obsequious", "dissonant", "today", "idempotent"];
var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;
var gameOver = false;

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    gameOver = false;

    document.getElementById("clue").innerHTML = "";
    document.getElementById("guesses").innerHTML = "Guessed Letters: ";
    document.getElementById("hangmanImage").src = "images/hangman6.gif";

    updatePage();
    }

function guessLetter() {
    if (gameOver || word === "") return;
    var input = document.getElementById("guess");
    var letter = input.value.toLowerCase();
    if (letter === "" || guesses.indexOf(letter) >= 0) {
        input.value = "";
        return;
    }

    if (word.indexOf(letter) < 0) {
        guess_count--;
        if (guess_count < 0) guess_count = 0;
    }
    guesses += letter;
    updatePage();
    input.value = "";
}
function updatePage() {
    var clueString = "";
    var allGuessed = true; 

    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) {//You guessed it
            clueString += currentLetter + " ";
        }
        else
            clueString += "_ ";
            allGuessed = false;
    }
}
document.getElementById("clue").innerHTML = clueString;
document.getElementById("guesses").innerHTML = "Guessed Letters: " + guesses
document.getElementById("hangmanImage").src = "images/hangman" + guess_count + ".gif";

if (allGuessed) {
    document.getElementById("guesses").innerHTML += "<br> You Win!";
    gameOver = true;
} else if  (guess_count <=0) {
    document.getElementById("guesses").innerHTML += "<br> You Lose! The word was:" + word;
    gameOver = true;

}
