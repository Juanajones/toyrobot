'use strict';

import robot from "./modules/objects/robot.mjs";
import surface from "./modules/objects/surface.mjs";
import input_handler from "./modules/commands/input-handler.mjs";

let object;
let table;

// thing that does the things
const run = function(tableElement, object, table) {
    document.getElementById("execute").addEventListener("click", () => {
    const textInput = document.getElementById("input").value.toUpperCase();
    console.log(`Text input: ${textInput}`);

    try {
        const inputParts = textInput.split(/[,\s]+/);
        // console.log(inputParts, object, table);
        
        const runOutput = input_handler.process(inputParts, object, table);

        update(tableElement, object);
        object.reportPosition();

    } catch (error) {
        console.error(error);
    }
    })
};

// func that draws the things
let drawSurface = function(surfaceElement, position, facing) {
    for (let y = 4; y >= 0; y--) {
        for (let x = 0; x < 5; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = `${x},${y}`;
            surfaceElement.appendChild(cell);

            if (position && position.x === x && position.y === y) {
                cell.classList.add("robot");
                cell.classList.add(facing.toLowerCase());
            }
        }
    }
};

// thing to initiate
const init = function() {
    let table = new surface(4,4);
    let object = new robot();

    const tableElement = document.getElementById("table");

    run(tableElement, object, table);
    
    drawSurface(tableElement);
};

// on load initiate
document.addEventListener("DOMContentLoaded", () => {
    init();
});

// thing to update other things
const update = function (tableElement, robot) {
    tableElement.innerHTML = "";
    drawSurface(tableElement, robot.position, robot.facing);
};