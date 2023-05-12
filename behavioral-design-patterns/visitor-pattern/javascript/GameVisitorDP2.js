// Define the Visitor interface that defines the methods that can be called on the enemy objects
const EnemyVisitor = {
    // Visit basic enemy
    visitBasicEnemy(enemy) {
        // Perform basic enemy behavior
        const damage = enemy.damage;
        console.log(`The basic enemy deals ${damage} damage to the player.`);
        return enemy;
    },
    // Visit boss enemy
    visitBossEnemy(enemy) {
        // Perform boss enemy behavior
        const damage = enemy.damage * 2;
        console.log(`The boss enemy deals ${damage} damage to the player.`);
        return enemy;
    },
    // Visit low health effect
    visitLowHealthEffect(enemy) {
        // Perform low health effect behavior
        console.log(`The ${enemy.type} enemy is now low on health and turns ${enemy.color}.`);
        return { ...enemy, color: 'red' };
    },
    // Visit fire effect
    visitFireEffect(enemy) {
        // Perform fire effect behavior
        const health = enemy.health - 20;
        console.log(`The ${enemy.type} enemy takes 20 damage from the fire effect and has ${health} health remaining.`);
        return { ...enemy, health };
    },
    // Visit poison effect
    visitPoisonEffect(enemy) {
        // Perform poison effect behavior
        const health = enemy.health - 10;
        console.log(`The ${enemy.type} enemy takes 10 damage from the poison effect and has ${health} health remaining.`);
        return { ...enemy, health };
    },
};

// Define the Visitable objects, which are the enemy classes that can be visited by the Visitor
const createBasicEnemy = () => {
    const enemy = {
        type: 'basic',
        health: 100,
        damage: 10,
        color: 'green',
    };
    return {
        ...enemy,
        accept(visitor) {
            return visitor.visitBasicEnemy(enemy);
        },
    };
};

const createBossEnemy = () => {
    const enemy = {
        type: 'boss',
        health: 200,
        damage: 20,
        color: 'orange',
    };
    return {
        ...enemy,
        accept(visitor) {
            return visitor.visitBossEnemy(enemy);
        },
    };
};

// Define the Effect objects, which are the effects that can be applied to the enemies
const LowHealthEffect = {
    type: 'low health',
    apply(enemy) {
        return enemy.accept(EnemyVisitor.visitLowHealthEffect);
    },
};

const FireEffect = {
    type: 'fire',
    apply(enemy) {
        return enemy.accept(EnemyVisitor.visitFireEffect);
    },
};

const PoisonEffect = {
    type: 'poison',
    apply(enemy) {
        return enemy.accept(EnemyVisitor.visitPoisonEffect);
    },
};

// Create some enemies and apply some effects to them
const basicEnemy = createBasicEnemy();
const bossEnemy = createBossEnemy();
const updatedBasicEnemy = FireEffect.apply(LowHealthEffect.apply(basicEnemy));
const updatedBossEnemy = PoisonEffect.apply(LowHealthEffect.apply(bossEnemy));

console.log('Original basic enemy:', basicEnemy);
console.log('Updated basic enemy:', updatedBasicEnemy);
console.log('Original boss enemy:', bossEnemy);
console.log('Updated boss enemy:', updatedBossEnemy);
