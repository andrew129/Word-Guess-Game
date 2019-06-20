 //main array//
let words = ["tawdry", "arch", "jar", "bike", "book", "wash", "boundary", "stiff", "real", "future", "learn", "seperate", "conceive", "ant", "fool", "defendant", "market", "tin", "censorship", "wedding", "unrest", "smell", "direct", "cunning", "sensation", "bag", "bury", "foster", "true", "enthusiasm", "parking", "cater", "rotate", "rescue", "wrist", "pass", "fibre", "location", "god", "mourning", "spread", "easy", "stem", "chance", "supplementary", "boom", "protest", "merchant", "contempt", "dividend", "eat", "bread", "deficit", "body", "scan", "wealth", "cheese"]
// main variables//
let wins = 0;
let losses = 0;
let blankWord = [];
let guessesLeft = 10;
let reset = "";
//references to html//
let directionsText = document.getElementById("directions-text");
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessesLeftText = document.getElementById("guessesleft-text");
let lettersGuessedText = document.getElementById("lettersguessed-text");
let wordInProgress = document.getElementById("word-in-progress");
//selecting random word//
let randomWord = words[Math.floor(Math.random() * words.length)];
//adding blanks in place of the random word//
for (i = 0; i < randomWord.length; i++) {
    blankWord.push("_");
}

console.log(blankWord.split)

console.log('randomword', randomWord);
console.log(blankWord)

wordInProgress.textContent = blankWord;
//start game functions//
document.onkeyup = function(event) {
    let userGuess = event.key;
    
for (i = 0; i < randomWord.length; i++) {
    if (userGuess = randomWord[i]){
     blankWord = randomWord.replace(i, userGuess); 
    }
}
    







    directionsText.textContent = "";
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "guesses left: " + guessesLeft;
    lettersGuessedText.textContent = "You guessed: " + userGuess;
    
}
