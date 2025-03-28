'use strict';

// handle user input routing to relevant command

// command, robot, board
// { [command, x, y, facing], robot, board }

// this class will call the relevant command on the object passed into it
export default class input_handler {
    static process(input, object, surface) {
        const [command, newx, newy, facing] = input;
        
        switch (command) {
            case 'PLACE': {
                let newPosition = {x: +newx, y: +newy};
                let newFacing = facing;
                return object.place(newPosition, newFacing, surface);
            }

            case 'REPORT': {
                return object.report();
            }
                    
            case 'MOVE': {
                let newPosition = {x: +newx, y: +newy};
                return object.move(newPosition);
            }

            case "LEFT":
            case "RIGHT": {
                return object.rotate(command);
            }

            default:
                return "Invalid command";
        }
    };
};
