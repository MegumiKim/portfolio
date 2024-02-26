export function swapImages(currTile, blankTile, currClass, blankClass) {
  // Clear existing classes
  currTile.className = "";
  blankTile.className = "";

  // Swap classes
  currTile.classList.add(...blankClass);
  blankTile.classList.add(...currClass);
}
