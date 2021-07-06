const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'spock' && computerChoice === 'scissors') ||) {
    prompt('You win!');
    userScore += 1;
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
    computerScore += 1;
  } else {
    prompt("It's a tie");
  }
}

let userScore = 0;
let computerScore = 0;

while (true) {
  prompt (`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while(!VALID_CHOICES.includes(choice)) {
    prompt(`Enter one of ${VALID_CHOICES.join(", ")}:`)
    choice = readline.question();

  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  displayWinner(choice, computerChoice);

  prompt(`Current score is User: ${userScore} Computer: ${computerScore}`);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(`Please enter "y" or "n".`)
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
