// Soldier interface
const Soldier = (name, attack, move) => ({
    name,
    attack,
    move,
});

// Archer class
const Archer = (name) =>
    Soldier(name, () => console.log(`${name} fires an arrow`), () =>
        console.log(`${name} moves quickly on foot`)
    );

// Swordsman class
const Swordsman = (name) =>
    Soldier(name, () => console.log(`${name} swings a sword`), () =>
        console.log(`${name} marches steadily forward`)
    );

// Cavalry class
const Cavalry = (name) =>
    Soldier(name, () => console.log(`${name} charges with a lance`), () =>
        console.log(`${name} rides on horseback`)
    );

// GameSoldier class
const GameSoldier = (soldier) => ({
    soldier,
    strategy: null,
    setStrategy(strategy) {
        this.strategy = strategy;
    },
    attack() {
        if (this.strategy && this.strategy.attack) {
            this.strategy.attack(this.soldier.name);
        } else {
            this.soldier.attack();
        }
    },
    move() {
        if (this.strategy && this.strategy.move) {
            this.strategy.move(this.soldier.name);
        } else {
            this.soldier.move();
        }
    },
});

// Strategy interfaces
const AttackStrategy = (name) => ({
    attack: (soldierName) =>
        console.log(`${name} commands ${soldierName} to attack`),
});

const MoveStrategy = (name) => ({
    move: (soldierName) =>
        console.log(`${name} commands ${soldierName} to move`),
});

// Create soldiers
const archer = Archer("Archer 1");
const swordsman = Swordsman("Swordsman 1");
const cavalry = Cavalry("Cavalry 1");

// Wrap soldiers in GameSoldier instances
const gameArcher = GameSoldier(archer);
const gameSwordsman = GameSoldier(swordsman);
const gameCavalry = GameSoldier(cavalry);

// Create strategies
const chargeStrategy = AttackStrategy("General 1");
const holdStrategy = MoveStrategy("General 2");
const retreatStrategy = {
    move: (soldierName) =>
        console.log(`General 3 commands ${soldierName} to retreat`),
};

// Set strategy for archer
gameArcher.setStrategy(holdStrategy);

// Set strategy for swordsman
gameSwordsman.setStrategy(chargeStrategy);

// Set strategy for cavalry
gameCavalry.setStrategy(retreatStrategy);

// Create game
const game = {
    soldiers: [gameArcher, gameSwordsman, gameCavalry],
    play() {
        console.log("Game starts!");
        this.soldiers.forEach((soldier) => {
            soldier.attack();
            soldier.move();
        });
        console.log("Game ends!");
    },
};

// Test game
game.play();
