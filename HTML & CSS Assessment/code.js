const goTopBtn = document.querySelector('.go-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
});

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

goTopBtn.style.display = 'none';

