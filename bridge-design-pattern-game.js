// Define the abstraction function
const game = platform => ({
  play: () => {
    throw new Error('Method not implemented');
  },
  platform,
});

// Define the concrete implementations for each platform
const xboxGame = game('Xbox');
xboxGame.play = () => console.log('Playing Call of Duty on Xbox');

const playStationGame = game('PlayStation');
playStationGame.play = () => console.log('Playing Call of Duty on PlayStation');

// Define the implementation function that acts as a bridge between the abstraction and the concrete implementations
const gameImpl = game => ({
  playOnXbox: () => {
    game.platform = 'Xbox';
    game.play();
  },
  playOnPlayStation: () => {
    game.platform = 'PlayStation';
    game.play();
  },
});

// Use the implementation function to bridge the gap between the abstraction and the concrete implementations
const xboxImpl = gameImpl(xboxGame);
xboxImpl.playOnXbox(); // Output: "Playing Call of Duty on Xbox"

const playStationImpl = gameImpl(playStationGame);
playStationImpl.playOnPlayStation(); // Output: "Playing Call of Duty on PlayStation"
