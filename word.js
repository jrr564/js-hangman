//requiring javascript files
var Letter = require("./letter.js");
var Main = require("./main.js");
var List = require ("./list.js");

function Word(letterInWord) {
	var w = this;

	this.word = letterInWord;
	this.letters = [];
	this.wordFind = false;

	this.letterObjects = function() {
    //populate the collection above with new Letter objects
    for(var i = 0; i<w.word.length; i++){
      var newLetter = new Letter(w.word[i]);
      this.letters.push(newLetter);
    	}
	};

	this.searchWord = function() {
		if(this.letters.every(function(oneLetter){
			return oneLetter.show === true;
		})){
			this.wordFind = true;
			return true;
		}
	};

	this.checkIfLetterFound = function(guessedLetter) {
	    var letterToReturn = 0;
	    //iterates through each letter to see if it matches the guessed letter
	    this.letters.forEach(function(oneLetter){
	      if(oneLetter.letter === guessedLetter){
	        oneLetter.appear = true;
	        letterToReturn++;
	      }
	    })
	    //if guessLetter matches Letter property, the letter object should be shown
	    return letterToReturn;
	  };

	this.wordRender = function() {
	    var display = '';
	    //render the word based on if letters are found or not
	    w.letters.forEach(function(oneLetter){
	      var currentLetter = oneLetter.render();
	      display+= currentLetter;
	    });

	    return display;
	};
};

module.exports = Word;