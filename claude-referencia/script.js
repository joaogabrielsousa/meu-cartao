const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-mobile');

btn.addEventListener('click', () => {
  menu.classList.toggle('aberto');
});
