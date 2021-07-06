const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const SHORTHAND_CHOICES = ["rock (r)", "paper (p)", "scissors (s)", "lizard (l)", "spock (o)"];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'rock')) {
    prompt('You win!');
    scoreCount(1,0);
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock') ||
            (choice === 'spock' && computerChoice === 'lizard') ||
            (choice === 'lizard' && computerChoice === 'rock') ||
            (choice === 'scissors' && computerChoice === 'spock') ||
            (choice === 'lizard' && computerChoice === 'scissors') ||
            (choice === 'paper' && computerChoice === 'lizard') ||
            (choice === 'spock' && computerChoice === 'paper') ||
            (choice === 'rock' && computerChoice === 'spock')) {
    prompt('Computer wins!');
    scoreCount(0,1);
  } else {
    prompt("It's a tie");
  }
}

function scoreCount(userPoint,computerPoint) {
  if (userPoint === 1) {
    userScore += 1;
  } else if (computerPoint === 1) {
    computerScore += 1;
  }
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(`Please enter "y" or "n".`)
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function scoreKeeper(user, computer) {
  if (user === 5 || computer === 5) {
    if (user === 5) {
      prompt(`User wins! Final score is User: ${userScore} Computer: ${computerScore}`)
    } else if (computer === 5) {
      prompt(`Computer wins! Final score is User: ${userScore} Computer: ${computerScore}`)
    }
    userScore = 0;
    computerScore = 0;
    return playAgain() === 'y'? true : false;
  }
    return true;
}

function choiceConversion(input) {
  switch(input) {
    case "r":
      return "rock"
      break;
    case "p":
      return "paper";
      break;
    case "s":
      return "scissors";
      break;
    case "l":
      return "lizard";
      break;
    case "o":
      return "spock";
      break;
    default:
      break;
  }
}

let userScore = 0;
let computerScore = 0;

while (true) {
  prompt (`Choose one: ${SHORTHAND_CHOICES.join(", ")}`);
  let userChoice = readline.question();
  choice = choiceConversion(userChoice);

  while(!VALID_CHOICES.includes(choice)) {
    prompt(`Enter one of ${VALID_CHOICES.join(", ")}:`)
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  displayWinner(choice, computerChoice);

  prompt(`Current score is User: ${userScore} Computer: ${computerScore}`);

  if (scoreKeeper(userScore, computerScore) === false) break;
}
