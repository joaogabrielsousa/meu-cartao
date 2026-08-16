const btnMenu = document.getElementById('btnMenu')
const itensMenu = document.getElementById('itensMenu')

btnMenu.addEventListener('click', () => {

    itensMenu.classList.remove('menu-invisible')
    itensMenu.classList.add('menu-visible')
    btnMenu.classList.remove('menu-invisible')
    btnMenu.classList.add('menu-visible')
});
    
