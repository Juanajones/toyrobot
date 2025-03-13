'use strict';

// tableCreate()
function tableCreate() {
    const body = document.body,
        tbl = document.createElement('table');

    for (let i = 0; i < 5; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < 5; j++) {
            const td = tr.insertCell();
            const createCell = (text) => td.appendChild(document.createTextNode(text));

            if (i === robot.initX && j === robot.initY) {
                createCell('☼');
                td.classList.add('startCell');
                // console.log(td.className);

            } else if (i === robot.x && j === robot.y) {
                createCell(dirArrows[dirs.indexOf(robot.dir)]);
                td.classList.add('currentCell');
                // console.log(td.className);

            } else {
                createCell(``);
                td.classList.add('cell');
                // console.log(td.className);

            };
            td.style.border = '1px solid black';
        }
    }

    body.appendChild(tbl);
};


// initialise page
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Elements
const btnStart = document.querySelector('button');
btnStart.className = 'btnStart';
const inputCommands = document.querySelector('textarea');

// all that stuff is just drawing page ^
// -----------------------------------------------------------------------
// magic
let dirs = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
let dirArrows = ['↑', '→', '↓', '←'];
let xBounds = [0, 4];
let yBounds = [0, 4];
let inBounds = (pos, bounds) => pos >= bounds[0] && pos <= bounds[1];
let boundaryCheck = (posX, posY) => inBounds(posX, xBounds) && inBounds(posY, yBounds);

const robot = {
    // x: undefined,
    // y: undefined,
    // dir: undefined
};

// Place X,Y,F
const place = function (loc) {
    const placementLoc = loc.split(',');

    robot.x = +placementLoc[0];
    robot.y = +placementLoc[1];
    robot.dir = placementLoc[2];

    // robot.initX ??= robot.x;
    // robot.initY ??= robot.y;
    // robot.initDir ??= robot.dir;
};

// Check valid placement
const validPlacement = function (loc) {
    const xPos = +loc[0];
    const ypos = +loc[1];
    const dir = loc[2];

    return loc != undefined && dir != undefined &&
        typeof dir === 'string' &&
        dirs.indexOf(dir) != -1 &&
        boundaryCheck(xPos, ypos);
};

// Report
const report = function () {
    console.log(robot.x + ',' + robot.y + ',' + robot.dir);
};

// Rotate
const rotate = function (dir) {
    const rot = dir === "RIGHT" ? 1 : dir === "LEFT" ? -1 : 0;
    const newDirIndex = (dirs.indexOf(robot.dir) + rot + 4) % 4;
    robot.dir = dirs[newDirIndex];
};

// Move
const move = function () {
    robot.dir === 'NORTH' && robot.x != 0 ? robot.x -= 1 : '';
    robot.dir === 'EAST' && robot.y != 4 ? robot.y += 1 : '';
    robot.dir === 'SOUTH' && robot.x != 4 ? robot.x += 1 : '';
    robot.dir === 'WEST' && robot.y != 0 ? robot.y -= 1 : '';
};

// Start btn
btnStart.addEventListener('click', function (e) {
    e.preventDefault();

    const commandArray = inputCommands.value.trim().toUpperCase().split('\n');

    for (const command of commandArray) {
        const currCommand = command.split(' ')[0];
        const loc = command.split(' ')[1];

        if (
            currCommand != 'PLACE' &&
            (robot.x === undefined || robot.y === undefined)
        ) {
            continue;
        } else if (
            currCommand === 'PLACE' && validPlacement(loc.split(','))
        ) {
            place(loc);
        } else if (currCommand === 'REPORT') {
            report();
        } else if (currCommand === 'LEFT') {
            rotate('LEFT');
        } else if (currCommand === 'RIGHT') {
            rotate('RIGHT');
        } else if (currCommand === 'MOVE') {
            move();
        } else { continue; }
    };

    robot.initX && tableCreate();
});

