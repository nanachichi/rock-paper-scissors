function getComputerChoice() {
  const weapons = ['rock', 'paper', 'scissors'];
  const choice = weapons[Math.floor(Math.random() * weapons.length)];
  return choice;
}


function playRound(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection === 'rock' && computerSelection === 'paper'):
      characterSpritesheet.classList.add('hands-up');
      return `${computerSelection} beats ${playerSelection}. You lost.`;
    case (playerSelection === 'rock' && computerSelection === 'scissors'):
      fallCharacter(100);
      characterSpritesheet.classList.add('stumble');
      return `${playerSelection} beats ${computerSelection}. Cirno lost.`;
    case (playerSelection === 'paper' && computerSelection === 'rock'):
      fallCharacter(100);
      characterSpritesheet.classList.add('stumble');
      return `${playerSelection} beats ${computerSelection}. Cirno lost.`;
    case (playerSelection === 'paper' && computerSelection === 'scissors'):
      characterSpritesheet.classList.add('hands-up');
      return `${computerSelection} beat ${playerSelection}. You lost.`;
    case (playerSelection === 'scissors' && computerSelection === 'rock'):
      characterSpritesheet.classList.add('hands-up');
      return `${computerSelection} beats ${playerSelection}. You lost.`;
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
      fallCharacter(100);
      characterSpritesheet.classList.add('stumble');
      return `${playerSelection} beat ${computerSelection}. Cirno lost.`;
    case (playerSelection === computerSelection):
      return "It's a tie!";
  } 
}

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const weapons = document.querySelector('.weapons');
const textbox = document.querySelector('.textbox');
const character = document.querySelector('.character');
const characterSpritesheet = document.querySelector('.character-spritesheet');
const text = document.querySelector('.text');
const weapon = document.querySelector('.weapon');
const left = document.querySelector('.left');
const startScreen = document.querySelector('.start');
const gameScreen = document.querySelector('.game');

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
    divResults.textContent = 'Congratulations!';
    results.after(divResults);
    disableButtons();
  }
  if (playerLose === 5) {
    const divResults = document.createElement('div');
    divResults.textContent = 'GAME OVER';
    results.after(divResults);
    disableButtons();
  }
}


// Count and display win & lose score.
function countScore(result) {
  if (result.includes("You lost")) {
    playerLose += 1;
    lose.textContent = `Lose: ${playerLose}`;
  } else if (result.includes("Cirno lost")) {
    playerWin += 1;
    win.textContent = `Win: ${playerWin}`;
  }
}


function displayNewText(txt) {

  // Clear the textbox
  text.innerHTML = '';

  // Type writer effect
  let i = 0;
  let speed = 50;
  function type(txt, speed) {
    if (i < txt.length)
    text.innerHTML += txt.charAt(i);
    setTimeout(type, speed, txt, speed, i++);
  }
  type(txt, speed);
}


// Display the results of the round and proceed to the next choice
function displayResultAndContinue(result) {
  weapons.style.display = "none";
  displayNewText(result);
  setTimeout(() => {
    if (characterSpritesheet.classList.contains('hands-up')) {
      characterSpritesheet.classList.remove('hands-up');
    } else if (characterSpritesheet.classList.contains('eyes-closed')) {
      characterSpritesheet.classList.remove('eyes-closed');
    } else if (characterSpritesheet.classList.contains('stumble')) {
      characterSpritesheet.classList.remove('stumble');
      // Fly up to her initial postiton
      fallCharacter(0)
    }
    displayNewText("Choose your weapon!");
  }, 4000)
  setTimeout(() => {
    // Display weapon choices
    left.appendChild(weapons);
    weapons.style.display = "flex";
  }, 6000);
}


// Make the character appear from right to left
function appearCharacter(i) {
  setTimeout(() => {
    character.style.right = i + "px";
    if (i < -300) appearCharacter(i + 1);
  }, 10);
}


// Make the character fall
function fallCharacter(i) {
  setTimeout(() => {
    character.style.top = i + "px";
    if (i < -300) fallCharacter(i + 1);
  }, 100);
}


function start() {
  // Type writer effect
  let i = 0;
  let speed = 150;
  function type(txt, speed) {
    if (i < txt.length)
    startScreen.innerHTML += txt.charAt(i);
    setTimeout(type, speed, txt, speed, i++);
  }
  type("Click to start the game", speed);

  document.body.addEventListener('click', () => {
    startScreen.style.display = "none";
    game()
  }, { once: true });
}
start();


function game() {
  gameScreen.style.display = "block";
  appearCharacter(-600);


  // Show text
  setTimeout(() => {
    displayNewText("A wild Cirno appeared!");
  }, 5000);

  setTimeout(() => {
    displayNewText("Choose your weapon!");

    // Play theme track
    const source = "sounds/05.\ Tomboyish\ Girl\ in\ Love.mp3";
    const audio = document.createElement('audio');
    audio.autoplay = true;
    audio.load()
    audio.addEventListener("load", () => {
      audio.play();
    }, true);
    audio.src = source;

  }, 10000);

  setTimeout(() => {

    // Display choices
    left.appendChild(weapons);
    weapons.style.display = "flex";
  }, 12000)

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Remove the element if it's shown
      if (weapon.style.display !== "none") {
        weapon.style.display = "none";
        weapon.innerHTML = '';
      }

      let playerSelection = e.target.className;
      let result = playRound(playerSelection, getComputerChoice());

      displayResultAndContinue(result);
      countScore(result);
      showResult();
    });
    // Show an icon of selected weapon
    button.addEventListener('mouseover', (e) => {
      let weaponName = e.target.className;
      const img = document.createElement("img");
      img.setAttribute("src", `images/${weaponName}.png`);
      weapon.appendChild(img);
      weapon.style.display = "flex";
    });
    button.addEventListener('mouseout', () => {
      weapon.style.display = "none";
      // Remove an icon inside the div
      weapon.innerHTML = '';
    })
  });
}