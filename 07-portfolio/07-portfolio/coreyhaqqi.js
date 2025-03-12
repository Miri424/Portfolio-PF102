const aboutSection = document.getElementById("about-section");

window.addEventListener("scroll", () => {
  const sectionPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  const aboutElement = aboutSection.querySelector(".About");

  aboutElement.style.transition = "opacity 0, transform 1.4s ease";

  if (sectionPosition < screenPosition) {
    aboutSection.querySelector(".About").style.opacity = "1";
    aboutSection.querySelector(".About").style.transform = "scale(1)";
  } else {
    aboutSection.querySelector(".About").style.opacity = "0";
    aboutSection.querySelector(".About").style.transform = "scale(0.6)";
  }
});
