// Steps
// 1. Function getComputerChoice() that
// randomly returns 'Rock', 'Paper' or 'Scissors'.
// 2. Function to play one round. It should take two parameters
// function playRound(playerSelection, computerSelection)
// and then return a string that declares the winner.
// 3. Function game() that plays a 5 round game (call
// the previous function 5 times).

// array that consists of 'rock', 'paper' and 'scissors';
// PROGRAM getComputerChoice()
//   IF first item in array then return 'Rock'

const rps = ['rock', 'paper', 'scissors'];
function getComputerChoice(choices) {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

// PROGRAM playRound(playerSelection, computerSelection)
//   ASK user to choose 'rock', 'paper' or 'scissors'
//   STORE the choice in a variable
//   IF user choice is 'rock' and computer choice is 'paper'
//     user lose

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return "Paper beats rock.\nYou lost.";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "Rock beats scissors.\nComputer lost.";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "Paper beats rock.\nComputer lost.";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return "Scissors beat paper.\nYou lost.";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return "Rock beats scissors.\nYou lost.";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "Scissors beat paper.\nComputer lost.";
  } else if ((playerSelection === 'rock' && computerSelection === 'rock') 
    || (playerSelection === 'paper' && computerSelection === 'paper') 
    || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
    return "It's a tie!";
  } 
}

// PROGRAM game()
//   LOOP playRound() 5 times
//   IF win then add 1 to result
//   ELSE IF lose then add subtract 1 from result
//   IF result is more than 0
//     PRINT 'You won the game!'
//   ELSE print 'You lost the game!'

function game() {
  let result = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose your weapon! Type rock, paper or scissors: ").toLowerCase();
    if (playerSelection !== "rock" 
      && playerSelection !== "paper" 
      && playerSelection !== "scissors") {
      console.log("You should type rock, paper or scissors");
      i--;
    } else {
      let computerSelection = getComputerChoice(rps);
      let roundResult = playRound(playerSelection, computerSelection);
      roundResult.includes("You") ? result -= 1 : (roundResult.includes("Computer") ? result += 1 : '');
      console.log(roundResult);
    }
  }
  console.log(result > 0 ? "You won the game! Congrats!" : (result < 0 ? "You lost the game :(" : "It's a complete tie"));
}

game()
