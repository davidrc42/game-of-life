// this function returns yes if there are alive cells at the edge of the grid, which means that we should increase it's size with expandGrid funcion
export const checkForExpand = (grid) => {
  let result = false;
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid.length; k++) {
      if (i === 0) {
        if (grid[i][k] === 1) result = true;
      }
      if (k === 0) {
        if (grid[i][k] === 1) result = true;
      }
      if (i === grid.length - 1) {
        if (grid[i][k] === 1) result = true;
      }
      if (k === grid[i].length - 1) {
        if (grid[i][k] === 1) result = true;
      }
    }
  }
  return result;
};
