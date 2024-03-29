const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
let menuOpen = false;

export function toggleMenu() {
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
      nav.style.display = "flex";
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
      nav.style.display = "none";
    }
  });
}
