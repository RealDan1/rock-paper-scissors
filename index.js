//initialise values
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let humanchoice = '';

//add event listeners
let btn_rock = document.querySelector('.btn_rock');
let btn_paper = document.querySelector('.btn_paper');
let btn_scissors = document.querySelector('.btn_scissors');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');

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

//checkRounds count
function checkRounds() {
  if (roundCount === 5) {
    resetGame();
    winningMessages();
  }
}

//winning messages
function winningMessages() {
  if (humanScore > computerScore) {
    text3.textContent = `Congrats humans won with a score of humans: ${humanScore} computers: ${computerScore}, humans get to live!`;
  } else if (computerScore > humanScore) {
    text3.textContent = `Bummer computers won with a score of computers: ${computerScore} humans: ${humanScore} prepare for annihilation!`;
  } else if (computerScore === humanScore) {
    text3.textContent = `Close one! Its a draw with a score of humans: ${humanScore} computers: ${computerScore}, nobody dies today!`;
  } else {
    text3.textContent = `Something went wrong at the end`;
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  text1.textContent = '';
  text2.textContent = '';
}

function playGame() {
  //initialise scores:

  let text1 = document.querySelector('.text1');
  text1.textContent = '';

  //create function playRound()
  function playRound(humanChoice, computerChoice) {
    //all human win scenarios
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
      text1.textContent =
        'Computer plays scissors. You win! Rock beats Scissors!';
      ++humanScore;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      text1.textContent =
        'Computer plays paper. You win! Scissors beats Paper!';
      ++humanScore;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      text1.textContent = 'Computer plays rock. You win! Paper beats Rock!';
      ++humanScore;
    }
    //all computer win scenarios
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
      text1.textContent = 'Computer plays rock. You lose! Rock beats Scissors!';
      ++computerScore;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
      text1.textContent =
        'Computer plays scissors. You lose! Scissors beats Paper!';
      ++computerScore;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      text1.textContent = 'Computer plays paper. You lose! Paper beats Rock!';
      ++computerScore;
    }
    // all tie scenarios
    else if (computerChoice === 'paper' && humanChoice === 'paper') {
      text1.textContent =
        'Computer plays paper. Its a tie! Paper and Paper only makes origami';
    } else if (computerChoice === 'rock' && humanChoice === 'rock') {
      text1.textContent =
        'Computer plays rock. Its a tie! Rock and Rock only makes more rock';
    } else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
      text1.textContent =
        'Computer plays scissors. Its a tie! Scissors and Scissors means you now have two scissors';
    }
    //other error
    else {
      console.log('Something went wrong');
    }
  }

  //loop

  //round triggers and events listeners for buttons

  //play rock
  btn_rock.addEventListener('click', () => {
    //increment round
    ++roundCount;
    //check for win or lose
    if (roundCount >= 6) {
      winningMessages();
      // resetGame();
    } else {
      computerChoice = getComputerChoice();
      playRound('rock', computerChoice);
      text2.textContent = `Round ${roundCount}: Score is now humans: ${humanScore} computers: ${computerScore}`;
    }
  });

  //play paper
  btn_paper.addEventListener('click', () => {
    //increment round
    ++roundCount;
    //check for win or lose
    if (roundCount >= 6) {
      winningMessages();
      // resetGame();
    } else {
      computerChoice = getComputerChoice();
      playRound('paper', computerChoice);
      text2.textContent = `Round ${roundCount}: Score is now humans: ${humanScore} computers: ${computerScore}`;
    }
  });

  //play scissors
  btn_scissors.addEventListener('click', () => {
    //increment round
    ++roundCount;
    //check for win or lose
    if (roundCount >= 6) {
      winningMessages();
      // resetGame();
    } else {
      computerChoice = getComputerChoice();
      playRound('scissors', computerChoice);
      text2.textContent = `Round ${roundCount}: Score is now humans: ${humanScore} computers: ${computerScore}`;
    }
  });

  // text2.textContent = `Round ${roundCount}: Score is now humans: ${humanScore} computers: ${computerScore}`;
}

//call main function(to run game)
playGame();

// Needs a reset button. Needs final score announcement after 5 rounds, also trigger reset
//bug2: one of the readouts its wrong(says i played scissors but i played paper)
