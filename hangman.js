var POSSIBLE_WORDS = ["obdurate", "verisimilitude",
    "defenestrate", "obsequious", "dissonant", "today", "idempotent"];
var MAX_GUESSES = 6;
var word="";
var guesses = "";
var guess_count = MAX_GUESSES;
var gameOver = false;

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;

    document.getElementById("clue").innerHTML = "";
    document.getElementById("guesses").innerHTML = "Guessed Letters: ";
    document.getElementById("hangmanImage").src = "images/hangman6.gif";
    updatePage();
    }

function guessLetter() {
    if (gameOver || word === "") return;
    var input = document.getElementById("guess");
    var letter = input.value;
    if (letter === "" || guesses.indexOf(letter) >= 0) return;
    if (word.indexOf(letter) < 0) {
        guess_count--;
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
var guessArea = document.getElementById("guesses");
guessArea.innerHTML = "Guessed Letters" + guesses;

var image = document.getElementById("hangmanImage");
image.src = "images/hangman" + guess_count + ".gif";

if (allGuessed) {
    guessArea.innerHTML += "<br> You Win!";
    gameOver = true;
} else if  (guess_count <= 0) {
    guessArea.innerHTML += "<br>You LOSE! The word was: " + word;
    gameOver = true;
}