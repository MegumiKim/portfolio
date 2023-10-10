import projects from "./projects.js";
import { toggleMenu } from "./menuBtn.js";
import { scrollObserver } from "./scrollObervers.js";
import { postProject } from "./createProject.js";

toggleMenu();
scrollObserver();

//Creates Projects
const projectsContainer = document.querySelector(".projects-wrapper");
projects.forEach((project, index) => {
  postProject(project, projectsContainer, index);
});
