// Animasi saat load halaman
window.addEventListener('load', function () {
    const elementsToAnimate = document.querySelectorAll('.project-item');

    elementsToAnimate.forEach(function (element, index) {
        element.style.animation = `fadeIn 0.5s ease ${index * 0.2}s`;

        // script.js

// Ambil elemen tombol toggle mode
const toggleBtn = document.querySelector('.toggle-btn');

// Cek apakah mode sebelumnya adalah light mode atau dark mode
const currentMode = localStorage.getItem('mode');
if (currentMode) {
    document.body.classList.add(currentMode);
}

// Fungsi untuk mengganti mode
function toggleMode() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light-mode');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('mode', 'dark-mode');
    }
    document.body.classList.add(localStorage.getItem('mode'));
}

// Tambahkan event listener untuk tombol toggle
toggleBtn.addEventListener('click', toggleMode);

    });
});
