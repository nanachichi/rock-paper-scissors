const rps = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices) {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}


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


function game() {
  let score = 0;
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
      if (roundResult.includes("You lost")) {
        score -= 1;
      } else if (roundResult.includes("Computer lost")) {
        score += 1;
      }
      console.log(roundResult);
    }
  }
  console.log(score > 0 ? "You won the game! Congrats!" : (score < 0 ? "You lost the game :(" : "It's a complete tie"));
}

game()
