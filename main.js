// Create a function that randomly returns 'rock' , 'paper' or 'scissors'
function getComputerChoice() {
    let choice = Math.round(Math.random() * 3);
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

console.log(getComputerChoice());

// Create a function that takes an input from the human player and return it
// create a variable named humanScore and initialize with the value of 0
// create a variable named computerScore and initialize with the value of 0
// Create a function that compares both human's and computer's input.
// increments humanScore or computerScore depending who won