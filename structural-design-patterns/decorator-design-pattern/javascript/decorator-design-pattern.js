// Define the Player interface
const Player = (strength, speed) => ({
  getStrength: () => strength,
  setStrength: (newStrength) => {
    strength = newStrength;
  },
  getSpeed: () => speed,
  setSpeed: (newSpeed) => {
    speed = newSpeed;
  },
});

// Define the decorator for the Strength Potion item
const StrengthPotion = (strengthBoost) => (player) => ({
  ...player,
  getStrength: () => player.getStrength() + strengthBoost,
});

// Define the decorator for the Speed Potion item
const SpeedPotion = (speedBoost) => (player) => ({
  ...player,
  getSpeed: () => player.getSpeed() + speedBoost,
});

// Define the decorator for the Damage Spell item
const DamageSpell = (damageAmount) => (enemy) => ({
  ...enemy,
  takeDamage: () => {
    const currentHealth = enemy.getHealth();
    const newHealth = currentHealth - damageAmount;
    enemy.setHealth(newHealth);
  },
});

// Define the Enemy interface
const Enemy = (health) => ({
  getHealth: () => health,
  setHealth: (newHealth) => {
    health = newHealth;
  },
});

// Define the decorator for the Health Boost item
const HealthBoost = (healthBoost) => (player) => ({
  ...player,
  getHealth: () => player.getHealth() + healthBoost,
  setHealth: (newHealth) => {
    const maxHealth = player.getMaxHealth();
    const clampedHealth = Math.min(maxHealth, newHealth + healthBoost);
    player.setHealth(clampedHealth);
  },
});

// Define the decorator for the Armor item
const Armor = (armorValue) => (player) => ({
  ...player,
  takeDamage: (damageAmount) => {
    const newDamage = Math.max(damageAmount - armorValue, 0);
    player.takeDamage(newDamage);
  },
});

// Usage example
let player = Player(10, 5);
const strengthPotionDecorator = StrengthPotion(5)(player);
const speedPotionDecorator = SpeedPotion(2)(strengthPotionDecorator);
const damageSpellDecorator = DamageSpell(10)(Enemy(50));
const healthBoostDecorator = HealthBoost(10)(speedPotionDecorator);
const armorDecorator = Armor(5)(healthBoostDecorator);

console.log(armorDecorator.getHealth()); // Output: 20

player = armorDecorator;
player.takeDamage(8);

console.log(player.getHealth()); // Output: 17

