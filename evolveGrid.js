// rules:
// Any alive cell with fewer than two live neighbours dies, as if by underpopulation
// Any live cell with two or three live neighbours lives on to the next generation
// Any live cell with more than three live neighbours dies, as if by overpopulation
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction

export const evolveGrid = (grid) => {
  const evolvedGrid = grid.slice();
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[i].length; k++) {
      let targetedCell = grid[i][k];
      let aliveNeighbours = 0;
      if (grid[i - 1]) {
        if (grid[i - 1][k - 1] == 1) aliveNeighbours++;
        if (grid[i - 1][k] == 1) aliveNeighbours++;
        if (grid[i - 1][k + 1] == 1) aliveNeighbours++;
      }
      if (grid[i]) {
        if (grid[i][k - 1] == 1) aliveNeighbours++;
        if (grid[i][k + 1] == 1) aliveNeighbours++;
      }
      if (grid[i + 1]) {
        if (grid[i + 1][k - 1] == 1) aliveNeighbours++;
        if (grid[i + 1][k] == 1) aliveNeighbours++;
        if (grid[i + 1][k + 1] == 1) aliveNeighbours++;
      }
      // rule 1
      if (targetedCell == 1 && aliveNeighbours < 2) evolvedGrid[i][k] = 0;
      // rule 2
      if (targetedCell == 1 && (aliveNeighbours == 2 || aliveNeighbours == 3)) {
        evolvedGrid[i][k] = 1;
      }
      //rule3
      if (targetedCell == 1 && aliveNeighbours > 3) evolvedGrid[i][k] = 0;
      // rule 4
      if (targetedCell == 0 && aliveNeighbours == 2) evolvedGrid[i][k] = 1;
    }
  }
  console.log(grid);
  console.log(evolvedGrid);
  return evolvedGrid;
};
