/* eslint-disable no-console */
const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');
//  intRate and loan amount are in months

function prompt(message) {
  console.log(`=> ${message}`);
}

function paymentCalculator(amount, rate, duration) {
  //  convert percent rate to decimal and convert to monthly rate
  if (rate === 0) {
    return amount / duration;
  }
  const payment = amount * (rate / (1 - (1 + rate) ** (-duration)));
  return payment.toFixed(2);
}

function loanRate(unit, rate) {
  let monthRate;
  let newUnit;
  switch (unit) {
    case 'y':
      monthRate = rate / (12 * 100);
      break;
    case 'm':
      monthRate = rate / 100;
      break;
    default:
      prompt(MESSAGES.valid_unit);
      newUnit = readline.question();
      loanRate(newUnit, rate);
      break;
  }
  return monthRate;
}

function invalidNumber(number) {
  return (number.trimStart()) === ''
          || Number.isNaN(Number(number))
          || number < 0;
}

function loanMonths(unit, duration) {
  let months;
  switch (unit) {
    case 'y':
      months = duration * 12;
      break;
    case 'm':
      months = duration;
      break;
    default:
      break;
  }
  return months;
}

function loanCalculator() {
  console.log(MESSAGES.welcome);
  prompt(MESSAGES.loan_amount);
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES.valid_number);
    loanAmount = readline.question();
  }

  prompt(MESSAGES.APR);
  let intRate = readline.question();

  while (invalidNumber(intRate)) {
    prompt(MESSAGES.valid_number);
    intRate = readline.question();
  }

  // Check if the user wants to enter the duration in years or months
  prompt(MESSAGES.loan_unit);
  let loanUnit = readline.question();

  while (!['y', 'm'].includes(loanUnit)) {
    prompt(MESSAGES.valid_unit);
    loanUnit = readline.question();
  }

  prompt(MESSAGES.loan_duration);
  let loanDuration = readline.question();

  while (invalidNumber(loanDuration)) {
    prompt(MESSAGES.valid_number);
    loanDuration = readline.question();
  }

  const rate = loanRate(loanUnit, intRate);
  const months = loanMonths(loanUnit, loanDuration);
  const monthlyPayment = paymentCalculator(loanAmount, rate, months);

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  prompt(`${MESSAGES['monthly payment']} $${monthlyPayment}`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');

  prompt(MESSAGES.loop);
  const loop = readline.question();

  if (loop === 'y') {
    loanCalculator();
  } else if (loop === 'n') {
    prompt(MESSAGES.goodbye);
  }
}

loanCalculator();
