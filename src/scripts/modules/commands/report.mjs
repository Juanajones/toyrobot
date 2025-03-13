'use strict';

// report pos

export default class report {
    constructor(object) {
        this.loc = object.loc;
    }

    report = function report() {
        return console.log(`${object} at ${loc}`);
    }
};

// Report robot current position & facing
// const report = function () {
//     console.log(`Robot at X${robot.x} Y${robot.y}, facing ${robot.dir}`);
// };