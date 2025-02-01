document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.carousel-item');
        const dots = carousel.querySelectorAll('.dot');
        const prev = carousel.querySelector('.prev');
        const next = carousel.querySelector('.next');
        let currentIndex = 0;

        function showSlide(index) {
            items.forEach(item => item.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            items[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        }

        // Event listeners
        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });

        // Auto-play
        setInterval(nextSlide, 30000);
    });
});
