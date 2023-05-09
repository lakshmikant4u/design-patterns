const gameSingleton = (function () {
  let instance; // Private variable to hold the Singleton instance

  function init() {
    // Private function to initialize the game instance
    const game = {
      name: "Legion 2",
      version: "1.0",
      developer: "GameDev Inc.",
      platform: "PC",
      releaseDate: "2023-06-01",
      // ... other game properties
    };
    // Public methods to interact with the game instance
    return {
      getName: function () {
        return game.name;
      },
      getVersion: function () {
        return game.version;
      },
      getDeveloper: function () {
        return game.developer;
      },
      getPlatform: function () {
        return game.platform;
      },
      getReleaseDate: function () {
        return game.releaseDate;
      },
      // ... other public methods
    };
  }

  return {
    // Public method to get the Singleton instance
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

// Usage
const game1 = gameSingleton.getInstance();
const game2 = gameSingleton.getInstance();
console.log(game1 === game2); // true, since both variables reference the same Singleton instance
console.log(game1.getName()); // "Legion 2"
console.log(game2.getVersion()); // "1.0"
console.log(game1.getDeveloper()); // "GameDev Inc."

