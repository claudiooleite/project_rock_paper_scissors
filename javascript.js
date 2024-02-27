// Rock Paper Scissors\

/*
- create and style options 
    .  1 button for player 
    .  1 image teaser for computer
    . 1 result log
    . counter for the best of 5
- 1 create a game choice
- create a player choice
- compare them
- show the result

- as soon as the player click his choice, computer show his

*/


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection == computerSelection) {
        return 'It is a Tie! One more?';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Yo Win! Paper beats rock';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper';
    } else {
        return 'Invalid! Repeat';
    }
}



const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

const paperChoice = document.querySelector('#paper');
paperChoice.addEventListener('click', playRound('paper', computerSelection));







