import { isValidMove } from "./isValidMove.js";
import { swapImages } from "./swapImages.js";
// import { updateTurns } from "./updateTurns.js";

export function moveTile(currTile, blankTile) {
  // Get a static list (array) of classes for both elements
  let currClass = [...currTile.classList];
  let blankClass = [...blankTile.classList];

  if (isValidMove(currTile, blankTile)) {
    swapImages(currTile, blankTile, currClass, blankClass);
    // updateTurns();
  } else {
    console.log("illegal");
  }
}
