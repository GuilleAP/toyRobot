class ToyRobot {
    constructor() {
        this.x = null; // X coordinate
        this.y = null; // Y coordinate
        this.facing = null; // Orientation (NORTH, EAST, SOUTH, WEST)
        this.tableWidth = 5; // Width of the table
        this.tableHeight = 5; // Height of the table
        this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']; // Possible directions
    }

    /**
     * Place the robot on the table at a specific position and facing direction
     * @param {number} x 
     * @param {number} y 
     * @param {string} facing 
     */
    place(x, y, facing) {
        if (this.isValidPosition(x, y) && this.directions.includes(facing)) {
            this.x = x;
            this.y = y;
            this.facing = facing;
        }
    }

    /**
     * Move the robot one unit in the direction it is facing, if possible
     */
    move() {
        if (this.facing === 'NORTH' && this.y < this.tableHeight - 1) {
            this.y++;
        } else if (this.facing === 'EAST' && this.x < this.tableWidth - 1) {
            this.x++;
        } else if (this.facing === 'SOUTH' && this.y > 0) {
            this.y--;
        } else if (this.facing === 'WEST' && this.x > 0) {
            this.x--;
        }
    }

    /**
     * Rotate the robot 90 degrees to the left
     */
    left() {
        const index = this.directions.indexOf(this.facing);
        this.facing = this.directions[(index + 3) % 4];
    }

    /**
     * Rotate the robot 90 degrees to the right
     */
    right() {
        const index = this.directions.indexOf(this.facing);
        this.facing = this.directions[(index + 1) % 4];
    }

    /**
     * Report the current position and orientation of the robot
     */
    report() {
        if (this.isOnTable()) {
            console.log(`${this.x},${this.y},${this.facing}`);
        }
    }

    /**
     * Check if the provided position is within the table boundaries
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean} True if the position is within the table boundaries, false otherwise.
     */
    isValidPosition(x, y) {
        return x >= 0 && x < this.tableWidth && y >= 0 && y < this.tableHeight;
    }

    /**
     * // Check if the robot is on the table
     * @returns {boolean} True if the robot is on the table, false otherwise.
     */
    isOnTable() {
        return this.x !== null && this.y !== null && this.facing !== null;
    }
}

module.exports = ToyRobot;