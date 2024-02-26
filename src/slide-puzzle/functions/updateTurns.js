var turns = 0;

export function updateTurns() {
  turns++;
  document.getElementById("turns").innerText = turns;
}
