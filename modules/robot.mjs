'use strict';
// class for robot

export class robot {
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir
    }

    get pos() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set pos(coords) {
        this._x = coords[0];
        this._y = coords[1];
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet = function () {
        console.log(`Hey ${this.fullName}`);
    };

    // Static method
    static hey() {
        console.log(`Hey there 👋`);
        console.log(this);
    }
};