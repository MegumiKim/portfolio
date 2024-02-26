export function isValidMove(currTile, blankTile) {
  // Split IDs to get the current and blank row and column numbers //ex. "1-2" -> ["1", "2"]
  let [currentRow, currentColumn] = currTile.id.split("-").map(Number);
  let [blankRow, blankColumn] = blankTile.id.split("-").map(Number);

  // Calculate the difference in position
  let horizontalMove = currentColumn - blankColumn;
  let verticalMove = currentRow - blankRow;

  // Check if the move is either horizontal or vertical by one tile
  return (
    (Math.abs(horizontalMove) == 1 && verticalMove == 0) ||
    (Math.abs(verticalMove) == 1 && horizontalMove == 0)
  );
}
