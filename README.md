# ToyRobot

## Description
ToyRobot is a toy robot simulator that can be placed on a table and moved.

## Usage Instructions

### Running the Program
1. Make sure you have Node.js installed on your system. You can download it from [the official Node.js website](https://nodejs.org/).
2. Clone this repository to your local machine.
3. Open a terminal and navigate to the project directory.
4. Run the following command to start the ToyRobot program: 
```
node main.js
```
This will start the ToyRobot program and begin accepting commands from the standard input.

### Running Tests
1. Ensure you have Node.js installed on your system.
2. Install Jest globally if you haven't already by running the following command: 
```
npm install -g jest 
```
3. Open a terminal and navigate to the project directory.
4. Run the following command to execute the tests:
```
npx test
```
This will run the unit tests for the ToyRobot program and display the results in the terminal.

### Play ToyRobot
- Use commands like `PLACE`, `MOVE`, `LEFT`, `RIGHT`, and `REPORT` to control the robot.

### Example
- `PLACE 0,0,NORTH` 
- `MOVE` 
- `RIGHT` 
- `MOVE` 
- `REPORT`

(Note: Each command should be followed by pressing the Enter key)

Expected Output:
```
1,1,EAST
```
  