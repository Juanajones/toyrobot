'use strict';

import robot from "./modules/objects/robot.mjs";
import board from "./modules/objects/board.mjs";
import input_handler from "./modules/commands/input-handler.mjs";

// should these be in the initialisation task?
const robo1 = new robot([2, 2, 'NORTH']);   // instantiate a new robot
const board1 = new board(4, 4);             // instantiate a new board


// funny you could get things from down reference chain
// console.log(input_handler.movement().dirs().dirMap());


// let command;
// // while loop is to repeatedly prompt user
// while (command != 'exit') {
//     // Prompt user for input
//     command = prompt('Please enter a command:');

//     // trigger event handler based on current input
//     run(command);

//     // turn below on for auto-reporting
//     if (command != 'exit') { report(); };
// };

// // Exit statement to stop prompts
// if (command === 'exit') { console.log('Exiting') };
