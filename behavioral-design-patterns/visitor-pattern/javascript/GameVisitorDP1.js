// Define the Visitor interface that defines the methods that can be called on the enemy objects
const EnemyVisitor = {
    visitBasicEnemy(enemy) {
        // Perform basic enemy behavior
        return enemy;
    },
    visitBossEnemy(enemy) {
        // Perform boss enemy behavior
        return enemy;
    },
    visitLowHealthEffect(enemy) {
        // Perform low health effect behavior
        return { ...enemy, color: 'red' };
    },
    visitFireEffect(enemy) {
        // Perform fire effect behavior
        return { ...enemy, health: enemy.health - 20 };
    },
};

// Define the Visitable objects, which are the enemy classes that can be visited by the Visitor
const createBasicEnemy = () => ({
    type: 'basic',
    health: 100,
    damage: 10,
    color: 'green',
    accept: visitor => visitor.visitBasicEnemy(this),
});

const createBossEnemy = () => ({
    type: 'boss',
    health: 200,
    damage: 20,
    color: 'orange',
    accept: visitor => visitor.visitBossEnemy(this),
});

// Define a concrete Visitor object that implements the new behavior
const LowHealthEffectVisitor = {
    visitBasicEnemy(enemy) {
        if (enemy.health < 50) {
            return { ...enemy, color: 'red' };
        }
        return enemy;
    },
    visitBossEnemy(enemy) {
        if (enemy.health < 50) {
            return { ...enemy, color: 'purple' };
        }
        return enemy;
    },
    visitLowHealthEffect(enemy) {
        // Do nothing, to prevent infinite recursion
        return enemy;
    },
    visitFireEffect(enemy) {
        // Do nothing, to prevent infinite recursion
        return enemy;
    },
};

// Define a concrete Visitor object that implements another new behavior
const FireEffectVisitor = {
    visitBasicEnemy(enemy) {
        return { ...enemy, health: enemy.health - 5 };
    },
    visitBossEnemy(enemy) {
        return { ...enemy, health: enemy.health - 10 };
    },
    visitLowHealthEffect(enemy) {
        // Do nothing, to prevent infinite recursion
        return enemy;
    },
    visitFireEffect(enemy) {
        return { ...enemy, health: enemy.health - 20 };
    },
};

// Create and visit the enemy objects with the Visitors
const basicEnemy = createBasicEnemy();
const bossEnemy = createBossEnemy();

const updatedBasicEnemy = LowHealthEffectVisitor.visitBasicEnemy(FireEffectVisitor.visitFireEffect(basicEnemy));
const updatedBossEnemy = LowHealthEffectVisitor.visitBossEnemy(FireEffectVisitor.visitFireEffect(bossEnemy));

// Print the updated enemy objects
console.log(updatedBasicEnemy);
console.log(updatedBossEnemy);
