// Define the template method
const buildAndUpgradeTower = (loadAssets, placeTower, upgradeTower) => {
    loadAssets();
    placeTower();
    upgradeTower();
};

// Define the concrete implementations
const loadAssetsForCannonTower = () => console.log('Loading assets for Cannon Tower');
const placeCannonTower = () => console.log('Placing Cannon Tower');
const upgradeCannonTower = () => console.log('Upgrading Cannon Tower');

const loadAssetsForFrostTower = () => console.log('Loading assets for Frost Tower');
const placeFrostTower = () => console.log('Placing Frost Tower');
const upgradeFrostTower = () => console.log('Upgrading Frost Tower');

// Create the tower functions using the template method
const cannonTower = () => buildAndUpgradeTower(loadAssetsForCannonTower, placeCannonTower, upgradeCannonTower);
const frostTower = () => buildAndUpgradeTower(loadAssetsForFrostTower, placeFrostTower, upgradeFrostTower);

// Call the tower functions
cannonTower(); // Output: Loading assets for Cannon Tower
//         Placing Cannon Tower
//         Upgrading Cannon Tower

frostTower();  // Output: Loading assets for Frost Tower
               //         Placing Frost Tower
               //         Upgrading Frost Tower
