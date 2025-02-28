document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const popup = document.getElementById('notificationPopup');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('show');
        overlay.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        nav.classList.remove('show');
        overlay.classList.remove('show');
        hamburger.classList.remove('active');
        popup.classList.remove('show');
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
        index = (index + 1) % slideItems.length;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(slideShow, 3000);

    // Efek Gulir
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section, index) => {
        const effectClass = ['fade-in-left', 'fade-in-right', 'fade-in-top', 'fade-in-bottom'][index % 4];
        section.classList.add(effectClass);
        observer.observe(section);
    });

    // Tampilkan notifikasi popup setelah halaman dimuat
    setTimeout(() => {
        popup.classList.add('show');
        overlay.classList.add('show');
    }, 1000);

    // Jadwal Imsak dan Berbuka Puasa
    const imsakTime = document.getElementById('imsak-time');
    const berbukaTime = document.getElementById('berbuka-time');

    // Ganti 'city' dengan nama kota yang sesuai
    const city = 'Jakarta';
    const apiURL = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia&method=2`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            imsakTime.textContent = data.data.timings.Imsak;
            berbukaTime.textContent = data.data.timings.Maghrib;
        })
        .catch(error => {
            console.error('Error fetching jadwal:', error);
            imsakTime.textContent = 'Gagal mengambil data';
            berbukaTime.textContent = 'Gagal mengambil data';
        });
});

function closePopup() {
    const popup = document.getElementById('notificationPopup');
    const overlay = document.getElementById('overlay');
    popup.classList.remove('show');
    overlay.classList.remove('show');
}
