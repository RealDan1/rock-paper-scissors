//init function getComputerChoice() 

//create variable randomNum
//generate random number and insert into randomNum
//create var computerChoice
//if (randomNum >= 0 && randomNum <= 1/3) then set computerChoice to "rock"
//else if (randomNum > 1/3 && randomNum <= 2/3) then set computerChoice to "paper"
//else set computerChoice to "scissors"
//test computerChoice on console.log
//return computerChoice

//getComputerChoice() will return "rock" "paper" or "scissors" from math.Random
function getComputerChoice() {
    let randomNum = Math.random();
    let computerChoice;
    if (randomNum >= 0 && randomNum <= 1/3) {
        computerChoice = "rock";
    } else if (randomNum > 1/3 && randomNum <= 2/3) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

//getHumanChoice() returns "rock" "paper" or "scissors" from prompt()
function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice of Rock Paper or Scissors:", "e.g. rock");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ) {
        return humanChoice;
    } else {
        alert("You entered an invalid value, please refresh and only type Rock Paper or Scissors")
    }
}



function playGame() {
    //initialise scores:
    let humanScore = 0;
    let computerScore = 0;

    //create function playRound()
    function playRound(humanChoice, computerChoice) {
        //all human win scenarios
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log ("You win! Rock beats Scissors!");
            ++humanScore;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log ("You win! Scissors beats Paper!");
            ++humanScore;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log ("You win! Paper beats Rock!");
            ++humanScore;
        }
        //all computer win scenarios
        else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log ("You lose! Rock beats Scissors!");
            ++computerScore;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log ("You lose! Scissors beats Paper!");
            ++computerScore;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log ("You lose! Paper beats Rock!");
            ++computerScore;
        } 
        // all tie scenarios
        else if (computerChoice === "paper" && humanChoice === "paper") {
            console.log ("Its a tie! Paper and Paper only makes origami");
        } else if (computerChoice === "rock" && humanChoice === "rock") {
            console.log ("Its a tie! Rock and Rock only makes more rock");
        } else if (computerChoice === "scissors" && humanChoice === "scissors") {
            console.log ("Its a tie! Scissors and Scissors means you now have two scissors");
        } 
        //other error
        else {
            console.log("Something went wrong");
        }
    }

    //initialise values 
    let humanChoice
    let computerChoice

    //loop 
    for (let i=0; i<5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    console.log(`Score is now humans: ${humanScore} computers: ${computerScore}`);
    }

    //winning messages
    if (humanScore > computerScore) {
        console.log(`Congrats humans won with a score of humans: ${humanScore} computers: ${computerScore}, humans get to live!`);
    } else if (computerScore > humanScore) {
        console.log(`Bummer computers won with a score of computers: ${computerScore} humans: ${humanScore} prepare for annihilation!`);
    } else if (computerScore === humanScore) {
        console.log(`Close one! Its a draw with a score of humans: ${humanScore} computers: ${computerScore}, nobody dies today!`);
    } else {
        console.log(`Something went wrong at the end`);
    }
}

//call main function(to run game)
playGame()