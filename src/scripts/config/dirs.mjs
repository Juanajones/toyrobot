'use strict';

export default class dirs {
    constructor(){}
    
    static dirMap(){
    return new Map([
            ['NORTH', ['y', 1]],
            ['EAST', ['x', 1]],
            ['SOUTH', ['y', -1]],
            ['WEST', ['x', -1]]
        ]);
    }
}