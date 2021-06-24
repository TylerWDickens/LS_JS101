/* eslint-disable default-case */
/* eslint-disable no-case-declarations */
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'fr';

function prompt(msg , name) {
  // eslint-disable-next-line no-console
  if (name === undefined) {
    console.log(`=> ${msg}`);
  } else{
    console.log(`=> ${msg} ${name}`)
  } 
}

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculator() {
  // Ask the user for the first number.
  prompt(messages('firstNum', LANGUAGE));
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(messages('validNum', LANGUAGE));
    number1 = readline.question();
  }
  // Ask the user for the second number.
  prompt(messages('secondNum', LANGUAGE));
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(messages('validNum', LANGUAGE));
    number2 = readline.question();
  }
  // Ask the user for an operation to perform.
  prompt(messages('operation', LANGUAGE));
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('validOp', LANGUAGE));
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
  prompt(`${messages('result', LANGUAGE)} ${output}`);
}

function reboot(select) {
  switch (select) {
    case 'y':
      prompt('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      calculator();
      prompt(messages('loop', LANGUAGE));
      const runAgain = readline.question();
      reboot(runAgain);
      break;
    case 'n':
      prompt(`${messages('goodbye', LANGUAGE)} ${name}!`);
      break;
    default:
      prompt(messages('validLoop', LANGUAGE));
      const newChoice = readline.question().toLowerCase();
      reboot(newChoice);
  }
}
prompt(messages('welcome', LANGUAGE));
  let name = readline.question();
prompt(messages('hiName', LANGUAGE), name);
calculator();
prompt(messages('loop', LANGUAGE));
const rerun = readline.question().toLowerCase();
reboot(rerun);
