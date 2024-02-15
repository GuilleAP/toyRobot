
function main() {
    // Import the ToyRobot class from the Robot.js file
    const ToyRobot = require('./src/Robot.js');

    // Create a new instance of the ToyRobot class
    let robot = new ToyRobot();

    // Configure input stream to read user commands and listen for data input from the user
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input) => {
        const command = input.trim().toUpperCase();
        const commandParts = command.split(' ');       

        // Check if the first part of the command is 'PLACE'
        if(commandParts[0] === 'PLACE') {
            const args = commandParts[1].split(',');
            const x = parseInt(args[0]);
            const y = parseInt(args[1]);
            const facing = args[2];

            // Place the robot on the table with the provided arguments
            robot.place(x, y, facing);
        }
        // If the first part of the command is not 'PLACE'
        else {
            // Execute the corresponding action based on the command
            switch(command) {
                case 'MOVE':
                    robot.move();
                    break;
                case 'LEFT':
                    robot.left();
                    break;
                case 'RIGHT':
                    robot.right()
                    break;
                case 'REPORT':
                    robot.report();
                    break;
            }
        }
    });
}

main();