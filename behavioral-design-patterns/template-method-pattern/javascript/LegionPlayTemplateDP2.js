// Define the abstract class
const Tower = name => ({
    name,

    // Define the template method
    buildAndUpgradeTower() {
        this.loadAssets();
        this.placeTower();
        this.upgradeTower();
    },

    // Define the abstract methods
    loadAssets() {
        throw new Error("Method 'loadAssets' must be implemented.");
    },
    placeTower() {
        throw new Error("Method 'placeTower' must be implemented.");
    },
    upgradeTower() {
        throw new Error("Method 'upgradeTower' must be implemented.");
    }
});

// Define the concrete implementations
const CannonTower = name => ({
    ...Tower(name),

    loadAssets() {
        console.log(`Loading assets for ${this.name}`);
    },

    placeTower() {
        console.log(`Placing ${this.name}`);
    },

    upgradeTower() {
        console.log(`Upgrading ${this.name}`);
    }
});

const FrostTower = name => ({
    ...Tower(name),

    loadAssets() {
        console.log(`Loading assets for ${this.name}`);
    },

    placeTower() {
        console.log(`Placing ${this.name}`);
    },

    upgradeTower() {
        console.log(`Upgrading ${this.name}`);
    }
});

// Call the tower functions
const cannonTower = CannonTower("Cannon Tower");
cannonTower.buildAndUpgradeTower();

const frostTower = FrostTower("Frost Tower");
frostTower.buildAndUpgradeTower();
