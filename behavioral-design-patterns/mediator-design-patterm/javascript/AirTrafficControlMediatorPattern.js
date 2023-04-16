const ATCTower = () => {
    const pilots = [];
    const planes = [];
    const queue = [];

    const registerPilot = (pilot) => {
        pilots.push(pilot);
    };

    const registerPlane = (plane) => {
        planes.push(plane);
    };

    const queuePlane = (plane) => {
        queue.push(plane);
        console.log(`${plane.name} is in the queue`);
    };

    const takeoff = () => {
        const plane = queue.shift();
        console.log(`${plane.name} is taking off`);
    };

    const notifyCollision = (plane) => {
        for (let p of planes) {
            if (p !== plane) {
                p.avoidCollision();
            }
        }
    };

    const monitorAirspace = () => {
        for (let a of planes) {
            if (a.altitude > 10000) {
                a.adjustAltitude();
            }
        }
    };

    const sendMessage = (pilot, message) => {
        for (let p of pilots) {
            if (p !== pilot) {
                p.receiveMessage(message);
            }
        }
    };

    return {
        registerPilot,
        registerPlane,
        queuePlane,
        takeoff,
        notifyCollision,
        monitorAirspace,
        sendMessage,
    };
};

const Pilot = (name, tower) => {
    const sendMessage = (message) => {
        tower.sendMessage(this, message);
    };

    const receiveMessage = (message) => {
        console.log(`${name} received message: ${message}`);
    };

    return { name, sendMessage, receiveMessage };
};

const Plane = (name, tower) => {
    let altitude = 0;

    const notifyCollision = () => {
        console.log(`${name} received collision notification`);
    };

    const takeAction = () => {
        console.log(`${name} is taking evasive action`);
    };

    const avoidCollision = () => {
        takeAction();
    };

    const adjustAltitude = () => {
        console.log(`${name} is adjusting altitude`);
    };

    const requestTakeoff = () => {
        tower.queuePlane({ name }); // pass plane object with name property only
    };

    const takeoff = () => {
        tower.takeoff();
    };

    return {
        name,
        altitude,
        notifyCollision,
        avoidCollision,
        adjustAltitude,
        requestTakeoff,
        takeoff,
    };
};

// Usage
const tower = ATCTower();
const pilot1 = Pilot('John', tower);
const pilot2 = Pilot('Jane', tower);
tower.registerPilot(pilot1);
tower.registerPilot(pilot2);

const plane1 = Plane('Boeing 777', tower);
const plane2 = Plane('Airbus A320', tower);
tower.registerPlane(plane1);
tower.registerPlane(plane2);

plane1.altitude = 12000;
tower.monitorAirspace();
tower.notifyCollision(plane1);

plane1.requestTakeoff();
plane2.requestTakeoff();
plane1.takeoff(); // Boeing 777 is taking off
plane2.takeoff(); // Airbus A320 is taking off

pilot1.sendMessage('Ready for takeoff');
