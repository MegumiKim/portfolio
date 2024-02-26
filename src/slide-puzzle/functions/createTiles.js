import { handleClick } from "../slide.js";

var rows = 3;
var columns = 3;
let i = 1;

export function createTiles(board, imgOrder) {
  for (let r = 1; r < rows + 1; r++) {
    for (let c = 1; c < columns + 1; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      // tile.draggable = true;
      // console.log(i);
      tile.classList.add(`item-${imgOrder[i - 1]}`);
      board.append(tile);

      tile.addEventListener("click", handleClick);
      i++;
    }
  }
}
