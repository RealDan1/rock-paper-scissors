//getComputerChoice() will return "rock" "paper" or "scissors"
function getComputerChoice() {
  let randomNum = Math.random();
  let computerChoice;
  if (randomNum >= 0 && randomNum <= 1 / 3) {
    computerChoice = 'rock';
  } else if (randomNum > 1 / 3 && randomNum <= 2 / 3) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  return computerChoice;
}

// function playGame() {
//initialise scores:
let humanScore = 0;
let computerScore = 0;

let text1 = document.querySelector('.text1');
text1.textContent = '';

//create function playRound()
function playRound(humanChoice, computerChoice) {
  //all human win scenarios
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    text1.textContent = 'You win! Rock beats Scissors!';
    ++humanScore;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    text1.textContent = 'You win! Scissors beats Paper!';
    ++humanScore;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    text1.textContent = 'You win! Paper beats Rock!';
    ++humanScore;
  }
  //all computer win scenarios
  else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    text1.textContent = 'You lose! Rock beats Scissors!';
    ++computerScore;
  } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    text1.textContent = 'You lose! Scissors beats Paper!';
    ++computerScore;
  } else if (computerChoice === 'paper' && humanChoice === 'rock') {
    text1.textContent = 'You lose! Paper beats Rock!';
    ++computerScore;
  }
  // all tie scenarios
  else if (computerChoice === 'paper' && humanChoice === 'paper') {
    text1.textContent = 'Its a tie! Paper and Paper only makes origami';
  } else if (computerChoice === 'rock' && humanChoice === 'rock') {
    text1.textContent = 'Its a tie! Rock and Rock only makes more rock';
  } else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
    text1.textContent =
      'Its a tie! Scissors and Scissors means you now have two scissors';
  }
  //other error
  else {
    console.log('Something went wrong');
  }
}

//initialise values
let humanChoice;
let computerChoice;

//loop
let btn_rock = document.querySelector('.btn_rock');
let btn_paper = document.querySelector('.btn_paper');
let btn_scissors = document.querySelector('.btn_scissors');

computerChoice = getComputerChoice();

let humanchoice = '';
let text2 = document.querySelector('.text2');

btn_rock.addEventListener('click', () => {
  playRound('rock', computerChoice);
  text2.textContent = `Score is now humans: ${humanScore} computers: ${computerScore}`;
});

btn_paper.addEventListener('click', () => {
  playRound('paper', computerChoice);
  text2.textContent = `Score is now humans: ${humanScore} computers: ${computerScore}`;
});

btn_scissors.addEventListener('click', () => {
  playRound('scissors', computerChoice);
  text2.textContent = `Score is now humans: ${humanScore} computers: ${computerScore}`;
});

text2.textContent = `Score is now humans: ${humanScore} computers: ${computerScore}`;

//winning messages
if (humanScore > computerScore) {
  console.log(
    `Congrats humans won with a score of humans: ${humanScore} computers: ${computerScore}, humans get to live!`
  );
} else if (computerScore > humanScore) {
  console.log(
    `Bummer computers won with a score of computers: ${computerScore} humans: ${humanScore} prepare for annihilation!`
  );
} else if (computerScore === humanScore) {
  console.log(
    `Close one! Its a draw with a score of humans: ${humanScore} computers: ${computerScore}, nobody dies today!`
  );
} else {
  console.log(`Something went wrong at the end`);
}
// }

//call main function(to run game)
// playGame();

// Needs a reset button. Needs final score announcement after 5 rounds, also trigger reset
//bugs: can cheat by clicking the same button multiple times(maybe reset computer choice?)
