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
        return 'You Win! Paper beats rock';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper';
    } else {
        return 'Invalid! Repeat';
    }
}



document.addEventListener('DOMContentLoaded', function() {
    // counter
    let counter = 0;
    // vs
    let playerWin = 0;
    let playerLost = 0;
    // player choose paper
    const paperChoice = document.getElementById('paper');
    paperChoice.addEventListener('click', buttonClickPaper);
    const result = document.getElementById('result');
    let total = document.getElementById('total');
    let totalNumber= document.createElement('h1')
    totalNumber.id = 'totalNumber';


    function buttonClickPaper(){
        let computerSelection = getComputerChoice();
        let paper = playRound('paper', computerSelection);
        if(paper.includes('Win')){
            playerWin += 1;
            counter += 1;
        } else if(paper.includes('Lose')){
            playerLost += 1;
            counter += 1;
        } else {
            counter = counter;
        }
        result.textContent = paper;
        result.style.fontSize = '30px'
        totalNumber.textContent = counter;
        total.appendChild(totalNumber);
        
    }

    // player choose scissors
    const scissorsChoice = document.getElementById('scissors')
    scissorsChoice.addEventListener('click', buttonClickScissors);

    function buttonClickScissors(){
        let computerSelection = getComputerChoice();
        let scissors = playRound('scissors', computerSelection);
        if(scissors.includes('Win')){
            playerWin += 1;
            counter += 1;
        } else if(scissors.includes('Lose')){
            playerLost += 1;
            counter += 1;
        } else {
            counter = counter;
        }
        result.textContent = scissors;
        result.style.fontSize = '30px'
        totalNumber.textContent = counter;
        total.appendChild(totalNumber);
    }

    // player choose rock
    const rockChoice = document.getElementById('rock')
    rockChoice.addEventListener('click', buttonClickRock);

    function buttonClickRock(){
        let computerSelection = getComputerChoice();
        let rock = playRound('rock', computerSelection);
        if(rock.includes('Win')){
            playerWin += 1;
            counter += 1;
        } else if(rock.includes('Lose')){
            playerLost += 1;
            counter += 1;
        } else {
            counter = counter;
        }
        result.textContent = rock;
        result.style.fontSize = '30px'
        totalNumber.textContent = counter;
        total.appendChild(totalNumber);
    }

});







