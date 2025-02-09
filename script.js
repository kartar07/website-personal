document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('nav ul li a');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('show');
        overlay.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        nav.classList.remove('show');
        overlay.classList.remove('show');
        hamburger.classList.remove('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('show');
            overlay.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });

    // Auto-slide for gallery
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide-item');
    let index = 0;

    function slideShow() {
        index++;
        if (index >= slideItems.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(slideShow, 3000); // Change image every 3 seconds
});
