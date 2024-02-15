const ToyRobot = require('../src/Robot');
const { expect } = require('@jest/globals');

describe('ToyRobot', () => {

    test('Robot is not on the table if no PLACE command has been executed', () => {
        const robot = new ToyRobot();
    
        expect(robot.isOnTable()).toBe(false);
    });

    test('REPORT command show the position and the orientation of the robot', () => {
        const robot = new ToyRobot();
        
        robot.place(0, 0, 'NORTH')
        const consoleSpy = jest.spyOn(console, 'log')
        robot.report();
        expect(consoleSpy).toHaveBeenCalledWith('0,0,NORTH');
    });

    test('PLACE command sets the position and orientation of the robot only if it is within the table boundaries', () => {
        const robot = new ToyRobot();

        robot.place(-1, 2, 'EAST');
        expect(robot.x).toBe(null);
        expect(robot.y).toBe(null);
        expect(robot.facing).toBe(null);
        
        robot.place(1, 2, 'EAST');
        expect(robot.x).toBe(1);
        expect(robot.y).toBe(2);
        expect(robot.facing).toBe('EAST');
    });


    test('MOVE command moves the robot one unit in the facing direction only if it remains within the table boundaries', () => {
        const robot = new ToyRobot();
    
        robot.place(1, 4, 'NORTH');
        robot.move();
        expect(robot.x).toBe(1);
        expect(robot.y).toBe(4);
        expect(robot.facing).toBe('NORTH');
        
        robot.place(1, 2, 'NORTH');
        robot.move();
        expect(robot.x).toBe(1);
        expect(robot.y).toBe(3);
        expect(robot.facing).toBe('NORTH');
    });


    test('LEFT and RIGHT commands rotate the robot orientation correctly for all possible facings', () => {
        const robot = new ToyRobot();

        const facings = robot.directions;

        facings.forEach((facing, index) => {
            robot.place(0, 0, facing);
            robot.left();
            expect(robot.facing).toBe(facings[(index + 3) % 4]);


            robot.place(0, 0, facing);
            robot.right();
            expect(robot.facing).toBe(facings[(index + 1) % 4]);
        });
    });


    test('---Example a: PLACE 0,0,NORTH -> MOVE -> REPORT', () => {
        const robot = new ToyRobot();
        const consoleSpy = jest.spyOn(console, 'log')

        robot.place(0, 0, 'NORTH');
        robot.move();
        robot.report();
        expect(consoleSpy).toHaveBeenCalledWith('0,1,NORTH');
    });

    test('---Example b: PLACE 0,0,NORTH -> LEFT -> REPORT', () => {
        const robot = new ToyRobot();
        const consoleSpy = jest.spyOn(console, 'log')

        robot.place(0, 0, 'NORTH');
        robot.left();
        robot.report();
        expect(consoleSpy).toHaveBeenCalledWith('0,0,WEST');
    });

    test('---Example c: PLACE 1,2,EAST -> MOVE -> MOVE -> LEFT -> MOVE -> REPORT', () => {
        const robot = new ToyRobot();
        const consoleSpy = jest.spyOn(console, 'log')

        robot.place(1, 2, 'EAST');
        robot.move();
        robot.move();
        robot.left();
        robot.move();
        robot.report();
        expect(consoleSpy).toHaveBeenCalledWith('3,3,NORTH');
    });

});