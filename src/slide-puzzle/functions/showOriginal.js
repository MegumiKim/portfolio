import { createTiles } from "../slide.js";

export function showOriginalImage(imgOrder, i) {
  console.log(imgOrder);
  board.innerHTML = "";
  i = 1;
  imgOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  createTiles(board, imgOrder);
}
