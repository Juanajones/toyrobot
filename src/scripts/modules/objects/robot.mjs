'use strict';

import directions from "../../config/directions.mjs";
// import movement from  "../../modules/commands/movement.mjs";
// import report from "../../modules/commands/report.mjs";

// specify robot
export default class robot {
    constructor() {
        // this.position = {x: position[0], y: position[1]}; // [x, y]
        // this.facing = facing;
        // this.surface = surface;
    };

    // this only used if robot object teleport?
    // technically this is handled by instantiating the object
    place(newPosition, newFacing, newSurface) {
        this.position = newPosition; //{x: newPosition[0], y: newPosition[1]};
        this.facing = newFacing;
        this.surface = newSurface;
    };

    move(newPosition) {
        this.position = {x: newPosition[0], y: newPosition[1]};
    };

    rotate(direction) {
        let cardinalDirArray = directions.cardinalDirections;
        let newFacing = function(rotation) {cardinalDirArray[(cardinalDirArray.indexof(this.facing) + rotation + 4) % 4]};

        switch (direction) {
            case 'RIGHT': {
                return this.facing = newFacing(1);
            };

            case 'LEFT': {
                return this.facing = newFacing(-1);
            };

            default: 
                break;
        };
    };

    reportPosition() {
        return console.log(`Position: ${this.position.x}, ${this.position.y} on ${this.surface}, facing ${this.facing}`);
    };
};