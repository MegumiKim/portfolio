import { moveTile } from "./functions/moveTile.js";

const board = document.getElementById("board");

let currTile;
let blankTile;
let imgOrder = [4, 2, 8, 5, 1, 6, 7, 9, 3];
// var imgOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let imageIndex = 1;
const rows = 3; //number of rows
const columns = 3; //number of columns

window.onload = function () {
  createTiles(board, imgOrder);
};

export function handleClick(e) {
  currTile = e.target;
  blankTile = document.querySelector(".item-9");
  moveTile(currTile, blankTile);
}

export function createTiles() {
  board.innerHTML = "";

  for (let r = 1; r < rows + 1; r++) {
    for (let c = 1; c < columns + 1; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();

      tile.classList.add(`item-${imgOrder[imageIndex - 1]}`);
      board.append(tile);

      tile.addEventListener("click", handleClick);
      imageIndex++;
    }
  }
}

//Show Original
document
  .getElementById("showOriginalBtn")
  .addEventListener("click", (imgOrder, imageIndex) =>
    showOriginalImage(imgOrder, imageIndex)
  );

function showOriginalImage() {
  board.innerHTML = "";
  imageIndex = 1;
  imgOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  createTiles(board, imgOrder);
}

//Reset
document.getElementById("resetBtn").addEventListener("click", reset);
export function reset() {
  // board.innerHTML = "";
  imgOrder = [4, 1, 9, 7, 5, 3, 8, 2, 6];
  imageIndex = 1;
  createTiles();
}
