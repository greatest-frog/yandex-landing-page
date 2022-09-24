nav_links = document.querySelectorAll('.parts-item');

nav_links.forEach(link => {
    link.addEventListener('click', e => setActive(e.target));
});

function setActive(target) {
    const previous_active = document.querySelector('.active');
    previous_active.classList.remove('active');
    target.classList.add('active');
}

function getId() {
    let link = window.location.href;
    let hashtag_index = link.indexOf('#');
    let id = undefined;
    if (hashtag_index !== -1) id = link.slice(hashtag_index+1);
    return id;
}


let id = getId();
if (id !== undefined) {
    let active = document.getElementById(`${id}-link`);
    if(active) setActive(active);
}
