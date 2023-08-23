// import { handleScroll } from "./scroll.js";
import projects from "./projects.js";
import card from "./projectCard.js";

const container = document.querySelector(".projects-wrapper");

projects.forEach((project) => {
  const projectCard = card(project);

  container.innerHTML += projectCard;
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
let menuOpen = false;

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
