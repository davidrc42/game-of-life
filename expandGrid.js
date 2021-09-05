export const expandGrid = (grid) => {
  const OuterCells = Array(grid.length).fill(0);
  for (let i = 0; i < grid.length; i++) {
    grid[i].push(0);
    grid[i].unshift(0);
  }
  grid.push([...OuterCells, 0, 0]);
  grid.unshift([...OuterCells, 0, 0]);
};
