export function changeImage() {
  const path = "../assets/oslomap.jpg";
  const tiles = document.querySelectorAll('[class^="item-"]');

  tiles.forEach((tile) => {
    tile.style.backgroundImage = `url("${path}")`;
  });

  const blankTile = document.querySelector(".item-9");
  blankTile.style.backgroundImage = "none";

  // board.innerHTML = "";

  // createTiles();
}
