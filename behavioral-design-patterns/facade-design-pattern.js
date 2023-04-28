// Game Engine module
const GameEngine = (() => {
  let playerPosition = { x: 0, y: 0 }

  const start = () => console.log('Starting the game engine...')
  const pause = () => console.log('Pausing the game engine...')
  const resume = () => console.log('Resuming the game engine...')
  const getPlayerPosition = () => playerPosition
  const setPlayerPosition = (position) => {
    playerPosition = position
    console.log(`Setting player position to (${position.x}, ${position.y})...`)
  }
  const spawnZombie = () => console.log('Spawning a zombie...')

  // Export only the required public methods
  return {
    start,
    pause,
    resume,
    getPlayerPosition,
    setPlayerPosition,
    spawnZombie,
  }
})()

// Game Facade module
const GameFacade = (() => {
  const start = () => GameEngine.start()
  const pause = () => GameEngine.pause()
  const resume = () => GameEngine.resume()
  const getPlayerPosition = () => GameEngine.getPlayerPosition()
  const setPlayerPosition = (position) => GameEngine.setPlayerPosition(position)
  const spawnZombie = () => GameEngine.spawnZombie()

  // Export only the required public methods
  return {
    start,
    pause,
    resume,
    getPlayerPosition,
    setPlayerPosition,
    spawnZombie,
  }
})()

// Usage
GameFacade.start()
GameFacade.setPlayerPosition({ x: 10, y: 20 })
const playerPosition = GameFacade.getPlayerPosition()
console.log(playerPosition)


