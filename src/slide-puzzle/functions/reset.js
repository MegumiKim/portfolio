export function reset() {
  board.innerHTML = "";
  i = 1;
  imgOrder = [4, 1, 9, 7, 5, 3, 8, 2, 6];
  createTiles(board, imgOrder);
}
