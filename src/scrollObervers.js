// Intersection Observer

const sections = document.querySelectorAll("section");
const faders = document.querySelectorAll(".fade-in");

const observerOptions = {
  root: null, //viewport,
  threshold: 0,
  rootMargin: "-150px",
};

const observer = new IntersectionObserver(function (entires, observer) {
  entires.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle("visible");
    observer.unobserve(entry.target);
  });
}, observerOptions);

export function scrollObserver() {
  sections.forEach((section) => {
    observer.observe(section);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  });
}

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px",
};
export const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
