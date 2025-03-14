const readline = require('readline-sync');
let name = readline.question("What is your name? ");
console.log("Hello," + name + "!");
let questionOne = readline.question("What is a string?");
console.log("You said," + questionOne); 
let questionTwo = readline.question("What is an example of a Number datatype?")
console.log("Your answer was," + questionTwo);
let questionThree = readline.question("What is the result of 15 % 4?");
console.log("Your answer:"+ questionThree);
let questionFour = readline.question("What is an array?");
console.log("Your answer:" + questionFour);
let questionFive= readline.question("What is a boolean?");
console.log("Your answer:" + questionFive);