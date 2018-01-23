//npm packages to use
var inquirer = require("inquirer");
var colors = require('colors');

//requiring javascript files
var Letter = require("./letter.js");
var Word = require("./word.js");
var List = require ("./list.js");

//creates variable of word that will be guessed
module.exports.wordGuess = List.wordToGuess;
//creates lives/guesses left variable
var lives = 7;

// var start = function(){
// 	console.log("Welcome to Word of the year Hangman!");
// 	console.log("All answers are former Merriam-Webster words of the year");
// 	console.log("Would you like to play?")

// }

// start();