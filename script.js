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

rps = ['rock', 'paper', 'skissors'];
function getComputerChoice(choices) {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}
