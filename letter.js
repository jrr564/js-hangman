var Letter = function(letterInWord) {
  //stores letter
  this.letter = letterInWord;
  //whether letter can be shown
  this.show = false;
  //if false, displays _ . If true, displays letter.
  this.render = function() {
    if (this.show === false) {
      return '_';
    } else {
      return this.letter;
    }
  } 
};


// export to use in word.js
module.exports = Letter;



