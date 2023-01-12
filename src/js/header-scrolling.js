const header = document.querySelector('header');
const mq = window.matchMedia("(min-width: 500px)"); // Device width

window.addEventListener('scroll', windowScroll)


function windowScroll() {
    const distance = header.getBoundingClientRect().top + window.scrollY; // Get the distance between header and Y-coordinate (top of documents)

    if (distance > 1) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled')
    }

    
}

