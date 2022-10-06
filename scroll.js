const scrollElements = document.querySelectorAll(".scroll");

scrollElements.forEach((el) => {
  el.style.opacity = 0;
});

const isElementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  // if (
  //   elementTop <= window.innerHeight ||
  //   document.documentElement.clientHeight
  // );
  // return true;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.style.opacity = 1;
};

export const handleScroll = () => {
  scrollElements.forEach((el) => {
    if (isElementInView(el, 100)) {
      displayScrollElement(el);
    }
  });
};
