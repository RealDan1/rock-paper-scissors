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
    console.log(randomNum)
    let computerChoice;
    if (randomNum >= 0 && randomNum <= 1/3) {
        computerChoice = "rock"
    } else if (randomNum > 1/3 && randomNum <= 2/3) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

//getHumanChoice() returns "rock" "paper" or "scissors" from prompt()
function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice of Rock Paper or Scissors:", "e.g. rock")
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ) {
        return humanChoice;
    } else {
        alert("You entered an invalid value, please refresh and only type Rock Paper or Scissors")
    }
}

//initialise scores:
let humanScore = 0;
let computerScore = 0;

