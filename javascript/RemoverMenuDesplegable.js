const Enlace = document.getElementById('EnlaceMenuDesplegable');
const Menu = document.getElementById('MenuDesplegable');

const RemoverMenu = () =>{
    Menu.classList.remove('Active')
}
Enlace.addEventListener('click',RemoverMenu);