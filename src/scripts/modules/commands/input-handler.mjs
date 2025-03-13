'use strict';

import movement from "./movement.mjs";
import report from "./report.mjs";

// handle user input
// routing to relevant command

export default class input_handler {
    constructor(input) {
        this.input = input;
    }

    static movement() {
        return movement;
    }
    // do stuff with input

};


// Translate instructions
// const parseInput = function (input) {
//     // Clean text input, remove whitespace etc.
//     const cleanInput = input.trim().toUpperCase().split(' ');

//     // Command will always be 1st part of input
//     const com = cleanInput[0];

//     // Location (if relevant) will be 2nd part of input
//     const loc = String(cleanInput[1]).split(',');

//     return [com, loc];
// };



// Event Handler
// const run = function (raw) {
//     // Call input cleaning on raw input from user
//     let [com, loc] = parseInput(raw);

//     if (com != 'PLACE' && robot.x === undefined) {
//         // do nothing if not placed
//     } else if (com === 'PLACE') {
//         // Place robot on board
//         place(loc);
//     } else if (com === 'REPORT') {
//         // Report current robot position & facing
//         report();
//     } else if (com === 'MOVE') {
//         // Move robot in current facing dir
//         move(robot.dir);
//     } else if (com === 'LEFT' || com === 'RIGHT') {
//         // Rotate robot left/right
//         rotate(com);
//     }
// };