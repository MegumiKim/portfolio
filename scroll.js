const scrollElements = document.querySelectorAll(".scroll");

scrollElements.forEach((el) => {
  el.style.opacity = 0;
});

// function isElementInView(el) {
//   const elementTop = el.getBoundingClientRect().top;
//   if (
//     elementTop <= (window.innerHeight || document.documentElement.clientHeight)
//   );
//   return true;
// }

function isElementInView(el) {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
const displayScrollElement = (element) => {
  element.style.opacity = 1;
};

export function handleScroll() {
  scrollElements.forEach((el) => {
    if (isElementInView(el, 100)) {
      displayScrollElement(el);
    }
  });
}
