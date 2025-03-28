'use strict';

// specify board
export default class surface {
    constructor(x = 5, y = 5) {
        this.x = x; // max X
        this.y = y; // max Y
    }

    getBounds() {
        console.log(`Current surface has bounds: X: 0 to ${this.x}, Y: 0 to ${this.Y}`);
    }
};