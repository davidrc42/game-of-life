import { expandGrid } from "./expandGrid.js";
import { checkForExpand } from "./checkForExpand.js";
import { drawGrid } from "./drawGrid.js";
import { evolveGrid } from "./evolveGrid.js";
import * as tmp from "./templates.js";

export let grid = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

grid = expandGrid(grid);
grid = expandGrid(grid);
tmp.gridContainer.style.gridTemplateRows = `repeat(${grid.length},1fr)`;
tmp.gridContainer.style.gridTemplateColumns = `repeat(${grid.length},1fr)`;
drawGrid(tmp.gridContainer, grid, tmp.aliveCellTemplate, tmp.deadCellTemplate);

// when true,the game cycles will go on an interval automatically
export let cycling = {
  value: false,
};

tmp.expandButton.addEventListener("click", () => {
  grid = expandGrid(grid);
  drawGrid(
    tmp.gridContainer,
    grid,
    tmp.aliveCellTemplate,
    tmp.deadCellTemplate
  );
});

let count = 0;
let gameCycle = setInterval(() => {
  if (cycling.value === true) {
    count++;
    if (count > 50) {
      count = 0;
      grid = evolveGrid(grid);
    }
    if (checkForExpand(grid)) grid = expandGrid(grid);
    drawGrid(
      tmp.gridContainer,
      grid,
      tmp.aliveCellTemplate,
      tmp.deadCellTemplate
    );
  }
  tmp.gridContainer.style.gridTemplateRows = `repeat(${grid.length},1fr)`;
  tmp.gridContainer.style.gridTemplateColumns = `repeat(${grid.length},1fr)`;
  tmp.root.style.setProperty("--cellSide", `${500 / grid.length}px`);
}, 10);
