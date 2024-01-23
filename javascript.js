// Rock Paper Scissors

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

function getPlayerSelection() {
    let playerSelection = prompt("Choose rock, paper, or scissors: ");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
    }
  


 function playRound(playerSelection, computerSelection) {
    let winner;
  
    if (playerSelection === computerSelection) {
      winner = "Tie";
    } else
   
    if (playerSelection === "rock" && computerSelection === "scissors") {
      winner = "You Win!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      winner = "You Lose!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      winner = "You Win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      winner = "You Lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      winner = "You Lose!";
    } else {
      winner = "You Win!";
    }
  
    return `${winner}! Computer chose ${computerSelection}`;
  }


  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerChoice();
  const winnerMessage = playRound(playerSelection, computerSelection);
  prompt (winnerMessage);
  console.log(winnerMessage);