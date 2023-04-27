// Define the game object
const game = {
  score: 0,
  level: 1,
  isGameOver: false,
  gameData: {},
  
  updateScore(points) {
    this.score += points;
  },
  
  updateLevel(level) {
    this.level = level;
  },
  
  endGame() {
    this.isGameOver = true;
  },
  
  saveGameData(data) {
    this.gameData = data;
  }
};

// Define the proxy object
const gameProxy = new Proxy(game, {
  get(target, prop, receiver) {
    if (prop === "score") {
      console.log("Getting score");
      return target.score;
    } else if (prop === "level") {
      console.log("Getting level");
      return target.level;
    } else if (prop === "isGameOver") {
      console.log("Getting game over status");
      return target.isGameOver;
    } else if (prop === "gameData") {
      console.log("Getting game data");
      return target.gameData;
    } else {
      console.log(`Getting unknown property: ${prop}`);
      return undefined;
    }
  },
  
  set(target, prop, value, receiver) {
    if (prop === "score") {
      console.log("Setting score");
      target.updateScore(value);
      return true;
    } else if (prop === "level") {
      console.log("Setting level");
      target.updateLevel(value);
      return true;
    } else if (prop === "isGameOver") {
      console.log("Setting game over status");
      target.endGame();
      return true;
    } else if (prop === "gameData") {
      console.log("Setting game data");
      target.saveGameData(value);
      return true;
    } else {
      console.log(`Setting unknown property: ${prop}`);
      return false;
    }
  }
});

// Usage example
console.log(gameProxy.score); // "Getting score", 0
gameProxy.score = 10; // "Setting score"
console.log(gameProxy.score); // "Getting score", 10

console.log(gameProxy.level); // "Getting level", 1
gameProxy.level = 2; // "Setting level"
console.log(gameProxy.level); // "Getting level", 2

console.log(gameProxy.isGameOver); // "Getting game over status", false
gameProxy.isGameOver = true; // "Setting game over status"
console.log(gameProxy.isGameOver); // "Getting game over status", true

console.log(gameProxy.gameData); // "Getting game data", {}
gameProxy.gameData = { playerName: "John Doe", gameTime: "12:30" }; // "Setting game data"
console.log(gameProxy.gameData); // "Getting game data", { playerName: "John Doe", gameTime: "12:30" }

console.log(gameProxy.unknownProperty); // "Getting unknown property: unknownProperty", undefined
gameProxy.unknownProperty = "unknown value"; // "Setting unknown property: unknownProperty"
console.log(gameProxy.unknownProperty); // "Getting unknown property: unknownProperty", undefined
