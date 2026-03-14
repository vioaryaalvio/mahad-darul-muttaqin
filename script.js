// 1. Efek Navbar Berubah Warna saat Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. Animasi Masuk (ScrollReveal)
ScrollReveal().reveal('.hero-content', {
    duration: 2000,
    origin: 'top',
    distance: '50px',
    delay: 200
});

ScrollReveal().reveal('.s-reveal', {
    duration: 1200,
    origin: 'bottom',
    distance: '30px',
    interval: 200 // Muncul satu per satu
});

// 3. Smooth Scroll untuk Link Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});