var Letter = function(letterInWord) {
	//stores letter
	this.letter = letterInWord;
	//whether letter can be shown
	this.show = false;
	//if false, displays _ . Otherwise, displays letter.
	this.render = function() {
		if (this.show === false) {
			return '_';
		} else {
			return this.letter;
		}
	} 
}; 

//exports module
module.exports = Letter;