document.addEventListener('DOMContentLoaded', () => {

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
