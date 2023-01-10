const headerList = document.querySelector(".header__menu");
const headerBurger = document.querySelector(".header__burger");
const body = document.querySelector("body");

headerBurger.addEventListener("click", function (e) {
    e.preventDefault();
    headerList.classList.toggle("header__menu--active");
    headerBurger.classList.toggle("header__menu--active");
    body.classList.toggle("lock");
})