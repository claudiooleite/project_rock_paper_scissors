// Rock Paper Scissors\


function computerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else if (randomNumber === 3) {
        return 'Scissors';
    }
}

let computerSelection = computerChoice();
console.log(computerSelection);


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'Win';
    } else if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'Lost';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'Lost';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'Win';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'Lost';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'Win';
    }
}

let playerSelection = 'Rock';
console.log(playerSelection);
let game1 = playRound();
console.log(playRound(playerSelection,computerSelection))




/*
function getComputerChoice () {
     let computerChoice = Math.floor(Math.random());
     console.log(computerChoice);
}




let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  
 function playRound(playerSelection, computerSelection) {
  
    if (playerSelection.toLowerCase() === computerSelection) {
      alert("Tie"*);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
      alert("You Win!");
    } else if (playerSelection.toLowerCase()=== "rock" && computerSelection === "paper") {
      alert("You Lose!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
      alert("You Win!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
      alert("You Lose!");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
      alert("You Lose!");
    } else {
      alert("You Win!");
    }
  
    /*return `${winner}! Computer chose ${computerSelection}`;*/


/*
const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
const winnerMessage = playRound(playerSelection, computerSelection);

alert(winnerMessage)

*/ 