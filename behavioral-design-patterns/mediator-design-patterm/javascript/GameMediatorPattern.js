// Game mediator object
const gameMediator = (function () {
    // List of players
    const players = [];

    // List of weapons
    const weapons = [];

    // List of obstacles
    const obstacles = [];

    // Function to add a player
    function addPlayer(player) {
        players.push(player);
        console.log(`Player ${player.name} added to the game`);
    }

    // Function to remove a player
    function removePlayer(player) {
        const index = players.indexOf(player);
        if (index !== -1) {
            players.splice(index, 1);
            console.log(`Player ${player.name} removed from the game`);
        }
    }

    // Function to add a weapon
    function addWeapon(weapon) {
        weapons.push(weapon);
        console.log(`Weapon ${weapon.name} added to the game`);
    }

    // Function to remove a weapon
    function removeWeapon(weapon) {
        const index = weapons.indexOf(weapon);
        if (index !== -1) {
            weapons.splice(index, 1);
            console.log(`Weapon ${weapon.name} removed from the game`);
        }
    }

    // Function to add an obstacle
    function addObstacle(obstacle) {
        obstacles.push(obstacle);
        console.log(`Obstacle ${obstacle.name} added to the game`);
    }

    // Function to remove an obstacle
    function removeObstacle(obstacle) {
        const index = obstacles.indexOf(obstacle);
        if (index !== -1) {
            obstacles.splice(index, 1);
            console.log(`Obstacle ${obstacle.name} removed from the game`);
        }
    }

    // Function to broadcast a message to all players
    function broadcastMessage(sender, message) {
        console.log(`[${sender.name}] Broadcast message: ${message}`);
        players.forEach(player => {
            if (player !== sender) {
                player.receiveMessage(message);
            }
        });
    }

    // Return public methods
    return {
        addPlayer,
        removePlayer,
        addWeapon,
        removeWeapon,
        addObstacle,
        removeObstacle,
        broadcastMessage
    };
})();

// Player object
function Player(name) {
    this.name = name;

    // Function to send a message
    this.sendMessage = function (message) {
        console.log(`[${this.name}] Send message: ${message}`);
        gameMediator.broadcastMessage(this, message);
    };

    // Function to receive a message
    this.receiveMessage = function (message) {
        console.log(`[${this.name}] Receive message: ${message}`);
    };
}

// Weapon object
function Weapon(name) {
    this.name = name;
}

// Obstacle object
function Obstacle(name) {
    this.name = name;
}

// Usage
const player1 = new Player('John');
const player2 = new Player('Jane');
const weapon1 = new Weapon('Gun');
const weapon2 = new Weapon('Knife');
const obstacle1 = new Obstacle('Tree');
const obstacle2 = new Obstacle('Wall');

gameMediator.addPlayer(player1);
gameMediator.addPlayer(player2);
gameMediator.addWeapon(weapon1);
gameMediator.addWeapon(weapon2);
gameMediator.addObstacle(obstacle1);
gameMediator.addObstacle(obstacle2);

player1.sendMessage('Hello, everyone!');
weapon1.owner = player2;
obstacle2.owner = player1;

gameMediator.removePlayer(player1);
gameMediator.removeWeapon(weapon1);
gameMediator.removeObstacle(obstacle1);
