const readline = require('readline-sync');
const messages = require('./calculator_messages.json');

function prompt(message) {
  // eslint-disable-next-line no-console
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// eslint-disable-next-line no-constant-condition
while (true) {
  prompt(messages.welcome);

  prompt(messages.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages.invalidNumber);
    number1 = readline.question();
  }

  prompt(messages.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages.invalidNumber);
    number2 = readline.question();
  }

  prompt(
    messages.operation,
  );
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages.invalidOperation);
    operation = readline.question();
  }

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
    default:
      prompt(messages.enterValidOperation);
  }

  prompt(`The result is ${output}`);

  prompt(messages.runAgain);
  // eslint-disable-next-line prefer-const
  let runAgain = readline.question();

  if (runAgain !== 'y') break;
}
