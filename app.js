let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slides img').length;

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = -currentIndex * (100 / totalSlides);
    document.querySelector('.slides').style.animation = 'none';
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = page.id === targetId ? 'block' : 'none';
        });
    });
});