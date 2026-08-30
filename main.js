// Create a function that randomly returns 'rock' , 'paper' or 'scissors'
function getComputerChoice() {

    // Gets a random number between 0 , 1, or 3
    // Returns 'rock', 'paper' or 'scissors' depending on the numbers
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    }
    else if (choice === 1) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

// Create a function that takes an input from the human player and return it
function getHumanChoice() {
    let choice = prompt("Enter 'rock', 'paper' or 'scissors'").toLowerCase();
    return choice
}

// create a variable named humanScore and initialize with the value of 0
// create a variable named computerScore and initialize with the value of 0
// Create a function that compares both human's and computer's input.
// increments humanScore or computerScore depending who won