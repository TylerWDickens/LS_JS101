/* eslint-disable default-case */
/* eslint-disable no-case-declarations */
const readline = require('readline-sync');

function prompt(msg) {
  // eslint-disable-next-line no-console
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculator() {
  prompt('Welcome to Calculator!');

  // Ask the user for the first number.
  prompt("What's the first number?");
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt('Hmm.. that doesn\'t seem like a valid number');
    number1 = readline.question();
  }
  // Ask the user for the second number.
  prompt("What's the second number?");
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt('Hmm.. that doesn\'t seem like a valid number');
    number2 = readline.question();
  }
  // Ask the user for an operation to perform.
  prompt('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');
    operation = readline.question();
  }
  // Perform the operation on the two numbers
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  // Print the result to the terminal
  prompt(`The result is: ${output}`);
}

function reboot(select) {
  switch (select) {
    case 'y':
      prompt('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      calculator();
      prompt('Would you like to run the program again? (y/n)');
      const runAgain = readline.question();
      reboot(runAgain);
      break;
    case 'n':
      prompt('Goodbye!');
      break;
    default:
      prompt('Must enter y (yes) or n (no)');
      const newChoice = readline.question().toLowerCase();
      reboot(newChoice);
  }
}

calculator();
prompt('Would you like to run the program again? (y/n)');
const rerun = readline.question().toLowerCase();
reboot(rerun);
