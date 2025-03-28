'use strict';

// this is unused, but could be used in future if other objects need to report
export default class report {
    constructor() {};

    static position(object) {
        let position = object.position;
        let facing = object.facing;
        let surface = object.surface;

        switch (surface) {
            case undefined:
                return console.log(`${object} at ${position}, facing ${facing}`);
        
            default:
                return console.log(`${object} at ${position} on ${surface}, facing ${facing}`);
        };
        // what if facing blank, what if pos blank, what if surface itself reporting
    };
};