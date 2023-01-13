const header = document.querySelector('header');

window.addEventListener('scroll', windowScroll);

function windowScroll() {
    const distance = header.getBoundingClientRect().top + header.ownerDocument.defaultView.scrollY; // Get the distance between header and Y-coordinate (viewport)

    if (distance > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled')
    }
}

