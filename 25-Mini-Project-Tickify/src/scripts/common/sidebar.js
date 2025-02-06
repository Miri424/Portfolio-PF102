const sidebar = document.querySelector(".sidebar");
const title = sidebar.querySelector("h3");
const list = sidebar.querySelector("ul");
const offset = 100;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > offset) {
    title.style.position = "fixed";
    title.style.top = "20px";
    list.style.position = "fixed";
    list.style.top = `${title.offsetHeight + 1}px`;
  } else {
    title.style.position = "absolute";
    list.style.position = "absolute";
    list.style.top = `${title.offsetHeight}px`;
}});