import { expandGrid } from "./expandGrid.js";
import { drawGrid } from "./drawGrid.js";
import { evolveGrid } from "./evolveGrid.js";

const gridContainer = document.querySelector(".gameGrid");
const deadCellTemplate = document.createElement("div");
const aliveCellTemplate = document.createElement("div");

deadCellTemplate.classList.add("deadCell");
aliveCellTemplate.classList.add("aliveCell");

let grid = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0],
];

expandGrid(grid);
grid = evolveGrid(grid);
gridContainer.style.gridTemplateRows = `repeat(${grid.length},1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${grid.length},1fr)`;

drawGrid(gridContainer, grid, aliveCellTemplate, deadCellTemplate);

drawGrid();
