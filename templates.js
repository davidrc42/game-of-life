import { cycling } from "./index.js";
import { expandGrid } from "./expandGrid.js";
import { drawGrid } from "./drawGrid.js";
import { clearGrid } from "./clearGrid.js";
import { grid } from "./index.js";

export const root = document.documentElement;
export const body = document.querySelector("body");
export const buttonsContainer = document.createElement("div");
export const gridContainer = document.querySelector(".gameGrid");

export const startButton = document.querySelector(".startButton");
export const clearButton = document.querySelector(".clearButton");
export const expandButton = document.querySelector(".expandButton");

export const aliveCellTemplate = document.createElement("div");
export const deadCellTemplate = document.createElement("div");

buttonsContainer.appendChild(startButton);
buttonsContainer.appendChild(clearButton);
buttonsContainer.appendChild(expandButton);
body.append(buttonsContainer);

startButton.classList.add("button");
clearButton.classList.add("button");
expandButton.classList.add("button");

clearButton.innerHTML = "clear";
startButton.innerHTML = "start";
expandButton.innerHTML = "expand";

startButton.addEventListener("click", () => {
  if (cycling.value == true) {
    cycling.value = false;
    startButton.innerHTML = "start";
  } else {
    cycling.value = true;
    startButton.innerHTML = "stop";
  }
});

clearButton.addEventListener("click", () => {
  clearGrid(grid);
  cycling.value = false;
  drawGrid(gridContainer, grid, aliveCellTemplate, deadCellTemplate);
  startButton.innerHTML = "start";
});

deadCellTemplate.classList.add("deadCell");
aliveCellTemplate.classList.add("aliveCell");
