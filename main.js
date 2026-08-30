// Create a function that randomly returns 'rock' , 'paper' or 'scissors'
function getComputerChoice() {

    // Gets a random number between 0 , 1, or 3
    // Returns 'rock', 'paper' or 'scissors' depending on the numbers
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    }
    else if (choice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

// Create a function that takes an input from the human player and return it
function getHumanChoice() {
    let choice = prompt("Enter 'rock', 'paper' or 'scissors'").toLowerCase();
    return choice;
}

// create a variable named humanScore and initialize with the value of 0
let humanScore = 0;
// create a variable named computerScore and initialize with the value of 0
let computerScore = 0;

// Create a function that plays a single round AND THEN compares both human's and computer's input.
function playRound(humanChoice, computerChoice) {

    if (computerChoice === 'rock') {
        if (humanChoice === 'paper') {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
        else if (humanChoice === 'scissors') {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
        else {
            console.log("It's a draw!")
        }
    }

    else if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if (humanChoice === 'scissors') {
            console.log("You win! Scissors beats paper")
            humanScore++;
        }
        else {
            console.log("It's a draw!");
        }
    }

    else {
        if (humanChoice == 'rock') {
            console.log("You win! Rock beats Scissors");
            humanChoice++;
        }
        else if (humanChoice === 'paper') {
            console.log("You lose! Scissors beats Paper");
            computerChoice++;
        }
        else {
            console.log("It's a draw!");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);

console.log(result);

// Create a function that plays an entire 5-round game