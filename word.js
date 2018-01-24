// require letter objects
var Letter = require('./letter.js');

function Word(letterInWord) {
  //to use in other functions
  var w = this;
  //store the string letterInWord
  this.word = letterInWord;
  //collection of letter objects
  this.letters = [];
  this.wordFound = false;

  this.letterObjects = function() {
    //populate array with new letter objects
    for(var i = 0; i<w.word.length; i++){
      var newLetter = new Letter(w.word[i]);
      this.letters.push(newLetter);
    }
  };

  //find the current word
  this.searchWord = function() {
    if(this.letters.every(function(lttr){
      return lttr.show === true;
    })){
      this.wordFound = true;
      return true;
    }

  };

  this.checkIfLetterFound = function(guessedLetter) {
    var whatToReturn = 0;
    //sees if each letter matches the guessed letter
    this.letters.forEach(function(lttr){
      if(lttr.letter === guessedLetter){
        lttr.show = true;
        whatToReturn++;
      }
    })
    
    //if guessLetter matches, letter object will show
    return whatToReturn;
  };

  this.wordRender = function() {
    var display = '';
    //render the word based on if letters are found or not
    w.letters.forEach(function(lttr){
      var currentLetter = lttr.render();
      display+= currentLetter;
    });

    return display;
  };
}

module.exports = Word;

