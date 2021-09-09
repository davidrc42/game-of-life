import { clearGridContainer } from "./clearGridContainer.js";

export const drawGrid = (
  container,
  grid,
  aliveCellTemplate,
  deadCellTemplate
) => {
  const flipStateCell = (i, k) => {
    if (grid[i][k] == 0) grid[i][k] = 1;
    else grid[i][k] = 0;
    drawGrid(container, grid, aliveCellTemplate, deadCellTemplate);
  };
  clearGridContainer(container);

  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[i].length; k++) {
      if (grid[i][k] === 0) {
        let deadCell = deadCellTemplate.cloneNode(true);
        deadCell.addEventListener("click", () => {
          flipStateCell(i, k);
        });
        container.appendChild(deadCell);
      } else {
        let aliveCell = aliveCellTemplate.cloneNode(true);
        aliveCell.addEventListener("click", () => {
          flipStateCell(i, k);
        });
        container.appendChild(aliveCell);
      }
    }
  }
};
