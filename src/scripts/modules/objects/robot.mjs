'use strict';

// specify robot

export default class robot {
    constructor(loc) {
        this.loc = loc;
    }

    get pos() {
        return this.loc;
    }

    // // Set a property that already exists
    // set pos(loc) {
    //     this._loc = loc;
    //     console.log(this._loc, loc);
    // }
};