const introImg = document.querySelector(".intro-img");
const introSlide = document.querySelector(".slide-intro");
const header = document.querySelector(".header");

const iLikeSlide = document.querySelector(".slide-ilike");
const title = document.querySelector(".title");
const description = document.querySelector(".description");

const projectSlide = document.querySelector(".slide-projects");
const projectsTitle = document.querySelector(".projects-title");

window.onscroll = (e) => {
  applyParallax(introSlide, introImg, -0.2, 0);
  makeSticky(header);
  applyParallax(iLikeSlide, title, 0.2, -0.8);

  fadeIn(title);
  fadeIn(description);
  applyParallax(iLikeSlide, description, 0.2);

  // projects

  fadeIn(projectsTitle);
};
