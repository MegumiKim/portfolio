import { cloneTemplate } from "./cloneTemplate.js";

export const postProject = (data, container, index) => {
  const doc = cloneTemplate("card");
  const cardTitle = doc.querySelector(".card-title");
  const img = doc.querySelector("img");
  const thumbnail = doc.querySelector(".img-thumbnail");
  const description = doc.querySelector(".description");
  const textWrapper = doc.querySelector(".card-text-wrapper");

  cardTitle.href = data.url;
  thumbnail.href = data.url;
  cardTitle.innerText = data.name;
  img.src = data.image;
  description.innerText = data.description;
  doc.querySelector(".github-project-link").href = data.repo;
  doc.querySelector(".project-tools").innerText = data.builtWith;

  if (index % 2 === 0) {
    thumbnail.classList.add("from-left");
    textWrapper.classList.add("from-right");
  } else {
    thumbnail.classList.add("from-right");
    textWrapper.classList.add("from-left");
  }

  container.append(doc);

  // Intersection Observer
  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -200px 200px",
  };

  // Observe an element within the 'doc'
  const elementToObserve = thumbnail;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        thumbnail.classList.add("appear");
        textWrapper.classList.add("appear");

        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  observer.observe(elementToObserve);
};
