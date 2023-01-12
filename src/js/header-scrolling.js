const header = document.querySelector('.header');
const mq = window.matchMedia("(min-width: 500px)"); // Device width

if (mq.matches) {
    window.addEventListener('scroll', windowScroll)
}

function windowScroll() {
    const scroll = document.documentElement.scrollTop

    if (scroll < 1) {
        header.classList.remove("header--scrolled");
    } else {
        header.classList.add("header--scrolled")
    }
}

