const Game = {
  start: () => {
    throw new Error('Method not implemented');
  },
  stop: () => {
    throw new Error('Method not implemented');
  },
  save: () => {
    throw new Error('Method not implemented');
  },
  load: () => {
    throw new Error('Method not implemented');
  },
};

const LegacyGame = {
  run: () => {
    console.log('Starting Legion 2');
  },
  getState: () => {
    console.log('Getting state of Legion 2');
    return {
      level: 1,
      score: 0,
    };
  },
};

const GameAdapter = legacyGame => ({
  start: legacyGame.run,
  stop: () => {
    console.log('Stopping Legion 2');
  },
  save: () => {
    const state = legacyGame.getState();
    console.log(`Saving Legion 2 state: ${JSON.stringify(state)}`);
  },
  load: state => {
    console.log(`Loading Legion 2 state: ${JSON.stringify(state)}`);
  },
});

const legacyGame = LegacyGame();
const game = GameAdapter(legacyGame);

game.start(); // Output: "Starting Legion 2"
game.stop(); // Output: "Stopping Legion 2"
game.save(); // Output: "Saving Legion 2 state: {"level":1,"score":0}"
game.load({ level: 2, score: 100 }); // Output: "Loading Legion 2 state: {"level":2,"score":100}"
