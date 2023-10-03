// change navbar style on scroll

window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
});

//open FQA question

const faqs = document.querySelectorAll(".faq");

faqs.forEach((textOpen) => {
  textOpen.addEventListener("click", () => {
    textOpen.classList.toggle("open");

    //change icon
    const icon = textOpen.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else if (icon.className === "fa-solid fa-minus") {
      icon.className = "fa-solid fa-plus";
    }
  });
});

const menu = document.querySelector(".nav__menu");
const btnMenu = document.querySelector("#open-menu-btn");
const btnClose = document.querySelector("#close-menu-btn");

btnMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  btnClose.style.display = "inline-block";
  btnMenu.style.display = "none";
});

// close nav menu

const closeNav = () => {
  menu.style.display = "none";
  btnClose.style.display = "none";
  btnMenu.style.display = "inline-block";
};
btnClose.addEventListener("click", closeNav);
