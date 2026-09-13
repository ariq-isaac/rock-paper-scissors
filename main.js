// Gets a reference to the nodes div and button
const div = document.querySelector("#output")
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor")

// Creates a paragraph element that displays the result
let roundResult = document.createElement("p");

// Loads the winner if one reaches 5 points
const gameResult = document.createElement("h1");

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
        return 'scissor';
    }
}

// Create a function that takes an input from the human player and return it
function getHumanChoice() {
    let choice = prompt("Enter 'rock', 'paper' or 'scissor'").toLowerCase();
    return choice;
}

// create a variable named humanScore and initialize with the value of 0
let humanScore = 0;
// create a variable named computerScore and initialize with the value of 0
let computerScore = 0;

// Create a function that plays a single round AND THEN compares both human's and computer's input.
function playRound(event) {
    gameResult.textContent = "";

    // Gets human and computer choice
    let humanChoice = event.currentTarget;
    let computerChoice = getComputerChoice();

    if (computerChoice === 'rock') {
        if (humanChoice.id === 'paper') {
            console.log("You win! Paper beats Rock");
            roundResult.textContent = "You win! Paper beats Rock";
            div.appendChild(roundResult);

            humanScore++;
        }
        else if (humanChoice.id === 'scissor') {
            console.log("You lose! Rock beats Scissors");
            roundResult.textContent = "You lose! Rock beats Scissors";
            div.appendChild(roundResult);

            computerScore++;
        }
        else {
            console.log("It's a draw!")
            roundResult.textContent = "It's a draw!";
            div.appendChild(roundResult);
        }
    }

    else if (computerChoice === 'paper') {
        if (humanChoice.id === 'rock') {
            console.log("You lose! Paper beats Rock");
            roundResult.textContent = "You lose! Paper beats Rock";
            div.appendChild(roundResult);

            computerScore++;
        }
        else if (humanChoice.id === 'scissor') {
            console.log("You win! Scissors beats paper")
            roundResult.textContent = "You win! Scissors beats paper";
            div.appendChild(roundResult);

            humanScore++;
        }
        else {
            console.log("It's a draw!");
            roundResult.textContent = "It's a draw!";
            div.appendChild(roundResult);

        }
    }

    else {
        if (humanChoice.id === 'rock') {
            console.log("You win! Rock beats Scissors");
            roundResult.textContent = "You win! Rock beats Scissors";
            div.appendChild(roundResult);

            humanScore++;
        }
        else if (humanChoice.id === 'paper') {
            console.log("You lose! Scissors beats Paper");
            roundResult.textContent = "You lose! Scissors beats Paper";
            div.appendChild(roundResult);

            computerScore++;
        }
        else {
            console.log("It's a draw!");
            roundResult.textContent = "It's a draw!";
            div.appendChild(roundResult);
        }
    }

    // Announces winner first to reach 5 points
    if (humanScore === 5) {
        
        gameResult.textContent = "You win this game!";
        div.appendChild(gameResult);

        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {

        gameResult.textContent = "Oof, you lost! The computer won.";
        div.appendChild(gameResult);

        humanScore = 0;
        computerScore = 0;
    }
}

// Listens to events
rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorButton.addEventListener("click", playRound);