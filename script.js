// Animasi saat load halaman
window.addEventListener('load', function () {
    const elementsToAnimate = document.querySelectorAll('.project-item');

    elementsToAnimate.forEach(function (element, index) {
        element.style.animation = `fadeIn 0.5s ease ${index * 0.2}s`;
    });
});
