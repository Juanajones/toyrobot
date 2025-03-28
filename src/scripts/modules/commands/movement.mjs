'use strict';

import directions from "../../config/directions.mjs";

// is this dumb?
// should this just be bundled into the object?
// in future could use this to move objects differently/handle multiple objects/move the surface itself instead

// movement handler
// 1. placement
// 2. movement
// 3. rotation

// assume object currently on a surface
// do we need to specify surface?
// do we then need to get surface size to prevent falls?
// do we need movement size/duration/length?

export default class movement {
    constructor() {}

    // move object in direction
    static move(object) {
        // get array(ex. [-1, x]) from Increment map matching curr direction
        // let incrementResult = increment.get(directions.indexOf(this.facing));
        let incrementResult = directions.get(object.facing);

        // <call validation on current surface here>

        // ex. WEST === robot.x + -1
        this[incrementResult[1]] = Math.min(
            Math.max(
                this[incrementResult[1]] + eval(incrementResult[2]), 0
            ), 4
        );
    };

    static rotate(object, direction){
        let rotation = direction === 'RIGHT' ? 1 : direction === "LEFT" ? -1 : 0;
        const newDirectionIndex = (directions.get(this.direction)[0] + rotation + 4) % 4;
        this.facing = directions.keys()[newDirectionIndex]; // this doesn't work!
    };
};
