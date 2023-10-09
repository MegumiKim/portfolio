// import { handleScroll } from "./scroll.js";
// import { setScrollVar, shrinkHeader } from "./scrollHandler.js";
import projects from "./projects.js";
import card from "./projectCard.js";
import { toggleMenu } from "./menuBtn.js";
import { scrollObserver } from "./scrollObervers.js";

toggleMenu();
//Creates Projects
projects.forEach((project) => {
  const projectCard = card(project);

  document.querySelector(".projects-wrapper").innerHTML += projectCard;
});

// const projectThumbs = document.querySelectorAll(".img-thumbnail");

// projectThumbs.forEach((thumb, i) => {
//   if (i % 2 === 0) {
//     thumb.classList.add("from-left");
//   } else {
//     thumb.classList.add("from-right");
//   }
// });

// const textWrappers = document.querySelectorAll(".card-text-wrapper");

// textWrappers.forEach((wrapper, i) => {
//   if (i % 2 === 0) {
//     wrapper.classList.add("from-right");
//   } else {
//     wrapper.classList.add("from-left");
//   }
// });

scrollObserver();
