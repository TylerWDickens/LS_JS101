const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');
//intRate and loan amount are in months


function prompt(message) {
  console.log(`=> ${message}`);
}

function paymentCalculator(amount, rate, duration) {
  //convert percent rate to decimal and convert to monthly rate
  if (rate === 0) {
    return amount / duration;
  } else {
    let payment = amount * (rate / (1 - Math.pow((1 + rate), (-duration))));
    return payment.toFixed(2);
  }
}

function loanRate(unit, rate) {
  switch(unit){
    case 'y':
      return rate / (12 * 100);
      break;
    case 'm':
      return rate / 100;
      break;
    default:
      prompt(MESSAGES['valid_unit']);
      let newUnit = readline.question();
      loanRate(newUnit, rate);
  }
}

function invalidNumber(number) {
  return  (number.trimStart()) === '' ||Number.isNaN(Number(number));
}

function loanMonths(unit, duration) {
  switch(unit){
    case 'y':
      return duration * 12;
      break;
    case 'm':
      return duration;
      break;
  }
}

//Need to get loan amount, annual percentage rate (APR) and loan duration
console.log(MESSAGES['welcome']);
prompt(MESSAGES['loan_amount'])
let loanAmount = readline.question();

while(invalidNumber(loanAmount)) {
  prompt(MESSAGES['valid_number']);
  loanAmount = readline.question();
}

prompt(MESSAGES['APR'])
let intRate = readline.question();

while(invalidNumber(intRate)) {
  prompt(MESSAGES['valid_number']);
  intRate = readline.question();
}

//Check if the user wants to enter the duration in years or months
prompt(MESSAGES['loan_unit'])
let loanUnit = readline.question();

while (!['y','m'].includes(loanUnit)) {
  prompt(MESSAGES['valid_unit']);
  operation = readline.question();
}

prompt(MESSAGES['loan_duration'])
let loanDuration = readline.question();

while(invalidNumber(loanDuration)) {
  prompt(MESSAGES['valid_number']);
  loanDuration = readline.question();
}

let monthlyPayment = paymentCalculator(loanAmount, loanRate(loanUnit, intRate), loanMonths(loanUnit, loanDuration));

prompt(`${MESSAGES['monthly payment']} $${monthlyPayment}`);
