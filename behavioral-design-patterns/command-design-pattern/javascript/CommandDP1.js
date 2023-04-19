// Define the command interface
const Command = (execute) => ({
    execute,
});

// Define the concrete command objects
const MoveUpCommand = (player) =>
    Command(() => {
        player.y -= 10;
    });

const MoveDownCommand = (player) =>
    Command(() => {
        player.y += 10;
    });

const MoveLeftCommand = (player) =>
    Command(() => {
        player.x -= 10;
    });

const MoveRightCommand = (player) =>
    Command(() => {
        player.x += 10;
    });

// Define the invoker
const KeyboardInputHandler = () => {
    const commands = [];

    const handleInput = (event) => {
        const keyCode = event.keyCode;
        let command;

        switch (keyCode) {
            case 38:
                command = MoveUpCommand(player);
                break;
            case 40:
                command = MoveDownCommand(player);
                break;
            case 37:
                command = MoveLeftCommand(player);
                break;
            case 39:
                command = MoveRightCommand(player);
                break;
            default:
                return;
        }

        commands.push(command);
        command.execute();
    };

    return { handleInput };
};

// Define the receiver
const player = {
    x: 0,
    y: 0,
};

// Define the client
const inputHandler = KeyboardInputHandler();
console.log(player)
inputHandler.handleInput({ keyCode: 38 })
console.log(player)

// Bind the event listener to the document to be run on browser
// document.addEventListener("keydown", inputHandler.handleInput);
