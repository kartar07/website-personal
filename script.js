document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

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

    // Auto-slide untuk galeri
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

    setInterval(slideShow, 3000); // Ganti gambar setiap 3 detik

    // Efek Gulir
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-in-left')) {
                    entry.target.style.transform = 'translateX(0)';
                } else if (entry.target.classList.contains('fade-in-right')) {
                    entry.target.style.transform = 'translateX(0)';
                } else if (entry.target.classList.contains('fade-in-top')) {
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('fade-in-bottom')) {
                    entry.target.style.transform = 'translateY(0)';
                }
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach((section, index) => {
        // Assign different fade-in classes based on section index
        if (index % 4 === 0) {
            section.classList.add('fade-in-left');
        } else if (index % 4 === 1) {
            section.classList.add('fade-in-right');
        } else if (index % 4 === 2) {
            section.classList.add('fade-in-top');
        } else {
            section.classList.add('fade-in-bottom');
        }
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan notifikasi popup setelah halaman dimuat
    const popup = document.getElementById('notificationPopup');
    const overlay = document.getElementById('overlay');

    function showPopup() {
        popup.classList.add('show');
        overlay.classList.add('show');
    }

    // Tunda tampilan popup selama 1 detik
    setTimeout(showPopup, 1000);
});

function closePopup() {
    const popup = document.getElementById('notificationPopup');
    const overlay = document.getElementById('overlay');
    popup.classList.remove('show');
    overlay.classList.remove('show');
}
