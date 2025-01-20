const hamburguerMenu = document.getElementById('hamburguer-menu');
const navMenu = document.getElementById('nav-menu');

hamburguerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburguerMenu.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }

});