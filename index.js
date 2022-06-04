// Number Guessing Game is a terminal friendly game that allows user to guess a number within range of numbers and adds user to a new stage for every correct guess
// Player wins a medal for stage attained and gets a trophy after 4 medal wins

// Require prompt-sync modules to use function
const ps = require("prompt-sync");
const prompt = ps();

// States in the game
const gameState = {
  num: 2,
  stage: 1,
  medal: 0,
  trophy: 0,
  isPlaying: true,
  isGuessCorrect: false,
  playerName: "",
  medals: "",
  trophies: ""
}

// set reward for stage attained
function setStageReward() {
  if(gameState.stage >= 2 && gameState.isGuessCorrect) {
      gameState.medal += 1;
      if(gameState.medal === 4) {
        gameState.trophy += 1;
        gameState.medal = 0;
      }
    }
  gameState.medals = "";
  gameState.trophies = "";
  for(let i = 0; gameState.medal > i; i++) {
      gameState.medals += "🏅"
    }
  for(let i = 0; gameState.trophy > i; i++) {
      gameState.trophies += "🏆"
  }
}

// Recursively get a random number
function getRandom() {
  let random = Math.round(Math.random() * gameState.num);
  if(random < 1) {
    getRandom(gameState.num)
  }
  return random
}

// set players name
gameState.playerName = prompt("Hello welcome to number guessing game 🎲 , tell us your name? ");
console.log("Game starts from stage 1 to infinite stage if all condition are met!!!")

// Play game using a while loop method
while(gameState.isPlaying) {
  setStageReward();
  console.log(`Stage: ${gameState.stage} ${gameState.trophies}${gameState.medals}`)
  let promptUser = prompt(`Guess the number ranging from 1 to ${gameState.num}? `);
  let num = parseInt(promptUser);
  if(num !== undefined && num !== null && typeof num === "number") {
    if(num === getRandom()) {
      gameState.num += 1;
      gameState.stage += 1;
      gameState.isGuessCorrect = true;
      console.log(`Congrats ${gameState.playerName} 🎉🎉, your stage will be updated.`)
    }
    else {
      gameState.isGuessCorrect = false;
      console.log("Try another guess champ!!!")
      
    }
  }
}



