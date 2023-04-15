const redState = {
    name: "red",
    duration: 10,
    next: () => greenState,
};

const greenState = {
    name: "green",
    duration: 15,
    next: () => yellowState,
};

const yellowState = {
    name: "yellow",
    duration: 2,
    next: () => redState,
};

const getNextState = (currentState) => {
    const nextState = currentState.next();
    const remainingTime = nextState.duration;
    return [nextState, remainingTime];
};

const updateTrafficLight = (currentState, remainingTime) => {
    console.log(`Current light: ${currentState.name}`);
    console.log(`Time remaining: ${remainingTime}s`);
};

const trafficLight = () => {
    let currentState = redState;
    let remainingTime = currentState.duration;

    updateTrafficLight(currentState, remainingTime);

    setInterval(() => {
        [currentState, remainingTime] = getNextState(currentState);
        updateTrafficLight(currentState, remainingTime);
    }, remainingTime * 1000);
};

// Usage
trafficLight();
