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


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});



function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) {
        return 'scissors';
    }
}

let computerSelection = computerChoice();
console.log(computerSelection);


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return 'It is a Tie! One more?';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'Yo Win! Paper beats rock';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
    } else {
        return 'Invalid! Repeat';
    }
}



let playerSelection = 'rock';
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));