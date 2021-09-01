const gridContainer = document.querySelector(".gameGrid");

const emptyCellTemplate = document.createElement("div");
const cellTemplate = document.createElement("div");
emptyCellTemplate.classList.add("emptyCell");
cellTemplate.classList.add("cell");

// let grid = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
// ];
// let grid = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];
let grid = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

gridContainer.setAttribute(
  "grid-template-columns",
  `repeat(${grid.length},1fr)`
);

gridContainer.setAttribute("grid-template-rows");
gridContainer.style.gridTemplateRows(`repeat(${grid.length},1fr)`);
gridContainer.style.gridTemplateColumns(`repeat(${grid.length},1fr)`);

const drawGrid = () => {
  count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[i].length; k++) {
      count++;
      if (grid[i][k] === 0) {
        let emptyCell = emptyCellTemplate.cloneNode(true);
        emptyCell.setAttribute("grid-column", i);
        gridContainer.append(emptyCell);
      } else {
        let cell = cellTemplate.cloneNode(true);
        cell.setAttribute("grid-column", i);
        gridContainer.append(cell);
      }
    }
  }
  console.log(count);
};
drawGrid();
