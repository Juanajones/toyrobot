'use strict';

// instantiate robot object
const robot = {};

// cardinal directions
// const dirs = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

// map corresponds to index of dirs[]
// const increment = new Map([
//     [0, [1, 'y']],  // NORTH = +1 in Y
//     [1, [1, 'x']],  // EAST = +1 in X
//     [2, [-1, 'y']], // SOUTH = -1 in Y
//     [3, [-1, 'x']]  // WEST = -1 in X
// ]);

const dirs = new Map([
    ['NORTH', [0, 'y', 1]],  // NORTH = +1 in Y
    ['EAST', [1, 'x', 1]],  // EAST = +1 in X
    ['SOUTH', [2, 'y', -1]], // SOUTH = -1 in Y
    ['WEST', [3, 'x', -1]]  // WEST = -1 in X
]);

// Place robot on table
const place = function (loc) {
    // destructured assignment of variables
    let [x, y, dir] = loc;
    // assign Robot object values to placement values
    [robot.x, robot.y, robot.dir] = [+x, +y, dir];
};

// Move robot in facing direction
const move = function () {
    // get array(ex. [-1, x]) from Increment map matching curr direction
    // let incrementResult = increment.get(dirs.indexOf(robot.dir));
    let incrementResult = dirs.get(robot.dir);

    // Note: Math.max/min below are for bounds
    // min: ex. robot.y <= 4 ? 4
    // max: ex. robot.x >= 0 ? 0

    // Set relevant robot x/y value to Evaluated value from map
    // ex. WEST === robot.x + -1
    robot[incrementResult[1]] = Math.min(
        Math.max(
            robot[incrementResult[1]] + eval(incrementResult[2]), 0
        ), 4
    );
};

// Rotate robot per input dir
const rotate = function (sindex) {
    // sindex == sinistral/dextral == left/right

    // Rotation value per array [1, 2, 3, 4]
    // Right increments ->, Left decrements <-, else stay
    let rot = sindex === 'RIGHT' ? 1 : sindex === "LEFT" ? -1 : 0;

    // Get index of curr dir -> increment/decrement per rot value
    // ex. turn RIGHT(+1) from EAST(2): 
    // (2 + 1 + 4) % 4 = (7 / 4) = 1 R 3
    // New dir = remainder of above = 3 (SOUTH)
    const newDirIndex = (dirs.get(robot.dir)[0] + rot + 4) % 4;

    // set new robot direction
    robot.dir = dirs.keys()[newDirIndex]; // this doesn't work!
};

// Report robot current position & facing
const report = function () {
    console.log(`Robot at X${robot.x} Y${robot.y}, facing ${robot.dir}`);
};

// Translate instructions
const parseInput = function (input) {
    // Clean text input, remove whitespace etc.
    const cleanInput = input.trim().toUpperCase().split(' ');

    // Command will always be 1st part of input
    const com = cleanInput[0];

    // Location (if relevant) will be 2nd part of input
    const loc = String(cleanInput[1]).split(',');

    return [com, loc];
};

// Event Handler
const run = function (raw) {
    // Call input cleaning on raw input from user
    let [com, loc] = parseInput(raw);

    if (com != 'PLACE' && robot.x === undefined) {
        // do nothing if not placed
    } else if (com === 'PLACE') {
        // Place robot on board
        place(loc);
    } else if (com === 'REPORT') {
        // Report current robot position & facing
        report();
    } else if (com === 'MOVE') {
        // Move robot in current facing dir
        move(robot.dir);
    } else if (com === 'LEFT' || com === 'RIGHT') {
        // Rotate robot left/right
        rotate(com);
    }
};

let command;
// while loop is to repeatedly prompt user
while (command != 'exit') {
    // Prompt user for input
    command = prompt('Please enter a command:');

    // trigger event handler based on current input
    run(command);

    // turn below on for auto-reporting
    if (command != 'exit') { report(); };
};

// Exit statement to stop prompts
if (command === 'exit') { console.log('Exiting') };

