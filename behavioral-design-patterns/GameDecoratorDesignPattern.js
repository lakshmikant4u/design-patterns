// Define the base object
function Game() {
  this.price = 60;
  this.platform = "PC";
}

Game.prototype.getPrice = function() {
  return this.price;
}

Game.prototype.getPlatform = function() {
  return this.platform;
}

// Define the decorator class
function GameDecorator(game) {
  this.game = game;
}

GameDecorator.prototype.getPrice = function() {
  return this.game.getPrice();
}

GameDecorator.prototype.getPlatform = function() {
  return this.game.getPlatform();
}

// Define concrete decorator classes
function Xbox(game) {
  GameDecorator.call(this, game);
  this.price = game.getPrice() + 20;
  this.platform = "Xbox";
}

Xbox.prototype = Object.create(GameDecorator.prototype);

function PlayStation(game) {
  GameDecorator.call(this, game);
  this.price = game.getPrice() + 25;
  this.platform = "PlayStation";
}

PlayStation.prototype = Object.create(GameDecorator.prototype);

function DLC(game) {
  GameDecorator.call(this, game);
  this.price = game.getPrice() + 10;
}

DLC.prototype = Object.create(GameDecorator.prototype);

// Create an instance of the base object and wrap it with decorators
let game = new Game();
game = new Xbox(game);
game = new DLC(game);
game = new PlayStation(game);

console.log(game.getPlatform()); // Output: "PlayStation"
console.log(game.getPrice()); // Output: 115
