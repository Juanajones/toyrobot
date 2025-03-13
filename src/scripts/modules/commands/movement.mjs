'use strict';

import dirs from "../../config/dirs.mjs";

// movement handler
// 1. placement
// 2. movement
// 3. rotation

export default class movement {
    constructor(obj, dir) {
        [this.obj, this.dir] = [obj, dir];
    }

    static dirs() {
        return dirs;
    }

    // move obj in dir
    getBounds() {
        console.log(`Current board has bounds: X: 0 to ${this.x}, Y: 0 to ${this.Y}`);
    }
};


// Place robot on table
// const place = function (loc) {
//     // destructured assignment of variables
//     let [x, y, dir] = loc;
//     // assign Robot object values to placement values
//     [robot.x, robot.y, robot.dir] = [+x, +y, dir];
// };


// Move robot in facing direction
// const move = function () {
//     // get array(ex. [-1, x]) from Increment map matching curr direction
//     // let incrementResult = increment.get(dirs.indexOf(robot.dir));
//     let incrementResult = dirs.get(robot.dir);

//     // Note: Math.max/min below are for bounds
//     // min: ex. robot.y <= 4 ? 4
//     // max: ex. robot.x >= 0 ? 0

//     // Set relevant robot x/y value to Evaluated value from map
//     // ex. WEST === robot.x + -1
//     robot[incrementResult[1]] = Math.min(
//         Math.max(
//             robot[incrementResult[1]] + eval(incrementResult[2]), 0
//         ), 4
//     );
// };


// Rotate robot per input dir
// const rotate = function (sindex) {
//     // sindex == sinistral/dextral == left/right

//     // Rotation value per array [1, 2, 3, 4]
//     // Right increments ->, Left decrements <-, else stay
//     let rot = sindex === 'RIGHT' ? 1 : sindex === "LEFT" ? -1 : 0;

//     // Get index of curr dir -> increment/decrement per rot value
//     // ex. turn RIGHT(+1) from EAST(2): 
//     // (2 + 1 + 4) % 4 = (7 / 4) = 1 R 3
//     // New dir = remainder of above = 3 (SOUTH)
//     const newDirIndex = (dirs.get(robot.dir)[0] + rot + 4) % 4;

//     // set new robot direction
//     robot.dir = dirs.keys()[newDirIndex]; // this doesn't work!
// };