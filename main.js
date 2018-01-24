 //require inquirer
var inquirer = require('inquirer');
//require objects/exports
var Word = require('./word.js');
var List = require('./list.js');
var colors = require('colors');


var hangman = {
  wordBank: List.newWord.wordList,
  guessesRemaining: 7,
  //empty array to hold letters guessed by user. And checks if the user guessed the letter already
  guessedLetters: [],
  currentWord: null,
  //asks user if they are ready to play
  start: function() {
    var w = this;
    //clears guessedLetters before a new game starts if it's not already empty.
    if(this.guessedLetters.length > 0){
      this.guessedLetters = [];
    }
    console.log('-------------------'.red);
    inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "R U Ready for this?".zebra
    }]).then(function(answer) {
      if(answer.play){
        w.newGame();
      } else{
        console.log("thennn fuggedaboutit".zebra);
      }
    })},
  //if they want to play starts new game.
  newGame: function() {
    if(this.guessesRemaining === 7) {
      console.log('-------------------'.red);
      console.log("Let's do this");
      console.log('                    ');
      //generates random number based on the wordBank
      var randNum = Math.floor(Math.random()*this.wordBank.length);
      this.currentWord = new Word(this.wordBank[randNum]);
      this.currentWord.letterObjects();
      //displays current word as blanks.
      console.log('                     ');
      console.log(this.currentWord.wordRender());
      console.log('                     ');
      console.log('-------------------'.red);
      this.keepPromptingUser();
    } else{
      this.resetGuessesRemaining();
      this.newGame();
    }
  },
  resetGuessesRemaining: function() {
    this.guessesRemaining = 7;
  },
  keepPromptingUser : function(){
    //declare this to solve scope problems
    var w = this;
    //asks player for a letter
    inquirer.prompt([{
      name: "chosenLtr",
      type: "input",
      message: "choose a letter".zebra,
      }
    ]).then(function(letterInWord) {
      //toUpperCase because words in word bank are all caps
      var letterReturned = (letterInWord.chosenLtr).toUpperCase();
      //adds to the guessedLetters array if it isn't already there
      var guessedAlready = false;
        for(var i = 0; i<w.guessedLetters.length; i++){
          if(letterReturned === w.guessedLetters[i]){
            guessedAlready = true;
          }
        }
        //if the letter wasn't guessed already run through entire function, else reprompt user
        if(guessedAlready === false){
          w.guessedLetters.push(letterReturned);

          var found = w.currentWord.checkIfLetterFound(letterReturned);
          //if none were found tell user they were wrong
          if(found === 0){
            console.log('             ');
            console.log('Nope! U guessed wrong.');
            console.log('-------------------'.red);
            w.guessesRemaining--;
            console.log('-------------------'.red);
            console.log('Guesses: ' + w.guessesRemaining);
            console.log('                ');
            console.log('                ');
            console.log(w.currentWord.wordRender());
            console.log('-------------------'.red);
            console.log("U have guessed " + w.guessedLetters);
            console.log('-------------------'.red);
          } else{
            console.log('U guessed right!');
            console.log('                ');
              //checks to see if user won
              if(w.currentWord.searchWord() === true){
                console.log("The word is " + w.currentWord.wordRender());
                console.log('-------------------'.rainbow);
                console.log('-------------------'.rainbow);
                console.log('-------------------'.rainbow);
                console.log('      U WON!!!'.rainbow);
                console.log('-------------------'.rainbow);
                console.log('-------------------'.rainbow);
                console.log('-------------------'.rainbow);
              } else{
                // display the user how many guesses remaining
                console.log('-------------------'.red);
                console.log('Guesses: ' + w.guessesRemaining);
                console.log('                ');
                console.log('                ');
                console.log(w.currentWord.wordRender());
                console.log('-------------------'.red);
                console.log("U have guessed " + w.guessedLetters);
                console.log('-------------------'.red);
              }
          }
          if(w.guessesRemaining > 0 && w.currentWord.wordFound === false) {
            w.keepPromptingUser();
          }else if(w.guessesRemaining === 0){
            console.log('-------------------'.rainbow);
            console.log('-------------------'.rainbow);
            console.log('-------------------'.rainbow);
            console.log('      U LOST!!!'.rainbow);
            console.log('-------------------'.rainbow);
            console.log('-------------------'.rainbow);
            console.log('-------------------'.rainbow);
            console.log('The correct answer was ' + w.currentWord.word);
          }
        } else{
            console.log("U already guessed w, dummy.".zebra);
            w.keepPromptingUser();
          }
    });
  }
}

hangman.start();

