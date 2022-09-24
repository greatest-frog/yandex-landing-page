nav_links = document.querySelectorAll('.parts-item');

nav_links.forEach(link => {
    link.addEventListener('click', e => setActive(e));
});

function setActive(event) {
    const previous_active = document.querySelector('.active');
    previous_active.classList.remove('active');
    event.target.classList.add('active');
}