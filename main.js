document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica del Menú Móvil ---
    const btnMenu = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');

    // Toggle (Abrir/Cerrar)
    btnMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = btnMenu.querySelector('i');
        // Cambiar icono de barras a X
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            btnMenu.querySelector('i').classList.remove('fa-times');
            btnMenu.querySelector('i').classList.add('fa-bars');
        });
    });

    // --- 2. Scroll Suave para anclas ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 3. Animaciones al hacer Scroll (Intersection Observer) ---
    // Esta es la forma moderna de animar elementos cuando entran en pantalla
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // se activa cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, observerOptions);

    // Seleccionar todos los elementos a animar
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(el => observer.observe(el));

});