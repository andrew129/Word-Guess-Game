//main array//
let words = ["sailboat", "saltwater", "sanddollars", "sandals", "tidepool", "waves", "surfing", "relax", "margarita", "dunes", "escape", "jellyfish", "shark", "cabana", "exotic", "palmtrees", "coral", "conch", "breeze", "shells", "tikis", "torches", "tropical", "sunset", "beachball", "umbrella", "swimsuit", "swimming", "sunburn", "bikini", "pinacolada", "calypso", "bossanova", "starfish", "seahorse", "sunglasses", "snorkeling", "yacht", "steeldrum", "xylophone", "coconut", "pineapple", "aruba", "jamaica", "bermuda", "bahamas", "hawaii", "ocean", "hibiscus", "paradise", "getaway", "vacation", "conch", "lightningwhelk", "treasure", "sunkenship", "lighthouse", "seagulls", "pelicans", "paddleboarding", "whales", "seaweed", "island", "sea turtles", "hammock", "oceanview", "clownfish", "anemone", "octopus", "hawaiian", "salt life"]
// main variables//
let wins = 0;
let losses = 0;
let newWords = [];
let guessesLeft = 12;
let lettersGuessed = [];
//references to html//
let directionsText = document.getElementById("directions-text");
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessesLeftText = document.getElementById("guessesleft-text");
let lettersGuessedText = document.getElementById("lettersguessed-text");
let wordInProgress = document.getElementById("word-in-progress");
let statement = document.getElementById("statement");
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
//replacing blanks with correct letter//   
for (let i = 0; i < newWords.length; i++) {
    if (randomWord[i] === userGuess) {
        newWords[i] = userGuess;
        wordInProgress.textContent = newWords.join('');
    }
    
}

//functions//
function updateWins() {
    document.querySelector("#wins-text").textContent = "wins: " + wins;
    statement.textContent = "Nice One!!!"
  }

function updateLosses() {
    document.querySelector("#losses-text").textContent = "losses: " + losses;
    statement.textContent = "You lost, The correct word was " + randomWord;
}

function reset() {
    //main variables//
    newWords = [];
    guessesLeft = 12;
    lettersGuessed = [];
    //references to html//
    directionsText = document.getElementById("directions-text");
    winsText = document.getElementById("wins-text");
    lossesText = document.getElementById("losses-text");
    guessesLeftText = document.getElementById("guessesleft-text");
    lettersGuessedText = document.getElementById("lettersguessed-text");
    wordInProgress = document.getElementById("word-in-progress");
    statement = document.getElementById("statement");
    //selecting random word//
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log("rand", randomWord);
    //adding blanks in place of the random word//
    underscore = randomWord.split('');
    newUnderscore = underscore.forEach(function (item) {
        newWords.push(item.replace(item, '_'));
    });
    console.log(newWords.join(''));
    wordInProgress.textContent = newWords.join('');
    //start game functions//
        userGuess = event.key;
    //replacing blanks with correct letter//   
    for (let i = 0; i < newWords.length; i++) {
        if (randomWord[i] === userGuess) {
            newWords[i] = userGuess;
            wordInProgress.textContent = newWords.join('');
        }
    }      
}

//conditionals//
if (newWords.join('') === randomWord) {
    wins++
    updateWins(); 
    reset();
}

if (userGuess) {
    lettersGuessed.push(userGuess)
    guessesLeft--;
}

if (guessesLeft === 0) {
    losses++;
    updateLosses();
    reset()
}

//default text//
directionsText.textContent = "";
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeftText.textContent = "guesses left: " + guessesLeft;
lettersGuessedText.textContent = "You guessed: " + lettersGuessed; 
}











