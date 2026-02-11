document.addEventListener('DOMContentLoaded', () => {

    // scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('section, h1, .card, form').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // shrink header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.85)';
            header.style.padding = '1rem 2rem';
        } else {
            header.style.background = 'rgba(20, 20, 20, 0.5)';
            header.style.padding = '1.5rem 2rem';
        }
    });

    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const id = anchor.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
