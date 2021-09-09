export const clearGrid = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid.length; k++) {
      grid[i][k] = 0;
    }
  }
};
