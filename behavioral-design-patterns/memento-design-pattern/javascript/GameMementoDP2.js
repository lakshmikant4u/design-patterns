// Define the GameState object
const createGameState = (playerName, playerPosition, playerHealth) => {
    const getState = () => ({ playerName, playerPosition, playerHealth });

    const setPlayerName = (newName) => (playerName = newName);
    const getPlayerName = () => playerName;

    const setPlayerPosition = (newPosition) => (playerPosition = newPosition);
    const getPlayerPosition = () => playerPosition;

    const setPlayerHealth = (newHealth) => (playerHealth = newHealth);
    const getPlayerHealth = () => playerHealth;

    return { getState, setPlayerName, getPlayerName, setPlayerPosition, getPlayerPosition, setPlayerHealth, getPlayerHealth };
};

// Define the GameHistory object
const createGameHistory = () => {
    const states = [];

    const pushState = (state) => states.push(state);
    const popState = () => states.pop();

    return { pushState, popState };
};

// Create the initial state of the game
const gameState = createGameState("Player 1", { x: 0, y: 0 }, 100);
const gameHistory = createGameHistory();
gameHistory.pushState(gameState.getState());

// Simulate the game loop
const simulateGameLoop = () => {
    setInterval(() => {
        // Update the state of the game and save it to the history
        gameState.setPlayerPosition({ x: gameState.getPlayerPosition().x + 1, y: gameState.getPlayerPosition().y + 1 });
        gameState.setPlayerHealth(gameState.getPlayerHealth() - 10);
        gameHistory.pushState(gameState.getState());

        // Display the current state of the game
        console.log("Current state of the game:");
        console.log("Player name:", gameState.getPlayerName());
        console.log("Player position:", gameState.getPlayerPosition());
        console.log("Player health:", gameState.getPlayerHealth());
    }, 1000);
};

// Start the game loop
simulateGameLoop();

// Restore the previous state of the game
setTimeout(() => {
    const previousGameState = gameHistory.popState();
    gameState.setPlayerName(previousGameState.playerName);
    gameState.setPlayerPosition(previousGameState.playerPosition);
    gameState.setPlayerHealth(previousGameState.playerHealth);

    // Display the current state of the game
    console.log("Restored state of the game:");
    console.log("Player name:", gameState.getPlayerName());
    console.log("Player position:", gameState.getPlayerPosition());
    console.log("Player health:", gameState.getPlayerHealth());
}, 5000);
