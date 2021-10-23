const readline = require("readline-sync");

//Ask the user for the first number
//Ask the user for the second number
//Ask the user for an operation to perform.
//Perform the operation on the two numbers.
//Print the result to the terminal

console.log("Welcome to Calculator");

console.log("Whats the first number?");
const number1 = readline.question();

console.log("Whats the second number?");
const number2 = readline.question();

console.log(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
);
let operation = readline.question();

let output;

switch (operation) {
  case "1":
    output = Number(number1) + Number(number2);
    break;
  case "2":
    output = Number(number1) - Number(number2);
    break;
  case "3":
    output = Number(number1) * Number(number2);
    break;
  case "4":
    output = Number(number1) / Number(number2);
    break;
  default:
    console.log("Please input a valid operator number");
}

console.log(`The result is ${output}`);
