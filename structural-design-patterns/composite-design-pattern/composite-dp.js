// Component interface
const GameObject = (() => {
  const update = () => {};
  const draw = () => {};
  const add = (gameObject) => {};
  const remove = (gameObject) => {};
  
  return {
    update,
    draw,
    add,
    remove
  };
})();

// Composite class
const Scene = (gameObjects) => {
  const update = () => {
    gameObjects.forEach(gameObject => gameObject.update());
  };
  
  const draw = () => {
    gameObjects.forEach(gameObject => gameObject.draw());
  };
  
  const add = (gameObject) => {
    if (!GameObject.isPrototypeOf(gameObject)) {
      throw new Error('Invalid game object type');
    }
    
    gameObjects.push(gameObject);
  };
  
  const remove = (gameObject) => {
    const index = gameObjects.indexOf(gameObject);
    if (index !== -1) gameObjects.splice(index, 1);
  };
  
  return Object.freeze({
    update,
    draw,
    add,
    remove
  });
};

// Leaf class
const Bullet = () => {
  const update = () => {
    console.log("Bullet updated!");
  };
  
  const draw = () => {
    console.log("Bullet drawn!");
  };
  
  return Object.freeze({
    update,
    draw
  });
};


// Create a scene with bullets
const scene = Scene([Bullet(), Bullet(), Bullet()]);

// Add a bullet to the scene
const bullet = Bullet();
scene.add(bullet);

// Remove a bullet from the scene
scene.remove(bullet);

// Update the scene
scene.update();

// Draw the scene
scene.draw();
