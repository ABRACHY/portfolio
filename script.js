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

    // shrink nav on scroll
    const navContainer = document.querySelector('.nav-container');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navContainer.style.background = 'rgba(10, 10, 10, 0.95)';
            navContainer.style.boxShadow = '0 0 20px rgba(101, 163, 13, 0.08), 0 4px 30px rgba(0, 0, 0, 0.6)';
        } else {
            navContainer.style.background = 'rgba(10, 10, 10, 0.85)';
            navContainer.style.boxShadow = '0 0 20px rgba(101, 163, 13, 0.05), 0 4px 30px rgba(0, 0, 0, 0.4)';
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

    // dynamic footer year
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // send contact details directly to WhatsApp
    const whatsappForm = document.getElementById('whatsapp-contact-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(whatsappForm);
            const name = formData.get('name')?.trim();
            const phone = formData.get('phone')?.trim();
            const email = formData.get('email')?.trim() || 'Not provided';
            const service = formData.get('service')?.trim();
            const message = formData.get('message')?.trim();

            const whatsappMessage = [
                'Hello Abderrahim, I want to start a website project.',
                '',
                `Name: ${name}`,
                `Phone/WhatsApp: ${phone}`,
                `Email: ${email}`,
                `Project type: ${service}`,
                '',
                'Project details:',
                message
            ].join('\n');

            const whatsappUrl = `https://wa.me/212702446125?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }

});
