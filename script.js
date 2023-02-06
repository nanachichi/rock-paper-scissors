function getComputerChoice() {
  const weapons = ['rock', 'paper', 'scissors'];
  const choice = weapons[Math.floor(Math.random() * weapons.length)];
  return choice;
}


function playRound(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection === 'rock' && computerSelection === 'paper'):
      return "Paper beats rock.\nYou lost.";
    case (playerSelection === 'rock' && computerSelection === 'scissors'):
      return "Rock beats scissors.\nComputer lost.";
    case (playerSelection === 'paper' && computerSelection === 'rock'):
      return "Paper beats rock.\nComputer lost.";
    case (playerSelection === 'paper' && computerSelection === 'scissors'):
      return "Scissors beat paper.\nYou lost.";
    case (playerSelection === 'scissors' && computerSelection === 'rock'):
      return "Rock beats scissors.\nYou lost.";
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
      return "Scissors beat paper.\nComputer lost.";
    case (playerSelection === computerSelection):
      return "It's a tie!";
  } 
}

const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const weapons = document.getElementById('weapons');

let playerWin = 0;
let playerLose = 0;

win.textContent = `Win: ${playerWin}`;
lose.textContent = `Lose: ${playerLose}`;

function disableButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}


function showResult() {
  if (playerWin === 5) {
    const divResults = document.createElement('div');
    divResults.textContent = 'You won the game!';
    weapons.after(divResults);
    disableButtons();
  }
  if (playerLose === 5) {
    const divResults = document.createElement('div');
    divResults.textContent = 'You won the game!';
    weapons.after(divResults);
    disableButtons();
  }
}


function countScore() {
  if (results.textContent.includes("You lost")) {
    playerLose += 1;
    lose.textContent = `Lose: ${playerLose}`;
  } else if (results.textContent.includes("Computer lost")) {
    playerWin += 1;
    win.textContent = `Win: ${playerWin}`;
  }
}


function game() {

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      let playerSelection = e.target.className;
      let result = playRound(playerSelection, getComputerChoice());
      results.textContent = result;
      countScore();
      showResult();
    });
  });
  
}

game()