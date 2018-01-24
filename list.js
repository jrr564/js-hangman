//Trying to export word
//list of words
var words = [
	"democracy",
	"blog",
	"integrity",
	"truthiness",
	"bailout",
	"admonish",
	"austerity",
	"pragmatic",
	"socialism",
	"capitalism",
	"science",
	"culture",
	"ism",
	"surreal",
	"feminism"
	];
//takes random word from list
var randomNumber = Math.floor((Math.random()*words.length)+1);

//exports
module.exports.wordToGuess = words[randomNumber];



