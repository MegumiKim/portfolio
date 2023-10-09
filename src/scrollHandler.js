export function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentScrolledHeight =
    (htmlElement.scrollTop / htmlElement.clientHeight) * 100;

  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentScrolledHeight, 100)
  );
  // console.log(percentScrolledHeight);
}

export function shrinkHeader() {
  const htmlElement = document.documentElement;
  const header = document.querySelector("header");
  const scrolledDistance = htmlElement.scrollTop;

  header.classList.add("shrunkHeader");

  // if scrolledDistance > 0{

  // }
}
