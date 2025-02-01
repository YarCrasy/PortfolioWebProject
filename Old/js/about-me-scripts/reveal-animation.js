document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    const contentPanels = document.querySelectorAll('.content-panels');
    contentPanels.forEach(panel => {
        observer.observe(panel);
    });
});