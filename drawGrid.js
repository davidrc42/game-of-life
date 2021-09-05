export const drawGrid = (
  container,
  grid,
  aliveCellTemplate,
  deadCellTemplate
) => {
  const makeCellAlive = (i, k) => {
    grid[i][k] = 1;
    drawGrid(container, grid, aliveCellTemplate, deadCellTemplate);
  };
  const clearGrid = () => {
    container.querySelectorAll("*").forEach((n) => n.remove());
  };
  clearGrid();

  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[i].length; k++) {
      if (grid[i][k] === 0) {
        let deadCell = deadCellTemplate.cloneNode(true);
        deadCell.addEventListener("click", () => {
          makeCellAlive(i, k);
        });
        container.appendChild(deadCell);
      } else {
        let aliveCell = aliveCellTemplate.cloneNode(true);
        container.appendChild(aliveCell);
      }
    }
  }
};
