 //main array//
let words = ["sailboat", "saltwater", "sanddollars", "sandals", "tidepool", "waves", "surfing", "relax", "margarita", "dunes", "escape", "jellyfish", "shark", "cabana", "exotic", "palm trees", "coral", "conch", "breeze", "shells", "tikis", "torches"]
// main variables//
let wins = 0;
let losses = 0;
let newWords = [];
let guessesLeft = 10;
let lettersGuessed = [];
//references to html//
let directionsText = document.getElementById("directions-text");
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessesLeftText = document.getElementById("guessesleft-text");
let lettersGuessedText = document.getElementById("lettersguessed-text");
let wordInProgress = document.getElementById("word-in-progress");
//selecting random word//
let randomWord = words[Math.floor(Math.random() * words.length)];
console.log("rand", randomWord);
//adding blanks in place of the random word//
let underscore = randomWord.split('');
let newUnderscore = underscore.forEach(function (item) {
    newWords.push(item.replace(item, '_'));
});
console.log(newWords.join(''));
wordInProgress.textContent = newWords.join('');
//start game functions//
document.onkeyup = function(event) {
    let userGuess = event.key;
    
for (let i = 0; i < newWords.length; i++) {
    if (randomWord[i] === userGuess) {
        newWords[i] = userGuess;
        wordInProgress.textContent = newWords.join('');
    }
    
}
    

if (userGuess) {
    guessesLeft--;
}

if (guessesLeft === 0) {
    alert("game over");
}



directionsText.textContent = "";
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeftText.textContent = "guesses left: " + guessesLeft;
lettersGuessedText.textContent = "You guessed: " + userGuess; 
}
