'use strict';

// specify board

export default class board {
    constructor(x = 5, y = 5) {
        this.x = x; // max X
        this.y = y; // max Y
    }

    getBounds() {
        console.log(`Current board has bounds: X: 0 to ${this.x}, Y: 0 to ${this.Y}`);
    }
};