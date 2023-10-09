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

scrollObserver();
