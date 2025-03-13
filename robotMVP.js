'use strict';
// this script is purely to compact/compress program into as few lines as possible to run the program, without useful comments on functionality, and not considering readability etc.
const robot = {};
const dirs = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
const increment = new Map([[0, [1, 'y']], [1, [1, 'x']], [2, [-1, 'y']], [3, [-1, 'x']]]);

const place = function (loc) {
    let [x, y, dir] = loc;
    [robot.x, robot.y, robot.dir] = [+x, +y, dir];
};

const move = function () {
    let incrementResult = increment.get(dirs.indexOf(robot.dir));
    robot[incrementResult[1]] = Math.min(Math.max(robot[incrementResult[1]] + eval(incrementResult[0]), 0), 4);
};

const rotate = function (sindex) {
    let rot = sindex === 'RIGHT' ? 1 : sindex === "LEFT" ? -1 : 0;
    robot.dir = dirs[(dirs.indexOf(robot.dir) + rot + 4) % 4];
};

const report = function () {
    console.log(`Robot at X${robot.x} Y${robot.y}, facing ${robot.dir}`);
};

const parseInput = function (input) {
    const cleanInput = input.trim().toUpperCase().split(' ');
    const com = cleanInput[0];
    const loc = String(cleanInput[1]).split(',');
    return [com, loc];
};

const run = function (raw) {
    let [com, loc] = parseInput(raw);
    if (com != 'PLACE' && robot.x === undefined) { }
    else if (com === 'PLACE') { place(loc); }
    else if (com === 'REPORT') { report(); }
    else if (com === 'MOVE') { move(robot.dir); }
    else if (com === 'LEFT' || com === 'RIGHT') { rotate(com); }
};

let command;
while (command != 'exit') {
    command = prompt('Please enter a command:');
    run(command);
};