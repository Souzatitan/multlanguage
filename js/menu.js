const hamburguerMenu = document.getElementById ('hamburguer-menu');
const navMenu = document.getElementById ('nav-menu');

hamburguerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});