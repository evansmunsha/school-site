const courses = [
  {
    image: "./images/index-ml.png",
    title: "Responsive Food Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/dark-mode.png",
    title: "Responsive Dark Mode Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/profile.png",
    title: "Responsive Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/index-ml.png",
    title: "Responsive Food Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/dark-mode.png",
    title: "Responsive Dark Mode Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/profile.png",
    title: "Responsive Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/index-ml.png",
    title: "Responsive Food Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/dark-mode.png",
    title: "Responsive Dark Mode Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/profile.png",
    title: "Responsive Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/index-ml.png",
    title: "Responsive Food Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/dark-mode.png",
    title: "Responsive Dark Mode Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/profile.png",
    title: "Responsive Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/index-ml.png",
    title: "Responsive Food Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/dark-mode.png",
    title: "Responsive Dark Mode Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
  {
    image: "./images/profile.png",
    title: "Responsive Socia Media Website Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam consequatur.Obcaecati necessitatibus laudantium corrupti ratione.",
  },
];
let coursesHTML = "";
courses.forEach((course) => {
  coursesHTML =
    coursesHTML +
    `
    <article class="course">
      <div class="course__image">
        <img src="${course.image}" alt="" />
      </div>
      <div class="course__info">
        <h4>${course.title}</h4>
        <p>
          ${course.text}
        </p>
        <a href="courses.html" class="btn btn-primary">Learn more</a>
      </div>
    </article>
  `;
});
document.querySelector(".courses__container").innerHTML = coursesHTML;
