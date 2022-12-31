const header = document.querySelector('.header');

window.onscroll = function(){
    windowScroll();
}

function windowScroll() {
    header.classList.toggle("header--fill", header.scrollTop > 50 || document.documentElement.scrollTop > 50);
}