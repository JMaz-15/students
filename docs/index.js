// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add('d-none');

// updateScoreTallyUI
function updateScoreTallyUI(){
game.username;
game.score;
scoreParagraph = username + ": " + score[0] + " V CPU: " + score[1];
}

// updateGameHistoryUI
function updateGameHistoryUI(){
gameHistoryParagraph;
gameHistoryParagraph = "";
game.gameHistoryLog;
gameHistoryParagraph = gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName;
  game = new RockPaperScissors(username);
  gameScreen.classList.remove('d-none');
  welcomeScreen.classList.add('d-none');
  
  
  
  // Complete
});

// go-button EventListener
startGameButton.addEventListener(`click`, function () {
  game.play(userSelection);
  updateScoreTallyUI();
  updateGameHistoryUI();
});