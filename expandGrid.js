export const expandGrid = (grid) => {
  let expandedGrid = [...grid];
  const OuterCells = Array(expandedGrid.length).fill(0);
  for (let i = 0; i < expandedGrid.length; i++) {
    expandedGrid[i].push(0);
    expandedGrid[i].unshift(0);
  }
  expandedGrid.push([...OuterCells, 0, 0]);
  expandedGrid.unshift([...OuterCells, 0, 0]);
  return expandedGrid;
};
