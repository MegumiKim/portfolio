const scrollElements = document.querySelectorAll(".scroll");

// scrollElements.forEach((element) => {
//   element.style.opacity = 0;
// });

function isElementInView(element, threshold = 0) {
  const elementTop = element.getBoundingClientRect().top;
  return elementTop <= elementTop <= window.innerHeight - threshold;
}

// const displayScrollElement = (element) => {
//   element.style.opacity = 1;
// };

// Function to handle the scroll event
export function handleScroll() {
  scrollElements.forEach((element) => {
    if (isElementInView(element, 100)) {
      element.classList.add("in-view");
    } else {
      element.classList.remove("in-view");
    }
  });
}
