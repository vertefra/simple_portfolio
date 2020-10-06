const dotenv = require("dotenv").config();

const introImg = document.querySelector(".intro-img");
const introSlide = document.querySelector(".slide-intro");
const header = document.querySelector(".header");

const iLikeSlide = document.querySelector(".slide-ilike");
const title = document.querySelector(".title");
const description = document.querySelector(".description");

const projectSlide = document.querySelector(".slide-projects");
const projectsTitle = document.querySelector(".projects-title");
const projectCards = document.querySelectorAll(".project-card");

const checkers = document.getElementById("checkers");
const discoveringMars = document.getElementById("discovering-mars");
const tecky = document.getElementById("tecky");
const todo = document.getElementById("todo");
const parliamo = document.getElementById("parliamo");

const social = document.querySelector(".social");
const contactMe = document.querySelector(".slide-contactme");

// const emailForm = document.querySelector(".email-form");

window.onscroll = (e) => {
  applyParallax(introSlide, introImg, -0.8, 0);
  makeSticky(header);
  applyParallax(iLikeSlide, title, 0.2, -0.8);

  fadeIn(title);
  fadeIn(description);
  applyParallax(iLikeSlide, description, 0.2);

  // projects
  applyParallax(projectSlide, projectsTitle, 0, -0.8);
  fadeIn(projectsTitle);

  // projects fadeIn
  fadeIn(checkers);

  fadeIn(discoveringMars);

  fadeIn(tecky);

  fadeIn(todo);

  fadeIn(parliamo);

  // contacts

  applyParallax(contactMe, social, -0.5);
};

// mail

// const nodemailer = require("nodemailer");
// const sender = document.getElementById("email");
// const senderName = document.getElementById("name");
// const button = document.getElementById("send-email");
// const mailerConfig = {
//   host: "smtp.office365.com",
//   secureConnection: true,
//   port: 587,
//   auth: {
//     user: process.env.USER,
//     psw: process.env.PSW,
//   },
// };

console.log(process.env);

// const transporter = nodemailer.createTransport(mailerConfig);

// const mailOptions = {
//   from: sender,
//   to: "francesco@vertefra.com",
//   subject: "contact from website. sender name: " + senderName,
// };

// button.onclick = () => {
//   console.log("clicked");
// };
