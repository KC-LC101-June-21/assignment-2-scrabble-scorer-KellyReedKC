// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let userWord = ""

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

//function initialPrompt() {
   //console.log("Let's play some scrabble! Enter a word:");
//};

function initialPrompt() {
  console.log("Let's play some scrabble!")
  userWord = input.question("Enter a Word: ")
};

//simpleScore: Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point.

function simpleScore(word) {
	word = word.toUpperCase();
	let letterPoints1 = 0;
 
	for (let i = 0; i < word.length; i++){

    letterPoints1 += 1

  }

	return letterPoints1;

}

let vowelBonusScore = function(word) {

  let vowels = ["a", "e", "i", "o", "u"];
  word = word.toLowerCase()
  let letterPoints = 0

  for (let i = 0; i < word.length; i++) {
    
    if (vowels.includes(word[i])) {
      letterPoints += 3 
      continue
    }

    letterPoints += 1
  }

  return letterPoints
}

let scrabbleScore;

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  }, 
  
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt",
    scoringFunction: vowelBonusScore

  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: oldScrabbleScorer
  }
];

function scorerPrompt() {
  console.log(`Which scoring algorithm would you like to use? \n\n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system`)

  let choice = input.question("Enter 0, 1, or 2: ");

  while (choice > 2 || choice < 0) {
    choice = input.question("Enter 0, 1, or 2: ")
  }
  
  console.log("algorithm name: ", scoringAlgorithms[choice].name);
  console.log(`Score for '${userWord}': `, scoringAlgorithms[choice].scoringFunction(userWord))

 }


function transform() {};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  initialPrompt(); 
  scorerPrompt()

   //console.log(scoringAlgorithms[1])
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

