document.addEventListener('DOMContentLoaded', () => {
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add or remove fade-in class based on visibility
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            } else {
                entry.target.classList.remove('fade-in-visible');
                // Reset the opacity and transform when out of view
                entry.target.style.opacity = '0';
                if (entry.target.classList.contains('sponsor-item')) {
                    entry.target.style.transform = 'translateX(-50px)';
                } else {
                    entry.target.style.transform = 'translateY(20px)';
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        observer.observe(element);
    });

    // Add visible class to elements already in view on load
    setTimeout(() => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('fade-in-visible');
            }
        });
    }, 100);
}); 