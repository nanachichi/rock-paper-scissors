// Steps
// 1. Function getComputerChoice() that
// randomly returns 'Rock', 'Paper' or 'Skissors'.
// 2. Function to play one round. It should take two parameters
// function playRound(playerSelection, computerSelection)
// and then return a string that declares the winner.
// 3. Function game() that plays a 5 round game (call
// the previous function 5 times).

// array that consists of 'rock', 'paper' and 'skissors';
// PROGRAM getComputerChoice()
//   IF first item in array then return 'Rock'

const rps = ['rock', 'paper', 'skissors'];
function getComputerChoice(choices) {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

// PROGRAM playRound(playerSelection, computerSelection)
//   ASK user to choose 'rock', 'paper' or 'skissors'
//   STORE the choice in a variable
//   IF user choice is 'rock' and computer choice is 'paper'
//     user lose

function playRound(playerSelection, computerSelection) {
  //let computerSelection = getComputerChoice(rps);
  //let playerSelection = prompt("Select your weapon!\nType rock, paper or skissors: ");
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return "Paper beats rock.\nPlayer lost.";
  } else if (playerSelection === 'rock' && computerSelection === 'skissors') {
    return "Rock beats skissors.\nComputer lost.";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "Paper beats rock.\nComputer lost.";
  } else if (playerSelection === 'paper' && computerSelection === 'skissors') {
    return "Skissors beat paper.\nPlayer lost.";
  } else if (playerSelection === 'skissors' && computerSelection === 'rock') {
    return "Rock beats skissors.\nPlayer lost.";
  } else if (playerSelection === 'skissors' && computerSelection === 'paper') {
    return "Skissors beat paper.\nComputer lost.";
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return "It's a tie!";
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return "It's a tie!";
  } else if (playerSelection === 'skissors' && computerSelection === 'skissors') {
    return "It's a tie!";
  }
}
